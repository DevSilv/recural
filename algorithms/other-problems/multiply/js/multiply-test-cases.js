// const { TestCase } = require("../../../../unit-tests/js/test-case");
const { test } = require("../../../../test-runner/test");
const { multiply } = require("./multiply");

exports.testCases = [
    // new TestCase(
    //     "multiply",
    //     () => multiply(10, 0),
    //     res => res === 0
    // ),
    // new TestCase(
    //     "multiply",
    //     () => multiply(2, 3),
    //     res => res === 6
    // ),
    // new TestCase(
    //     "multiply",
    //     () => multiply(-15, 2),
    //     res => res === -30
    // ),
    // new TestCase(
    //     "multiply",
    //     () => multiply(2.5, 4),
    //     res => res === 10
    // ),
    // new TestCase(
    //     "multiply",
    //     () => multiply(-1.5, 4),
    //     res => res === -6
    // )
];

test(
    res => {
        console.log(`multiply: ${res}`);
    },
    [
        () => multiply(10, 0) === 0,
        () => multiply(2, 3) === 6,
        () => multiply(-15, 2) === -30,
        () => multiply(2.5, 4) === 10,
        () => multiply(-1.5, 4) === -6
    ]
);