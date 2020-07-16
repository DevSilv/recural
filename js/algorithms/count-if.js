/**
 * 	COUNT_IF (arr, pred, res)
 * 		if empty(arr)
 * 		then return res
 * 		else
 * 			if pred(arr[0])
 * 			then return COUNT_IF(slice(arr, 1, len(arr)), pred, res + 1)
 * 			else return COUNT_IF(slice(arr, 1, len(arr)), pred, res)
 * 
 * 	COUNT_IF ([1, 2, 3], elem -> equal(remainder(elem, 2), 0), 0)
 */

/**
 * @callback CountIfFn
 * @param {any} elem
 * @returns {boolean}
 */

/**
 * 
 * @param {any[]} arr
 * @param {CountIfFn} pred
 * @param {number} res
 */
exports.countIf
	= (arr, pred, res) =>
		arr.length === 0
			? res
			: pred(arr[0])
				? exports.countIf(
					arr.slice(1),
					pred,
					res + 1
				)
				: exports.countIf(
					arr.slice(1),
					pred,
					res
				);