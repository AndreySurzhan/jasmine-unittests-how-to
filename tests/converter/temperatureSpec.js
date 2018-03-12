const converter = require('../../src/converter');

describe('Unit tests for temperature conversion', () => {
    beforeAll(() => {
        console.log('beforeAll');
        this.celsius = 14;
       this.fahrenheit = 57.2;
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

        expect(value).toBe(this.celsius)
    });

    it('Should convert Fahrenheit to Celsius', () => {
        let value = converter.temperature(this.celsius, {
            to: 'F',
            from: 'C'
        });

        expect(value).toBe(this.fahrenheit)
    });

    it('Should not convert if one to or from is not specified correctly', () => {
        let value = converter.temperature(this.fahrenheit, {
            to: 'A',
            from: 'C'
        });

        expect(value).toBe(this.fahrenheit)
    })
});