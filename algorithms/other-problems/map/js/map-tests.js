const { test } = require("../../../../test-runners/js/test");
const { deepAreArraysEqual }
    = require("../../are-arrays-equal/js/are-arrays-equal");
const { map } = require("./map");

test(
    res => {
        console.log(`map: ${res}`);
    },
    [
        () =>
            deepAreArraysEqual(
                map([0, 1, 2, 3, 4], elem => 2 * elem, []),
                [0, 2, 4, 6, 8]
            ),
        () =>
            deepAreArraysEqual(
                map(["A", "B", "C", "D", "E"], elem => "(" + elem + ")", []),
                ["(A)", "(B)", "(C)", "(D)", "(E)"]
            ),
        () =>
            deepAreArraysEqual(
                map([false, true, false], elem => !elem, []),
                [true, false, true]
            )
    ]
);