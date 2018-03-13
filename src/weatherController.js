const fs = reuqire('fs');

module.exports = {
    /**
     * Get data from DB
     *
     * @function
     * @name get
     *
     * @returns {Object}
     */
    getById(id) {
        const data = require('./data/weather');

        if (!data && !(data instanceof Array)) {
            console.error('Failed to get weather report by id');

            return data
        }

        for (let forecast in data) {
            if (forecast.id === id) {
                return forecast
            }
        }

        console.log(`Forecast with id "${id}" doesn't exist`);

        return data
    },

    /**
     * Insert forcast data to DB
     *
     * @function
     * @name insert
     *
     * @param {Object} forecast
     * @param {string} forecast.location
     * @param {number} forecast.temperature
     *
     * @returns {Object}
     */
    insert(forecast) {
        let filePath = `./data/weather.json`;
        let data = require(filePath);

        forecast.id = Date.now();

        data.add(forecast);

        fs.writeFile(filePath, JSON.stringify(data), 'utf8', (err) => {
            if (err) {
                console.error(err);

                return null
            }

            console.log(`Weather report has been successfully saved to "${filePath}"`);

            return forecast
        })
    }
};