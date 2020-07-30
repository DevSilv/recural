/**
 * @param {number} n An integer >= 0
 * @returns {number} An integer >= 0
 */
exports.getNthFibonacciNum
    = n =>
        n === 0
            ? 0
            : n === 1
                ? 1
                : exports.getNthFibonacciNum(n - 1)
                + exports.getNthFibonacciNum(n - 2);