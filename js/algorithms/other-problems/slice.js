/**
 * 	SLICE (arr, start, end, res, cur)
 * 		if equal(cur, end)
 * 		then return res
 * 		else
 * 			if greaterOrEqual(cur, start) and less(cur, end)
 * 			then return SLICE(arr, start, end, concat(res, arr[cur]), cur + 1)
 * 			else return SLICE(arr, start, end, res, cur + 1)
 *
 * 	SLICE([1, 2, 3], 1, 3, [], 0)
 */

/**
 * @template T
 * @param {T[]} arr
 * @param {number} start
 * @param {number} end
 * @param {T[]} res
 * @param {number} cur
 * @returns {T[]}
 */
exports.slice
	= (arr, start, end, res, cur) =>
		cur >= end
			? res
			: cur >= start && cur < end
				? exports.slice(
					arr,
					start,
					end,
					res.concat(
						[
							arr[cur]
						]
					),
					cur + 1
				)
				: exports.slice(arr, start, end, res, cur + 1);