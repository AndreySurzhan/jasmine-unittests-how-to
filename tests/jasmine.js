const Jasmine = require('jasmine');
const myReporter = require('./utils/myReporter');
const config = require('./support/jasmine');
const myMatchers = require('./utils/myMatchers');

const jasmine = new Jasmine();

jasmine.loadConfig(config);
jasmine.addReporter(myReporter);

beforeEach(function () {
    jasmine.addMatchers(myMatchers);
});

jasmine.onComplete( function( passed ) {
    if( passed ) {
        console.log('Clean up data');
    }

    console.log('Write report somewhere');
});

jasmine.execute();
