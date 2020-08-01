// const { TestCase } = require("../../../../unit-tests/js/test-case");
const { test } = require("../../../../test-runner/test");
const { getLength } = require("./get-length");

exports.testCases = [
    // new TestCase(
    //     "getLength",
    //     () => getLength([0, 1, 2, 3, 4], 0),
    //     res => res === 5
    // ),
    // new TestCase(
    //     "getLength",
    //     () => getLength([], 0),
    //     res => res === 0
    // )
];

test(
    res => {
        console.log(`getLength: ${res}`);
    },
    [
        () => getLength([0, 1, 2, 3, 4], 0) === 5,
        () => getLength([], 0) === 0
    ]
);