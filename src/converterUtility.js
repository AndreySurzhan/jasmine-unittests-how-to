module.exports = {
    /**
     * Convert temperature from Fahrenheit to celsius and backwards.
     *
     * @function
     * @name convertTemperature
     *
     * @param {Object} temperature - might have properties represent temperature units
     * @param {?number} temperature.celsius
     * @param {?number} temperature.fahrenheit
     * @param {number} [precision=1] 
     * 
     * @returns {Object} temperature
     */
    convertTemperature(temperature, precision = 1) {
        if (temperature.hasOwnProperty('fahrenheit') && !temperature.hasOwnProperty('celsius')) {
            temperature.celsius = this.toCelsius(temperature.fahrenheit, precision)
        }

        if (temperature.hasOwnProperty('celsius') && !temperature.hasOwnProperty('fahrenheit')) {
            temperature.fahrenheit = this.toFahrenheit(temperature.celsius, precision)
        }

        return temperature;
    },

    /**
     * @function
     * @name toCelsius
     * 
     * @param {number} value 
     * @param {number} [precision=1] 
     * @returns {number}
     */
    toCelsius(value, precision = 1) {
        return parseFloat(((value - 32) * 5 / 9).toFixed(precision))
    },

    /**
     * @function
     * @name toFahrenheit
     * 
     * @param {number} value 
     * @param {number} [precision=1] 
     * @returns {number}
     */
    toFahrenheit(value, precision = 1) {
        return parseFloat(((value * 9 / 5) + 32).toFixed(precision))
    }
};