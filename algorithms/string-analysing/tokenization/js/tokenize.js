/**
 * @param {string} str
 * @param {number} cur
 * @param {number[]} res
 * @returns {undefined|number[]}
 */
exports.tokenize
    = (str, cur, res) =>
        cur === str.length
            ? res
            : str[cur].match("[(]") !== null
                ? exports.tokenize(
                    str,
                    cur + 1,
                    res.concat([0])
                )
                : str[cur].match("[)]") !== null
                    ? exports.tokenize(
                        str,
                        cur + 1,
                        res.concat([1])
                    )
                    : str[cur].match(",") !== null
                        ? exports.tokenize(
                            str,
                            cur + 1,
                            res.concat([2])
                        )
                        : str[cur].match("[a-z]") !== null
                            ? exports.tokenize(
                                str,
                                cur + 1,
                                res.concat([3])
                            )
                            : undefined;

// =============================================================================

/**
 * @type {string[]}
 */
const tokens = ["[(]", "[)]", ",", "[a-z]"];

/**
 * @param {string} str
 * @returns {undefined|number[]}
 */
exports.tokenize2
    = str =>
        Array
            .from(str)
            .map(
                ch => {
                    const result = tokens.findIndex(t => ch.match(t) !== null);

                    return result !== -1
                        ? result
                        : undefined;
                }
            );