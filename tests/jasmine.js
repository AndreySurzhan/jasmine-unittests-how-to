const Jasmine = require('jasmine');
const myReporter = require('./utils/myReporter');
const config = require('./support/jasmine');

const jasmine = new Jasmine();

jasmine.loadConfig(config);
jasmine.addReporter(myReporter);

jasmine.execute();
