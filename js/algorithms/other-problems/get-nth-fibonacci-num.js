/**
 * 	GET_NTH_FIBONACCI_NUM (n)
 * 		if equal(n, 0)
 * 		then return 0
 * 		else
 * 			if equal(n, 1)
 * 			then return 1
 * 			else return add(
 * 				GET_NTH_FIBONACCI_NUM(subtract(n, 1)),
 * 				GET_NTH_FIBONACCI_NUM(subtract(n, 2))
 * 			)
 * 
 * 	GET_NTH_FIBONACCI_NUM(5)
 */

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