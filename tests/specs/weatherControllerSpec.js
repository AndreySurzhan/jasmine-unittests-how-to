const weatherController = require('../../src/weatherController');

describe('Unit tests for weather controller', () => {
    it('Possible to get weather forecast by id', () => {
        let value = weatherController.get(1);

        expect(value.to).(this.celsius);
    });

    it('Possible to insert weather forecast', () => {
        let value = converter.temperature(this.celsius, {
            to: 'F',
            from: 'C'
        });

        expect(value.to).toBe(this.fahrenheit);
        expect(value).toBeConverted({
            from: this.celsius,
            to: this.fahrenheit
        });
    });

    it('Should not convert if one to or from is not specified correctly', () => {
        let value = converter.temperature(this.fahrenheit, {
            to: 'C',
            from: 'TEST'
        });

        expect(value.from).toBe(this.fahrenheit);
        expect(value.to).toBe(null);
        expect(value).toBeConverted({
            from: this.fahrenheit,
            to: null
        });
    })
});