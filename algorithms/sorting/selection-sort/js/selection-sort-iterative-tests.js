const { test } = require("../../../../test-runners/js/test");
const { selectionSortIterative } = require("./selection-sort-iterative.js");
const { generateRandomPermutation }
    = require(
        "../../../other-problems/generate-random-permutation/js/generate-random-permutation"
    );
const { generateIntegerRange } = require("../../../../benchmarks/js/utils");
const { isSortedAsc } = require("../../is-sorted-asc/js/is-sorted-asc");

const isSorted = arr => isSortedAsc((a, b) => a > b, arr, 0);
const sort = arr => selectionSortIterative(arr);
const genInput
    = () => generateRandomPermutation(generateIntegerRange(1, 150), []);

test(
    res => console.log(`selectionSortIterative: ${res}`),
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
