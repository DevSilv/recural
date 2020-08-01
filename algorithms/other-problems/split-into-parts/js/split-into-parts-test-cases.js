const { test } = require("../../../../test-runner/test");
const { deepAreArraysEqual }
    = require("../../are-arrays-equal/js/are-arrays-equal");
const { splitIntoParts } = require("./split-into-parts");

test(
    res => {
        console.log(`splitIntoParts: ${res}`);
    },
    [
        () =>
            deepAreArraysEqual(
                splitIntoParts([0, 1, 2, 3, 4], 1, []),
                [
                    [0],
                    [1],
                    [2],
                    [3],
                    [4]
                ]
            ),
        () =>
            deepAreArraysEqual(
                splitIntoParts([0, 1, 2, 3, 4], 2, []),
                [
                    [0, 1],
                    [2, 3],
                    [4]
                ]
            ),
        () =>
            deepAreArraysEqual(
                splitIntoParts([0, 1, 2, 3, 4], 20, []),
                [
                    [0, 1, 2, 3, 4]
                ]
            )
    ]
);