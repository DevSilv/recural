const { test } = require("../../../../test-runner/test");
const { isSortedAsc } = require("./is-sorted-asc");

test(
    res => {
        console.log(`isSortedAsc: ${res}`);
    },
    [
        () =>
            isSortedAsc(
                (firstElem, secondElem) => firstElem > secondElem,
                [],
                0
            ) === true,
        () =>
            isSortedAsc(
                (firstElem, secondElem) => firstElem > secondElem,
                [0],
                0
            ) === true,
        () =>
            isSortedAsc(
                (firstElem, secondElem) => firstElem > secondElem,
                [0, 1, 2, 3],
                0
            ) === true,
        () =>
            isSortedAsc(
                (firstElem, secondElem) => firstElem > secondElem,
                [0, 1, 1, 2, 3],
                0
            ) === true,
        () =>
            isSortedAsc(
                (firstElem, secondElem) => firstElem > secondElem,
                [3, 2, 1, 0],
                0
            ) === false,
        () =>
            isSortedAsc(
                (firstElem, secondElem) => firstElem > secondElem,
                [0, 3, 2, 1, 4],
                0
            ) === false,
        () =>
            isSortedAsc(
                (firstElem, secondElem) => firstElem > secondElem,
                [0, 1, 2, 3, 0],
                0
            ) === false
    ]
);