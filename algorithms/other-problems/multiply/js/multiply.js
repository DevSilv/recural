/**
 * @param {number} num1 A real number
 * @param {number} num2 An integer >= 0
 * @returns {number} A real number >= 0
 */
exports.multiply
	= (num1, num2) =>
		num2 === 0
			? 0
			: num1 + exports.multiply(num1, num2 - 1);