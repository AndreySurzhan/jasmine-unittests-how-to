module.exports = {
    /**
     * Convert temperature from Fahrenheit to celsius and backwards.
     *
     * @function
     * @name temperature
     *
     * @param {number} value
     * @param {Object} params
     * @param {String} params.to - value that determine temperature unit to convert to
     * @param {String} params.from - value that determine temperature unit to convert from
     *
     * @returns {Object}
     */
    temperature (value, params) {
        let convertedValue = {
            from: value,
            to: null
        };

        params.to = params.to.toLowerCase();
        params.from = params.from.toLowerCase();

        if (params.to === 'f' && params.from === 'c') {
            convertedValue.to = (value * 9/5) + 32;
        }

        if (params.to === 'c' && params.from == 'f') {
            convertedValue.to = (value - 32) * 5/9
        }

        if (convertedValue.to) {
            convertedValue.to = parseFloat(convertedValue.to.toFixed(1));
        }

        return convertedValue;
    }
};
