/**
 * @callback FindAllPredicate
 * @param {any} elem
 * @returns {boolean}
 */

/**
 * @param {any[]} arr
 * @param {FindAllPredicate} pred
 * @param {any[]} res
 * @returns {undefined|any}
 */
exports.findAll
    = (arr, pred, res) =>
        arr.length === 0
            ? res
            : pred(arr[0])
                ? exports.findAll(
                    arr.slice(1),
                    pred,
                    res.concat(
                        [
                            arr[0]
                        ]
                    )
                )
                : exports.findAll(
                    arr.slice(1),
                    pred,
                    res
                );