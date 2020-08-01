const process = require("process");

/**
 * @param {Function[]} testFnsArr An array of test functions; each of them is
 *  a function, invokation of which represents running a test
 * @param {boolean} res A helper variable; always true (between consecutive
 *  recursive invokations of the function, it is a value indicating whether all
 *  functions from testFnsArr that have been run so far have returned
 *  true (true) or not (false))
 * @returns {boolean}
 */
const testRecursive
    = (testFnsArr, res) =>
        testFnsArr.length === 0
            ? res
            : testRecursive(
                testFnsArr.slice(1),
                res && testFnsArr[0]() === true
            );

/**
 * @callback TestDebugFn A test-debug function; a function, invokation of which
 *  represents debugging a test
 * @param {boolean} [res] The return value of a test function
 */

/**
 * @callback TestFn A test function; a function, invokation of which represents
 *  running a test
 * @returns {boolean} The result of invoking the test function
 */

/**
 * @param {TestDebugFn} testDebugFn A test-debug function; a function,
 *  invokation of which represents debugging a test
 * @param {TestFn[]} testFnsArr An array of test functions; each of them is
 *  a function, invokation of which represents running a test
 * @returns {boolean} True if each function of testFnsArr returns true;
 *  otherwise, false
 */
exports.test
    = (testDebugFn, testFnsArr) => {
        const result = testRecursive(testFnsArr, true);
        testDebugFn(result);

        if (result === false) {
            process.exit(1);
        }

        return result;
    };