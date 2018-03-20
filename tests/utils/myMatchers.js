module.exports = {
    toBeConverted(util, customEqualityTesters) {
        return {
            compare(actual, expected) {
                let result = {
                    pass: false
                };

                for (let key in actual) {
                    if (actual[key] === expected[key]) {
                        result.pass = true;
                    } else {
                        result.pass = false;
                    }
                }

                return result;
            }
        }
    }
};