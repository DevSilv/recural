/**
 * 	MAP (arr, fn, res)
 * 		if empty(arr)
 * 		then return res
 * 		else return MAP(slice(arr, 1, len(arr)), fn, concat(res, fn(arr[0])))
 * 
 * 	MAP([1, 2, 3], elem -> multiply(elem, 2))
 */

/**
 * @callback MapFn
 * @param {any} elem
 * @returns {any}
 */

/**
 * 
 * @param {any[]} arr
 * @param {MapFn} fn
 * @param {any[]} res
 */
exports.map
	= (arr, fn, res) =>
		arr.length === 0
			? res
			: exports.map(arr.slice(1), fn, res.concat([fn(arr[0])]));