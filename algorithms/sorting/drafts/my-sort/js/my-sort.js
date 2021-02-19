const { swapElems } = require("../../../../utils/swap-elems/js/swap-elems.js");

/**
 * @param {number[]} arr The array to sort.
 * @param {number} k Always 0; an auxiliary variable; between consecutive
 *  recursive invokations of the function, it represents the index
 *  of the last element in the sorted sequence of elements.
 * @param {number} m Always k + 1; an auxiliary variable; between consecutive
 *  recursive invokations of the function, it represents the indices of elements
 *  from the second element in the array (including) to the first element
 *  after the sequence of elements that are greater than the last element
 *  in the sorted sequence.
 * @param {bool} swapped Always false; an auxiliary variable;
 *  between consecutive recursive invokations of the function, it represents
 *  whether there was a swap when coming once from the beginning to the end
 *  of the array.
 * @returns {number[]} An array, containing the same elements as the array arr,
 *  sorted in ascending order.
 */
exports.mySort
    = (arr, k, m, swapped) =>
        k === arr.length
            ? swapped === false
                ? arr
                : exports.mySort(arr, 0, 1, false)
            : m < arr.length && arr[k] <= arr[m]
                ? exports.mySort(arr, k + 1, m + 1, swapped)
                : m < arr.length && arr[k] > arr[m]
                    ? exports.mySort(arr, k, m + 1, swapped)
                    : k !== m - 1
                        ? exports.mySort(
                            swapElems(arr, k, m - 1), m, m, true
                        )
                        : exports.mySort(arr, k + 1, k + 2, swapped);
