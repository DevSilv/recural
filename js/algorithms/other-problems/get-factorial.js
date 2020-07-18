/**
 * 	GET_FACTORIAL (num)
 * 		if equal(num, 0)
 * 		then return 1
 * 		else return multiply(num, GET_FACTORIAL(subtract(num, 1)))
 * 
 * 	GET_FACTORIAL(5)
 */

/**
 * @param {number} num An integer > 0
 * @returns {number}
 */
exports.getFactorial
	= num =>
		num === 0
			? 1
			: num * exports.getFactorial(num - 1);