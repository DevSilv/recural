/**
 * @callback ReduceFn
 * @param {any} res
 * @param {any} cur
 * @returns {any}
 */

/**
 * @param {any[]} arr
 * @param {ReduceFn} fn
 * @param {any} res
 * @returns {any}
 */
exports.reduce
	= (arr, fn, res) =>
		arr.length === 0
			? res
			: exports.reduce(arr.slice(1), fn, fn(res, arr[0]));