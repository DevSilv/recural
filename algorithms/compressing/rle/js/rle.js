/**
 * @param {string} str
 * @param {number} cur Always 1 (i.e., the index of the second character of str)
 * @param {undefined|string} char Always str[0] (i.e., the first character
 *  of str)
 * @param {number} charCount Always 1
 * @param {[string, number][]} res Always an empty array
 */
exports.rleCompress
    = (str, cur, char, charCount, res) =>
        cur === str.length
            ? res.concat([[char, charCount]])
            : str[cur] !== char
                ? exports.rleCompress(
                    str,
                    cur + 1,
                    str[cur],
                    1,
                    res.concat([[char, charCount]])
                )
                : exports.rleCompress(str, cur + 1, char, charCount + 1, res);

/**
 * @param {[string, number][]} arr
 * @param {number} cur
 * @param {string} res
 */
exports.rleDecompress
    = (arr, cur, res) =>
        cur === arr.length
            ? res
            : exports.rleDecompress(
                arr,
                cur + 1,
                res + arr[cur][0].repeat(arr[cur][1])
            );