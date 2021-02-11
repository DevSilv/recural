const { test } = require("../../../../test-runners/js/test");
const { isSortedAsc } = require("./is-sorted-asc");

const isSortedAscWrapper = arr => isSortedAsc((a, b) => a > b, arr, 0);

test(
    res => console.log(`isSortedAsc: ${res}`),
    [
        () => isSortedAscWrapper([]) === true,
        () => isSortedAscWrapper([0]) === true,
        () => isSortedAscWrapper([0, 1, 2, 3]) === true,
        () => isSortedAscWrapper([0, 1, 1, 2, 3]) === true,
        () => isSortedAscWrapper([3, 2, 1, 0]) === false,
        () => isSortedAscWrapper([0, 3, 2, 1, 4]) === false,
        () => isSortedAscWrapper([0, 1, 2, 3, 0]) === false
    ]
);
