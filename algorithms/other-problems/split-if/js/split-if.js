/**
 * @callback SplitIfFn
 * @param {any} elem
 * @returns {boolean}
 */

/**
 * @template T
 * @param {T[]} arr
 * @param {SplitIfFn} pred
 * @param {T[]} part
 * @param {T[][]} res
 * @returns {T[][]}
 */
exports.splitIf
    = (arr, pred, part, res) =>
        arr.length === 0
            ? res.concat(
                [
                    part
                ]
            )
            : pred(arr[0])
                ? exports.splitIf(
                    arr.slice(1),
                    pred,
                    [
                        arr[0]
                    ],
                    res.concat(
                        [
                            part
                        ]
                    )
                )
                : exports.splitIf(
                    arr.slice(1),
                    pred,
                    part.concat(
                        [
                            arr[0]
                        ]
                    ),
                    res
                );