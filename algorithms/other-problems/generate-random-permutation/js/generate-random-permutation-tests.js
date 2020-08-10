const { test } = require("../../../../test-runners/js/test");
const { generateRandomPermutation } = require("./generate-random-permutation");
const { generateIntegerRange } = require("../../../../benchmarks/js/utils");
const { findAll } = require("../../../searching/find-all/js/find-all");

const mockArr = generateIntegerRange(0, 100);
/**
 * @param {number[]} res
 * @returns {boolean}
 */
const containsSameElements
    = res =>
        mockArr.every(
            elem =>
                findAll(res, e => e === elem, []).length
                === findAll(mockArr, e => e === elem, []).length
        );

test(
    res => {
        console.log(`generateRandomPermutation: ${res}`);
    },
    [
        () =>
            containsSameElements(
                generateRandomPermutation(mockArr, [])
            ),
        () =>
            containsSameElements(
                generateRandomPermutation(mockArr, [])
            ),
        () =>
            containsSameElements(
                generateRandomPermutation(mockArr, [])
            ),
        () =>
            containsSameElements(
                generateRandomPermutation(mockArr, [])
            ),
        () =>
            containsSameElements(
                generateRandomPermutation(mockArr, [])
            )
    ]
);