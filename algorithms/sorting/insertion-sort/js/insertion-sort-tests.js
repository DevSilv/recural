const { test } = require("../../../../test-runners/js/test");
const { insertionSort } = require("./insertion-sort.js");
const { generateRandomPermutation }
    = require(
        "../../../other-problems/generate-random-permutation/js/generate-random-permutation"
    );
const { generateIntegerRange } = require("../../../../benchmarks/js/utils");
const { isSortedAsc } = require("../../is-sorted-asc/js/is-sorted-asc");

const isSorted = arr => isSortedAsc((a, b) => a > b, arr, 0);
const insSort = arr => insertionSort(arr, 1, 1);
const genInput
    = () => generateRandomPermutation(generateIntegerRange(1, 150), []);

test(
    res => console.log(`insertionSort: ${res}`),
    [
        () => isSorted(insSort([])) === true,
        () => isSorted(insSort([0])) === true,
        () => isSorted(insSort([0, 0, 0])) === true,
        () => isSorted(insSort([0, 1, 2])) === true,
        () => isSorted(insSort([2, 1, 0])) === true,
        () => isSorted(insSort([2, 0, 1])) === true,
        () => isSorted(insSort(genInput())) === true
    ]
);
