const request = require('request');

describe('REST API tests weather service', () => {
    beforeAll(() => {
        this.baseUrl = 'http://localhost:3000';
        this.requestBody = {
            location: "Saratov",
            temperature: {
                celsius: 0
            }
        };
        this.id = null;
    });

    it('Should insert new record when calling weather POST endpoint', (done) => {
        const resource = '/weather';

        request.post(`${this.baseUrl}${resource}`, {
            json: this.requestBody
        }, (error, response, body) => {
            if (error) {
                done(error)
            }
            if (response.statusCode !== 200) {
                done(`Response failed with status code "${response.statusCode}"`)
            }

            expect(body).toBeTruthy();
            expect(body.id).toBeTruthy();
            expect(body.location).toBe(this.requestBody.location);
            expect(body.temperature.celsius).toBe(this.requestBody.temperature.celsius);
            expect(body.temperature.fahrenheit).toBe(32);

            this.id = body.id;

            done()
        });
    });

    it('Should get existing record when calling weather GET endpoint', (done) => {
        const resource = `/weather/${this.id}`;


        request.get(`${this.baseUrl}${resource}`, {
            json: true
        }, (error, response, body) => {
            if (error) {
                done(error)
            }

            if (response.statusCode !== 200) {
                done(`Response failed with status code "${response.statusCode}"`)
            }

            expect(body).toBeTruthy();
            expect(body.id).toBe(this.id);
            expect(body.location).toBe(this.requestBody.location);
            expect(body.temperature.celsius).toBe(this.requestBody.temperature.celsius);
            expect(body.temperature.fahrenheit).toBe(32);

            done()
        });
    });
});