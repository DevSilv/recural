/**
 * 	FIND_FIRST (arr, pred)
 * 		if empty(arr)
 * 		then return nil
 * 		else
 * 			if pred(arr[0])
 * 			then return arr[0]
 * 			else return FIND_FIRST(slice(arr, 1, len(arr)), pred)
 * 
 * 	FIND_FIRST([1, 2, 3], elem -> equal(remainder(elem, 2), 0))
 */

/**
 * @callback FindFirstPredicate
 * @param {any} elem
 * @returns {boolean}
 */

/**
 * @param {any[]} arr
 * @param {FindFirstPredicate} pred
 * @returns {undefined|any}
 */
exports.findFirst
	= (arr, pred) =>
		arr.length === 0
			? undefined
			: pred(arr[0])
				? arr[0]
				: exports.findFirst(
					arr.slice(1),
					pred
				);