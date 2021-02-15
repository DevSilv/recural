/**
 * @param {any[]} arr The array to swap elements within.
 * @param {number} idx The index of the first element to swap.
 * @param {number} otherIdx The index of the second element to swap.
 * @returns {any[]} The array arr with the elements at indices idx and otherIdx
 *  swapped.
 */
exports.swapElems
    = (arr, idx, otherIdx) =>
        idx === otherIdx
            ? arr
            : arr.slice(0, idx)
                .concat([arr[otherIdx]])
                .concat(arr.slice(idx + 1, otherIdx))
                .concat([arr[idx]])
                .concat(arr.slice(otherIdx + 1));
