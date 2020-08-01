// const { TestCase } = require("../../../../unit-tests/js/test-case");
const { test } = require("../../../../test-runner/test");
const { deepAreArraysEqual }
    = require("../../are-arrays-equal/js/are-arrays-equal");
const { splitIf } = require("./split-if");

exports.testCases = [
    // new TestCase(
    //     "splitIf",
    //     () => splitIf([0, 1, 2, 3, 4], elem => elem === 2, [], []),
    //     res =>
    //         deepAreArraysEqual(
    //             res,
    //             [
    //                 [0, 1],
    //                 [2, 3, 4]
    //             ]
    //         )
    // ),
    // new TestCase(
    //     "splitIf",
    //     () => splitIf(["A", "B", "C"], elem => elem === "C", [], []),
    //     res =>
    //         deepAreArraysEqual(
    //             res,
    //             [
    //                 ["A", "B"],
    //                 ["C"]
    //             ]
    //         )
    // ),
    // new TestCase(
    //     "splitIf",
    //     () => splitIf([false, false, false], elem => elem === true, [], []),
    //     res =>
    //         deepAreArraysEqual(
    //             res,
    //             [
    //                 [false, false, false]
    //             ]
    //         )
    // )
];

test(
    res => {
        console.log(`splitIf: ${res}`);
    },
    [
        () =>
            deepAreArraysEqual(
                splitIf([0, 1, 2, 3, 4], elem => elem === 2, [], []),
                [
                    [0, 1],
                    [2, 3, 4]
                ]
            ),
        () =>
            deepAreArraysEqual(
                splitIf(["A", "B", "C"], elem => elem === "C", [], []),
                [
                    ["A", "B"],
                    ["C"]
                ]
            ),
        () =>
            deepAreArraysEqual(
                splitIf([false, false, false], elem => elem === true, [], []),
                [
                    [false, false, false]
                ]
            )
    ]
);