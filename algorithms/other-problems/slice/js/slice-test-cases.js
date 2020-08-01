const { test } = require("../../../../test-runner/test");
const { deepAreArraysEqual }
    = require("../../are-arrays-equal/js/are-arrays-equal");
const { slice } = require("./slice");

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