const { test } = require("../../../../test-runners/js/test");
const { sentinelFindFirst } = require("./sentinel-find-first");

test(
    res => {
        console.log(`sentinelFindFirst: ${res}`);
    },
    [
        () =>
            sentinelFindFirst([0, 1, 2, 3, 4, 2], elem => elem % 2 === 0) === 0,
        () =>
            sentinelFindFirst([1, 2, 3, 4, 5], elem => elem % 5 === 0)
            === undefined,
        () => sentinelFindFirst([5], elem => elem % 5 === 0) === undefined
    ]
);