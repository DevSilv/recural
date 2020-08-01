const { test } = require("../../../../test-runner/test");
const { findFirst } = require("./find-first");

test(
    res => {
        console.log(`findFirst: ${res}`);
    },
    [
        () => findFirst([0, 1, 2, 3, 4], elem => elem % 2 === 0) === 0,
        () => findFirst([1, 2, 3, 4], elem => elem % 5 === 0) === undefined,
        () => findFirst([], elem => elem % 5 === 0) === undefined
    ]
);