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
			: exports.map(
				arr.slice(1),
				fn,
				res.concat(
					[
						fn(arr[0])
					]
				)
			);