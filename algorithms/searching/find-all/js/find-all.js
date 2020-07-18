/**
 * 	FIND_ALL (arr, pred, res)
 * 		if empty(arr)
 * 		then return res
 * 		else
 * 			if pred(arr[0])
 * 			then return FIND_ALL(slice(arr, 1, len(arr)), pred, concat(res, arr[0]))
 * 			else return FIND_ALL(slice(arr, 1, len(arr)), pred, res)
 * 
 * 	FIND_ALL([1, 2, 3, 4], elem -> equal(remainder(elem, 2), 0), [])
 */

/**
 * @callback FindAllPredicate
 * @param {any} elem
 * @returns {boolean}
 */

/**
 * @param {any[]} arr
 * @param {FindAllPredicate} pred
 * @param {any[]} res
 * @returns {undefined|any}
 */
exports.findAll
	= (arr, pred, res) =>
		arr.length === 0
			? res
			: pred(arr[0])
				? exports.findAll(
					arr.slice(1),
					pred,
					res.concat([arr[0]])
				)
				: exports.findAll(
					arr.slice(1),
					pred,
					res
				);