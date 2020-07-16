/**
 * 	JOIN (arr1, arr2)
 * 		if empty(arr2)
 * 		then return arr1
 * 		else return JOIN(concat(arr1, arr2[0]), slice(arr2, 1, len(arr2)))
 * 
 * 	JOIN([1, 2, 3], [4, 5])
 */

/**
 * @param {any[]} arr1
 * @param {any[]} arr2
 * @returns {any[]}
 */
exports.join
	= (arr1, arr2) =>
		arr2.length === 0
			? arr1
			: exports.join(arr1.concat([arr2[0]]), arr2.slice(1));