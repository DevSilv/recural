// const { TestCase } = require("../../../../unit-tests/js/test-case");
const { test } = require("../../../../test-runner/test");
const { deepAreArraysEqual }
    = require("../../are-arrays-equal/js/are-arrays-equal");
const { slice } = require("./slice");

exports.testCases = [
    // new TestCase(
    //     "slice",
    //     () => slice([0, 1, 2, 3, 4], 2, 4, [], 0),
    //     res => deepAreArraysEqual(res, [2, 3])
    // ),
    // new TestCase(
    //     "slice",
    //     () => slice([0, 1, 2, 3, 4], 0, 0, [], 0),
    //     res => deepAreArraysEqual(res, [])
    // )
];

test(
    res => {
        console.log(`slice: ${res}`);
    },
    [
        () =>
            deepAreArraysEqual(
                slice([0, 1, 2, 3, 4], 2, 4, [], 0),
                [2, 3]
            ),
        () =>
            deepAreArraysEqual(
                slice([0, 1, 2, 3, 4], 0, 0, [], 0),
                []
            )
    ]
);