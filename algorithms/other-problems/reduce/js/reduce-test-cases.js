const { test } = require("../../../../test-runners/js/test");
const { deepAreArraysEqual }
    = require("../../are-arrays-equal/js/are-arrays-equal");
const { reduce } = require("./reduce");

test(
    res => {
        console.log(`reduce: ${res}`);
    },
    [
        () =>
            reduce(
                [0, 1, 2, 3, 4],
                (res, cur) => res + cur,
                0
            ) === 0 + 1 + 2 + 3 + 4,
        () =>
            reduce(
                [0, 1, 2, 3, 4],
                (res, cur) => res - cur,
                0
            ) === 0 - 1 - 2 - 3 - 4,
        () =>
            reduce(
                [1, 2, 3, 4],
                (res, cur) => res * cur,
                1
            ) === 1 * 2 * 3 * 4,
        () =>
            reduce(
                [1, 2, 3, 4],
                (res, cur) => res / cur,
                1
            ) === 1 / 2 / 3 / 4,
        () =>
            reduce(
                [2, 1, -2, -1],
                (res, cur) => cur < res ? cur : res,
                Number.POSITIVE_INFINITY
            ) === -2,
        () =>
            reduce(
                ["A", "B", "C", "D", "E"],
                (res, cur) => res + cur,
                ""
            ) === "ABCDE",
        () =>
            deepAreArraysEqual(
                reduce(
                    [
                        [0],
                        [1],
                        [2],
                        [3],
                        [4]
                    ],
                    (res, cur) => res.concat(cur),
                    []
                ),
                [0, 1, 2, 3, 4]
            )
    ]
);