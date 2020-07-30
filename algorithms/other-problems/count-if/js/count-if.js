/**
 * @callback CountIfFn
 * @param {any} elem
 * @returns {boolean}
 */

/**
 * 
 * @param {any[]} arr
 * @param {CountIfFn} pred
 * @param {number} res
 */
exports.countIf
    = (arr, pred, res) =>
        arr.length === 0
            ? res
            : pred(arr[0])
                ? exports.countIf(
                    arr.slice(1),
                    pred,
                    res + 1
                )
                : exports.countIf(
                    arr.slice(1),
                    pred,
                    res
                );