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