/**
 * 	GET_LENGTH (arr, res)
 * 		if equal(arr[res - 1], NIL)
 * 		then return res
 * 		else return GET_LENGTH(arr, res + 1)
 * 
 * 	GET_LENGTH([1, 2, 3], 0)
 */

/**
 * @param {any[]} arr
 * @param {number} res
 * @returns {number}
 */
exports.getLength
	= (arr, res) =>
		arr[res] === undefined
			? res
			: exports.getLength(arr, res + 1);