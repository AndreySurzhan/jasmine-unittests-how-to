const Jasmine = require('jasmine');
const myReporter = require('./utils/myReporter');
const SpecReporter = require('jasmine-spec-reporter');
const config = require('./support/jasmine');
const myMatchers = require('./utils/myMatchers');

const jasmine = new Jasmine();

jasmine.loadConfig(config);
jasmine.clearReporters();
jasmine.addReporter(new SpecReporter());

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
