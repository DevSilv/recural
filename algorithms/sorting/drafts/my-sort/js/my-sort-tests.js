const { test } = require("../../../../test-runners/js/test");
const { mySort } = require("./my-sort.js");
const { isSortedAsc } = require("../../is-sorted-asc/js/is-sorted-asc");

const isSorted = arr => isSortedAsc((a, b) => a > b, arr, 0);
const sort = arr => mySort(arr, 0, 1, false);

test(
    res => console.log(`mySort: ${res}`),
    [
        //() => isSorted(sort([])) === true,
        //() => isSorted(sort([0])) === true,
        //() => isSorted(sort([0, 0, 0])) === true,
        //() => isSorted(sort([0, 1, 2])) === true,
        //() => isSorted(sort([2, 1, 0])) === true,
        //() => isSorted(sort([2, 0, 1])) === true
    ]
);
