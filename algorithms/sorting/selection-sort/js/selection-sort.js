const { getArrWithElemsSwapped }
    = require(
        "../../get-arr-with-elems-swapped/js/get-arr-with-elems-swapped.js"
    );

/**
 * @param {number[]} arr
 * @param {number} cur Always equal to 0
 * @param {number} k Always equal to cur + 1
 * @param {number} minIdx Always equal to cur
 * @returns {number[]}
 */
exports.selectionSort
    = (arr, cur, k, minIdx) =>
        cur >= arr.length
            ? arr
            : k < arr.length
                ? arr[k] < arr[minIdx]
                    ? exports.selectionSort(arr, cur, k + 1, k)
                    : exports.selectionSort(arr, cur, k + 1, minIdx)
                : exports.selectionSort(
                    getArrWithElemsSwapped(arr, cur, minIdx),
                    cur + 1,
                    cur + 2,
                    cur + 1
                );
