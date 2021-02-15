const { swapElems } = require("../../../../utils/swap-elems/js/swap-elems.js");

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
                    swapElems(arr, y - 1, y), cur, y - 1
                )
                : exports.insertionSort(arr, cur + 1, cur + 1);
