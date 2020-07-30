/**
 * @callback FindFirstPredicate
 * @param {any} elem
 * @returns {boolean}
 */

/**
 * @param {any[]} arr
 * @param {FindFirstPredicate} pred
 * @returns {undefined|any}
 */
exports.findFirst
    = (arr, pred) =>
        arr.length === 0
            ? undefined
            : pred(arr[0])
                ? arr[0]
                : exports.findFirst(
                    arr.slice(1),
                    pred
                );