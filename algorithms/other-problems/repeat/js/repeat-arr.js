/**
 * @template T
 * @param {T[]} arr
 * @param {number} count An integer >= 0
 * @param {T[][]} res Always an empty array
 * @returns {T[][]}
 */
exports.repeatArr
    = (arr, count, res) =>
        count === 0
            ? res
            : exports.repeatArr(
                arr,
                count - 1,
                res.concat(
                    [
                        arr.slice()
                    ]
                )
            );