/**
 * @param {number[]} a The first array to merge.
 * @param {number[]} b The second array to merge.
 * @param {number[]} res Always []; an auxiliary variable.
 * @returns {number[]} An array being the result of merging the arrays a and b.
 */
const merge
    = (a, b, res) =>
        a.length === 0
            ? res.concat(b)
            : b.length === 0
                ? res.concat(a)
                : a[0] < b[0]
                    ? merge(a.slice(1), b, res.concat(a[0]))
                    : merge(a, b.slice(1), res.concat(b[0]));

/**
 * @param {number[]} arr The array to sort.
 * @param {number} startIdx Always 0; in consecutive invokations
 *  of the function, the index of the first element of the part to sort
 *  of the arr array.
 * @param {number} endIdx Always arr.length - 1; in consecutive invokations
 *  of the function, the index of the last element of the part to sort
 *  of the arr array.
 * @returns {number[]} An array containing the same elements as the array arr,
 *  in ascending order.
 */
exports.mergeSort
    = (arr, startIdx, endIdx) =>
        startIdx > endIdx
            ? []
            : startIdx === endIdx
                ? [arr[startIdx]]
                : merge(
                    exports.mergeSort(
                        arr, startIdx, Math.floor((startIdx + endIdx) / 2)
                    ),
                    exports.mergeSort(
                        arr, Math.floor((startIdx + endIdx) / 2) + 1, endIdx
                    ),
                    []
                );
