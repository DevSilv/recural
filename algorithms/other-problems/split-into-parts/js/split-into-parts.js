/**
 * @template T
 * @param {T[]} arr An array
 * @param {number} len An integer > 0
 * @param {T[][]} res An array
 * @returns {T[][]}
 */
exports.splitIntoParts
    = (arr, len, res) =>
        arr.length <= len
            ? res.concat(
                [
                    arr
                ]
            )
            : exports.splitIntoParts(
                arr.slice(len),
                len,
                res.concat(
                    [
                        arr.slice(0, len)
                    ]
                )
            );