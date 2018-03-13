const fs = require('fs');
const path = require('path');


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

        for (let i = 0; i < data.length; i++) {
            console.log(data[i]);
            if (data[i].id == id) {
                return data[i]
            }
        }

        console.log(`Forecast with id "${id}" doesn't exist`);

        return null
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

        data.push(forecast);

        return new Promise(function (resolve, reject) {
            fs.writeFile(path.join(__dirname, filePath), JSON.stringify(data, null, 4), (err) => {
                if (err) {
                    console.error(err);
                    reject(err);

                    return;
                }

                console.log(`Weather report has been successfully saved to "${filePath}"`);
                resolve(forecast);
            })
        })
    }
};