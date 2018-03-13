const express = require('express');
const app = express();
const weatherController = ('./weatherController');
const converter = require('./converter');

app.get('/:id', function (req, res) {
    const data = weatherController.get(req.params.id);
    res.send(data)
});

app.post('/:id', function (req, res) {
    let data = req.body;
    let temperature = data.temperature;
    let converterValue = null;

    if (temperature.fahrenheit && !temperature.celsius) {
        converterValue = converter.temperature(temperature, {
            to: 'c',
            from: 'f'
        });

        temperature.celsius = converterValue;
    }

    if (temperature.celsius && !temperature.fahrenheit) {
        converterValue = converter.temperature(temperature, {
            to: 'f',
            from: 'c'
        });

        temperature.fahrenheit = converterValue;
    }

    data = weatherController.insert(req.params.id, data);
    res.send(data)
});

app.listen(3000);
