// const { TestCase } = require("../../../../unit-tests/js/test-case");
const { test } = require("../../../../test-runner/test");
const { getFactorial } = require("./get-factorial");

exports.testCases = [
    // new TestCase(
    //     "getFactorial",
    //     () => getFactorial(0),
    //     res => res === 1
    // ),
    // new TestCase(
    //     "getFactorial",
    //     () => getFactorial(5),
    //     res => res === 120
    // ),
    // new TestCase(
    //     "getFactorial",
    //     () => getFactorial(10),
    //     res => res === 3628800
    // )
];

test(
    res => {
        console.log(`getFactorial: ${res}`);
    },
    [
        () => getFactorial(0) === 1,
        () => getFactorial(5) === 120,
        () => getFactorial(10) === 3628800
    ]
);