/**
 * @param {number} start Start of the range (inclusive); an integer
 * @param {number} end End of the range (inclusive); an integer
 * @returns {number[]} The generated range
 */
exports.generateIntegerRange
    = (start, end) =>
        Array
            .from(
                new Array(end - start + 1)
                    .keys()
            )
            .map(elem => elem + start);
