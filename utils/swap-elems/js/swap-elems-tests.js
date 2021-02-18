const { test } = require("../../../test-runners/js/test");
const { swapElems } = require("./swap-elems.js");
const { deepAreArraysEqual }
    = require(
        "../../../algorithms/other-problems/are-arrays-equal/js/are-arrays-equal.js"
    );

test(
    res => console.log(`swapElems: ${res}`),
    [
        () => deepAreArraysEqual(swapElems([0], 0, 0), [0]),
        () => deepAreArraysEqual(swapElems([5, 10], 0, 0), [5, 10]),
        () => deepAreArraysEqual(swapElems([5, 10], 1, 1), [5, 10]),
        () => deepAreArraysEqual(swapElems([5, 10], 0, 1), [10, 5])
    ]
);
