/**
 * 	SPLIT (arr, len, res)
 * 		if len(arr) < len
 * 		then return concat(res, arr)
 * 		else return SPLIT(slice(arr, len), len, concat(res, slice(arr, 0, len)))
 * 
 * 	SPLIT([1, 2, 3], 2, [])
 */

/**
 * @template T
 * @param {T[]} arr An array
 * @param {number} len An integer > 0
 * @param {T[][]} res An array
 * @returns {T[][]}
 */
exports.split
	= (arr, len, res) =>
		arr.length <= len
			? res.concat(
				[
					arr
				]
			)
			: exports.split(
				arr.slice(len),
				len,
				res.concat(
					[
						arr.slice(0, len)
					]
				)
			);