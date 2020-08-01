// const { TestCase } = require("../../../../unit-tests/js/test-case");
const { test } = require("../../../../test-runner/test");
const areArraysEqualModule
    = require("../../are-arrays-equal/js/are-arrays-equal");
const benchmarkUtilsModule = require("../../../../benchmarks/js/utils");
const {
    reverse,
    reverse2
} = require("./reverse");

const mockArrs = [
    benchmarkUtilsModule.generateIntegerRange(1, 200)
];

exports.testCases = [
    // new TestCase(
    //     "reverse",
    //     () => reverse([], 0),
    //     res => areArraysEqualModule.deepAreArraysEqual(res, [])
    // ),
    // new TestCase(
    //     "reverse",
    //     () => reverse([0, 1, 2, 3, 4], 0),
    //     res => areArraysEqualModule.deepAreArraysEqual(res, [4, 3, 2, 1, 0])
    // ),
    // new TestCase(
    //     "reverse",
    //     () => reverse(mockArrs[0], 0),
    //     res =>
    //         areArraysEqualModule.deepAreArraysEqual(
    //             mockArrs[0],
    //             reverse(res, 0)
    //         )
    // ),
    // new TestCase(
    //     "reverse2",
    //     () => reverse2([], []),
    //     res => areArraysEqualModule.deepAreArraysEqual(res, [])
    // ),
    // new TestCase(
    //     "reverse2",
    //     () => reverse2([0, 1, 2, 3, 4], []),
    //     res => areArraysEqualModule.deepAreArraysEqual(res, [4, 3, 2, 1, 0])
    // ),
    // new TestCase(
    //     "reverse2",
    //     () => reverse2(mockArrs[0], []),
    //     res =>
    //         areArraysEqualModule.deepAreArraysEqual(
    //             mockArrs[0],
    //             reverse2(res, [])
    //         )
    // )
];

test(
    res => {
        console.log(`reverse: ${res}`);
    },
    [
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                reverse([], 0),
                []
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                reverse([0, 1, 2, 3, 4], 0),
                [4, 3, 2, 1, 0]
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                mockArrs[0],
                reverse(
                    reverse(mockArrs[0], 0),
                    0
                )
            )
    ]
);

test(
    res => {
        console.log(`reverse2: ${res}`);
    },
    [
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                reverse2([], []),
                []
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                reverse2([0, 1, 2, 3, 4], []),
                [4, 3, 2, 1, 0]
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                mockArrs[0],
                reverse2(
                    reverse2(mockArrs[0], []),
                    []
                )
            )
    ]
);