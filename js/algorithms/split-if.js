/**
 * 	SPLIT_IF (arr, pred, part, res)
 * 		if empty(arr)
 * 		then return res
 * 		else
 * 			if pred(arr[0])
 * 			then return SPLIT_IF(slice(arr, 1, len(arr)), pred, concat([], arr[0]), concat(res, part))
 * 			else return SPLIT_IF(slice(arr, 1, len(arr)), pred, concat(part, arr[0]), res)
 * 
 * 	SPLIT_IF([1, 2, 3], elem -> equal(elem, 2), [], [])
 */

/**
 * @callback SplitIfFn
 * @param {any} elem
 * @returns {boolean}
 */

/**
 * @template T
 * @param {T[]} arr
 * @param {SplitIfFn} pred
 * @param {T[]} part
 * @param {T[][]} res
 * @returns {T[][]}
 */
exports.splitIf
	= (arr, pred, part, res) =>
		arr.length === 0
			? res.concat(
				[
					part
				]
			)
			: pred(arr[0])
				? exports.splitIf(
					arr.slice(1),
					pred,
					[
						arr[0]
					],
					res.concat(
						[
							part
						]
					)
				)
				: exports.splitIf(
					arr.slice(1),
					pred,
					part.concat(
						[
							arr[0]
						]
					),
					res
				);