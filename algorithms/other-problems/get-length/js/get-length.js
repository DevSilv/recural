/**
 * @param {any[]} arr
 * @param {number} res
 * @returns {number}
 */
exports.getLength
    = (arr, res) =>
        arr[res] === undefined
            ? res
            : exports.getLength(arr, res + 1);