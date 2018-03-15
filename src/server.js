const express = require('express');
const app = express();
const weatherController = require('./weatherController');
const converter = require('./converter');

app.use(express.json());

app.get('/weather/:id', function (req, res) {
    const data = weatherController.getById(req.params.id);
    res.send(data)
});

app.post('/weather', function (req, res) {
    let data = req.body;
    let temperature = data.temperature;
    let converterValue = null;

    if (temperature.hasOwnProperty('fahrenheit') && !temperature.hasOwnProperty('celsius')) {
        converterValue = converter.temperature(temperature.fahrenheit, {
            to: 'c',
            from: 'f'
        });

        temperature.celsius = converterValue.to;
    }

    if (temperature.hasOwnProperty('celsius') && !temperature.hasOwnProperty('fahrenheit')) {
        converterValue = converter.temperature(temperature.celsius, {
            to: 'f',
            from: 'c'
        });

        temperature.fahrenheit = converterValue.to;
    }

    weatherController.insert(data).then(forecast => {
        res.send(forecast)
    });
});

app.listen(3000);
