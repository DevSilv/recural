const { test } = require("../../../../test-runner/test");
const { deepAreArraysEqual }
    = require("../../are-arrays-equal/js/are-arrays-equal");
const { join } = require("./join");

test(
    res => {
        console.log(`join: ${res}`);
    },
    [
        () =>
            deepAreArraysEqual(
                join([0, 1, 2], [3, 4]),
                [0, 1, 2, 3, 4]
            ),
        () =>
            deepAreArraysEqual(
                join([], []),
                []
            ),
        () =>
            deepAreArraysEqual(
                join(
                    [
                        [3],
                        [4]
                    ],
                    [0, 1, 2]
                ),
                [
                    [3],
                    [4],
                    0,
                    1,
                    2
                ]
            )
    ]
);