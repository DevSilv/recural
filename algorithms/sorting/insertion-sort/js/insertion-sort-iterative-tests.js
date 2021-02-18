const { test } = require("../../../../test-runners/js/test");
const { insertionSortIterative } = require("./insertion-sort-iterative.js");
const { generateRandomPermutation }
    = require(
        "../../../other-problems/generate-random-permutation/js/generate-random-permutation"
    );
const { generateIntegerRange }
    = require(
        "../../../../utils/generate-integer-range/js/generate-integer-range.js"
    );
const { isSortedAsc } = require("../../is-sorted-asc/js/is-sorted-asc");

const isSorted = arr => isSortedAsc((a, b) => a > b, arr, 0);
const sort = arr => insertionSortIterative(arr);
const genInput
    = () => generateRandomPermutation(generateIntegerRange(1, 150), []);

test(
    res => console.log(`insertionSort: ${res}`),
    [
        () => isSorted(sort([])) === true,
        () => isSorted(sort([0])) === true,
        () => isSorted(sort([0, 0, 0])) === true,
        () => isSorted(sort([0, 1, 2])) === true,
        () => isSorted(sort([2, 1, 0])) === true,
        () => isSorted(sort([2, 0, 1])) === true,
        () => isSorted(sort(genInput())) === true
    ]
);
