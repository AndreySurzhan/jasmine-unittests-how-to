const express = require('express');
const app = express();
const weatherController = require('./weatherController');
const converterUtility = require('./converterUtility');

app.use(express.json());

app.get('/weather/:id', function(req, res) {
    const data = weatherController.getById(req.params.id);

    res.send(data)
});

app.post('/weather', function(req, res) {
    const data = req.body

    data.temperature = converterUtility.convertTemperature(data.temperature)

    weatherController.insert(data).then(forecast => {
        res.send(forecast)
    });
});

let server = app.listen(3000);

module.exports = server