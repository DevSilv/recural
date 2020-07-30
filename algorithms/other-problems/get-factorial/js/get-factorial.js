/**
 * @param {number} num An integer > 0
 * @returns {number}
 */
exports.getFactorial
    = num =>
        num === 0
            ? 1
            : num * exports.getFactorial(num - 1);