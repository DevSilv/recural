const { getArrWithElemsSwapped }
    = require(
        "../../get-arr-with-elems-swapped/js/get-arr-with-elems-swapped.js"
    );

/**
 * @param {number[]} arr
 * @param {number} cur Always 1
 * @param {number} y Always cur
 * @returns {number[]}
 */
exports.insertionSort
    = (arr, cur, y) =>
        cur >= arr.length
            ? arr
            : y >= 1 && arr[y - 1] > arr[y]
                ? exports.insertionSort(
                    getArrWithElemsSwapped(arr, y - 1, y), cur, y - 1
                )
                : exports.insertionSort(arr, cur + 1, cur + 1);
