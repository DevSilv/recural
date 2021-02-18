const { test } = require("../../../../test-runners/js/test");
const {
    quicksort,
    quicksort2
} = require("./quicksort");
const { generateRandomPermutation }
    = require(
        "../../../other-problems/generate-random-permutation/js/generate-random-permutation"
    );
const { generateIntegerRange }
    = require(
        "../../../../utils/generate-integer-range/js/generate-integer-range.js"
    );
const { isSortedAsc } = require("../../is-sorted-asc/js/is-sorted-asc");
/**
 * @todo Format all the code in the repository such that if a parameter list
 *  does not fit into one line, each parameter is put on a separate line
 */


test(
    res => {
        console.log(`quicksort: ${res}`);
    },
    [
        () => {
            const mockArr = [0, 1, 2, 3, 4];
            const res = quicksort(mockArr, 0, mockArr.length - 1);

            return isSortedAsc(
                (firstElem, secondElem) => firstElem > secondElem,
                res,
                0
            ) === true;
        },
        () => {
            const mockArr = [4, 3, 2, 1, 0];
            const res = quicksort(mockArr, 0, mockArr.length - 1);

            return isSortedAsc(
                (firstElem, secondElem) => firstElem > secondElem,
                res,
                0
            ) === true;
        },
        () => {
            const mockArr = [9, 1, 5, 3, 7, 2, 0, 4, 8, 6];
            const res = quicksort(mockArr, 0, mockArr.length - 1);

            return isSortedAsc(
                (firstElem, secondElem) => firstElem > secondElem,
                res,
                0
            ) === true;
        },
        () => {
            const mockArr = [10, 0, 0, 10, 1, 2, 7, 12];
            const res = quicksort(mockArr, 0, mockArr.length - 1);

            return isSortedAsc(
                (firstElem, secondElem) => firstElem > secondElem,
                res,
                0
            ) === true;
        },
        () => {
            const mockArr = [];
            const res = quicksort(mockArr, 0, mockArr.length - 1);

            return isSortedAsc(
                (firstElem, secondElem) => firstElem > secondElem,
                res,
                0
            ) === true;
        },
        () => {
            const mockArr
                = generateRandomPermutation(
                    generateIntegerRange(1, 150), []
                );
            const res = quicksort(mockArr, 0, mockArr.length - 1);

            return isSortedAsc(
                (firstElem, secondElem) => firstElem > secondElem,
                res,
                0
            ) === true;
        },
        () => {
            const mockArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            const res = quicksort(mockArr, 0, mockArr.length - 1);

            return isSortedAsc(
                (firstElem, secondElem) => firstElem > secondElem,
                res,
                0
            ) === true;
        }
    ]
);

test(
    res => {
        console.log(`quicksort2: ${res}`);
    },
    [
        () => {
            const mockArr = [0, 1, 2, 3, 4];
            const res
                = quicksort2(
                    mockArr,
                    0,
                    mockArr.length - 1,
                    0,
                    Math.floor(mockArr.length / 2),
                    [],
                    []
                );

            return isSortedAsc(
                (firstElem, secondElem) => firstElem > secondElem,
                res,
                0
            ) === true;
        },
        () => {
            const mockArr = [4, 3, 2, 1, 0];
            const res
                = quicksort2(
                    mockArr,
                    0,
                    mockArr.length - 1,
                    0,
                    Math.floor(mockArr.length / 2),
                    [],
                    []
                );

            return isSortedAsc(
                (firstElem, secondElem) => firstElem > secondElem,
                res,
                0
            ) === true;
        },
        () => {
            const mockArr = [9, 1, 5, 3, 7, 2, 0, 4, 8, 6];
            const res
                = quicksort2(
                    mockArr,
                    0,
                    mockArr.length - 1,
                    0,
                    Math.floor(mockArr.length / 2),
                    [],
                    []
                );

            return isSortedAsc(
                (firstElem, secondElem) => firstElem > secondElem,
                res,
                0
            ) === true;
        },
        () => {
            const mockArr = [10, 0, 0, 10, 1, 2, 7, 12];
            const res
                = quicksort2(
                    mockArr,
                    0,
                    mockArr.length - 1,
                    0,
                    Math.floor(mockArr.length / 2),
                    [],
                    []
                );

            return isSortedAsc(
                (firstElem, secondElem) => firstElem > secondElem,
                res,
                0
            ) === true;
        },
        () => {
            const mockArr = [];
            const res
                = quicksort2(
                    mockArr,
                    0,
                    mockArr.length - 1,
                    0,
                    Math.floor(mockArr.length / 2),
                    [],
                    []
                );

            return isSortedAsc(
                (firstElem, secondElem) => firstElem > secondElem,
                res,
                0
            ) === true;
        },
        () => {
            const mockArr
                = generateRandomPermutation(
                    generateIntegerRange(1, 150), []
                );
            const res
                = quicksort2(
                    mockArr,
                    0,
                    mockArr.length - 1,
                    0,
                    Math.floor(mockArr.length / 2),
                    [],
                    []
                );

            return isSortedAsc(
                (firstElem, secondElem) => firstElem > secondElem,
                res,
                0
            ) === true;
        },
        () => {
            const mockArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            const res
                = quicksort2(
                    mockArr,
                    0,
                    mockArr.length - 1,
                    0,
                    Math.floor(mockArr.length / 2),
                    [],
                    []
                );

            return isSortedAsc(
                (firstElem, secondElem) => firstElem > secondElem,
                res,
                0
            ) === true;
        }
    ]
);
