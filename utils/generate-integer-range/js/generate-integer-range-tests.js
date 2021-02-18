const { test } = require("../../../../test-runners/js/test");
const { generateIntegerRange } = require("./generate-integer-range.js");
const { deepAreArraysEqual }
    = require(
        "../../../algorithms/other-problems/are-arrays-equal/js/are-arrays-equal.js"
    );

test(
    res => console.log(`generateIntegerRange: ${res}`),
    [
        () => deepAreArraysEqual(generateIntegerRange(0, 0), [0]),
        () => deepAreArraysEqual(generateIntegerRange(0, 3), [0, 1, 2, 3]),
        () => deepAreArraysEqual(generateIntegerRange(-3, 3), [-3, -2, -1, 0, 1, 2, 3])
    ]
);
