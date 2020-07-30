/**
 * @callback SentinelFindFirstPredicate
 * @param {any} elem
 * @returns {boolean}
 */

/**
 * @param {any[]} arr
 * @param {SentinelFindFirstPredicate} pred
 * @returns {undefined|any}
 */
exports.sentinelFindFirst
    = (arr, pred) =>
        pred(arr[0])
            ? arr.length > 1
                ? arr[0]
                : undefined
            : exports.sentinelFindFirst(
                arr.slice(1),
                pred
            );