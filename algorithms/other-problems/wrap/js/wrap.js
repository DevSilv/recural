const repeatArrModule = require("../../repeat/js/repeat-arr");

/**
 * @param {string[]} arr
 * @param {string} character A zero-or-one-character string
 * @param {number} size >= 0
 * @param {number} cur Always 0; the index of the element processed currently
 * @param {string[]} res Always an empty array; the result of wrapping
 * @returns {string[]}
 * @description Wraps a string represented by an array of strings in a border
 *  of characters.
 */
exports.wrap
    = (arr, character, size, cur, res) =>
        arr.length === 0 || size === 0
            ? arr
            : cur === 0 && res.length === 0
                ? exports.wrap(
                    arr,
                    character,
                    size,
                    cur,
                    repeatArrModule.repeatArr(
                        [
                            character.repeat(2 * size + arr[0].length)
                        ],
                        size,
                        []
                    ).reduce(
                        (prev, cur) => prev.concat(cur)
                    ).concat(res)
                )
                : cur === arr.length
                    ? res.concat(
                        repeatArrModule.repeatArr(
                            [
                                character.repeat(2 * size + arr[0].length)
                            ],
                            size,
                            []
                        ).reduce(
                            (prev, cur) => prev.concat(cur)
                        )
                    )
                    : exports.wrap(
                        arr,
                        character,
                        size,
                        cur + 1,
                        res.concat(
                            [
                                character.repeat(size)
                                + arr[cur]
                                + character.repeat(size)
                            ]
                        )
                    );

/**
 * @param {string[]} arr
 * @param {string} character A zero-or-one-character string
 * @param {number} size >= 0
 * @returns {string[]}
 * @description Wraps a string represented by an array of strings in a border
 *  of characters.
 */
exports.wrap2
    = (arr, character, size) =>
        arr.length === 0 || size === 0
            ? arr
            : repeatArrModule.repeatArr(
                [
                    character.repeat(2 * size + arr[0].length)
                ],
                size,
                []
            ).reduce(
                (prev, cur) => prev.concat(cur)
            ).concat(
                arr.map(
                    elem =>
                        character.repeat(size) + elem + character.repeat(size)
                )
            ).concat(
                repeatArrModule.repeatArr(
                    [
                        character.repeat(2 * size + arr[0].length)
                    ],
                    size,
                    []
                ).reduce(
                    (prev, cur) => prev.concat(cur)
                )
            );