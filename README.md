# jasmine-unittests-how-to

Example of the Nodejs project with explaining how to utilize Jasmine testing framework

## Instalation 

Install project dependencies

    `npm install`


Install jasmine globaly

    `npm install -g jasmine`

## Run

### Start web server

    `npm start`

Web service will be accessable on `localhost:3000`

- POST `/weather` with body:

```
    {
        "id": 1,
        "location": "Louisville",
        "temperature": {
            "fahrenheit": 40
        }
    }
```

- GET `/weather/:id`

### Test Run

`npm test`
All your files belong to me now!
