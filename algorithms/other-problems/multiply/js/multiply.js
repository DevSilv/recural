/**
 * 	MULTIPLY (num1, num2)
 * 		if equal(num2, 0)
 * 		then return 0
 * 		else return num1 + MULTIPLY(num1, subtract(num2, 1))
 * 
 * 	MULTIPLY(4, 5)
 */

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