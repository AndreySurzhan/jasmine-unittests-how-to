const converter = require('../../src/converter');

describe('Unit tests for temperature conversion', () => {
    beforeAll(() => {
        console.log('beforeAll');
        this.celsius = 0;
        this.fahrenheit = 32;
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

    it('Should convert Celsius to Fahrenheit', () => {
        let value = converter.temperature(this.fahrenheit, {
            to: 'C',
            from: 'F'
        });

        expect(value.to).toBe(this.celsius);
        expect(value).toBeConverted({
            from: this.fahrenheit,
            to: this.celsius
        });
    });

    it('Should convert Fahrenheit to Celsius', () => {
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