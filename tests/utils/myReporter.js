module.exports = {
    jasmineStarted: (suiteInfo) => {
        console.log(`======= Run "${suiteInfo.totalSpecsDefined}" specs ======`)
    },
    suiteStarted: (result) => {
        console.log(`------------- Suite "${result.fullName} has been starter -------------`);
    },
    specStarted: (result) => {
        console.log(`********* Spec "${result.fullName}" has been starter *********`);
    },
    specDone: (result) => {
        console.log(`********* Spec "${result.description}" has been finished *********`);
        console.log(`Status "${result.status}"`);

        for (var i = 0; i < result.failedExpectations.length; i++) {
            console.log(`Failure: ${result.failedExpectations[i].message}`);
            console.log(result.failedExpectations[i].stack);
        }
    },
    suiteDone: (result) => {
        console.log(`------------- Suite "${result.description}" has been finished -------------`);
        console.log(`Status "${result.status}"`);
    },
    jasmineDone: (result) => {
        console.log(`======= Run has been finished ======`);
    }
};
