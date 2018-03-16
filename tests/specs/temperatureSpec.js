const converter = require('../../src/converterUtility');

describe('Unit tests for convertTemperature function', () => {
    beforeAll(() => {
        console.log('beforeAll');
        this.expected = {
            celsius: 0,
            fahrenheit: 32
        }
    });

    beforeEach(() => {
        console.log('beforeEach');
    });

    afterAll(() => {
        console.log('afterAll');
    });

    afterEach(() => {
        console.log('afterEach');
    });

    it('Should convertTemperature converts Celsius to Fahrenheit', () => {
        let value = converter.convertTemperature({
            celsius: 0
        });

        expect(value).toBeTruthy();
        expect(value).toBeConverted(this.expected);
    });

    it('Should convertTemperature converts Fahrenheit to Celsius', () => {
        let value = converter.convertTemperature({
            fahrenheit: 32
        });

        expect(value).toBeTruthy();
        expect(value).toBeConverted(this.expected);
    });
});

describe('Unit tests for converer functions', () => {
    it('Should toFahrenheit converts Celsius to Fahrenheit', () => {
        let value = converter.toFahrenheit(0);

        expect(value).toBe(this.expected.fahrenheit)
    });

    it('Should toCelsius converts Fahrenheit to Celsius', () => {
        let value = converter.toCelsius(32);

        expect(value).toBe(this.expected.celsius);
    });
});