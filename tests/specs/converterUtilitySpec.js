const converter = require('../../src/converterUtility');

describe('Unitests for converterUtility', () => {
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

    describe('Unit tests for convertTemperature function', () => {
        it('Should convert Celsius to Fahrenheit using convertTemperature', () => {
            let value = converter.convertTemperature({
                celsius: 0
            });

            expect(value).toBeTruthy();
            expect(value).toBeConverted(this.expected);
        });

        it('Should convert Fahrenheit to Celsius using convertTemperature', () => {
            let value = converter.convertTemperature({
                fahrenheit: 32
            });

            expect(value).toBeTruthy();
            expect(value).toBeConverted(this.expected);
        });
    });

    describe('Unit test converterTemperature with spies', () => {
        it('toFahrenheit should be called while convertTemperature is converting Celsius to Fahrenheit', () => {
            spyOn(converter, 'toFahrenheit')
            spyOn(converter, 'toCelsius')

            let value = converter.convertTemperature({
                celsius: 0
            });

            expect(converter.toFahrenheit).toHaveBeenCalled();
            expect(converter.toFahrenheit).toHaveBeenCalledTimes(1)
            expect(converter.toCelsius).not.toHaveBeenCalled();

        });

        it('toCelsius should be mocked while convertTemperature is converting Fahrenheit to Celsius', () => {
            spyOn(converter, 'toCelsius').and.returnValue(10000)

            let value = converter.convertTemperature({
                fahrenheit: 32
            });

            expect(converter.toCelsius).toHaveBeenCalled();
            expect(converter.toCelsius).toHaveBeenCalledTimes(1)
            expect(converter.toCelsius).toHaveBeenCalledWith(32, 1)
            expect(value).toBeConverted({
                fahrenheit: 32,
                celsius: 10000
            });
        });
    });

    describe('Unit tests for converer functions', () => {
        it('Should convert Celsius to Fahrenheit using toFahrenheit', () => {
            let value = converter.toFahrenheit(0);

            expect(value).toBe(this.expected.fahrenheit)
        });

        it('Should convert Fahrenheit to Celsius using toCelsius', () => {
            let value = converter.toCelsius(32);

            expect(value).toBe(this.expected.celsius);
        });
    });
});