/**
 * 	SENTINEL_FIND_FIRST (arr, pred)
 * 		if pred(arr[0])
 * 		then
 * 			if greater(len(arr), 1)
 * 			then return arr[0]
 * 			else return nil
 * 		else return SENTINEL_FIND_FIRST(slice(arr, 1, len(arr)), pred)
 *
 * 	SENTINEL_FIND_FIRST([1, 2, 3, 2], elem -> equal(remainder(elem, 2), 0))
 */

/**
 * @callback SentinelFindFirstPredicate
 * @param {any} elem
 * @returns {boolean}
 */

/**
 * @param {any[]} arr
 * @param {SentinelFindFirstPredicate} pred
 * @returns {undefined|any}
 */
exports.sentinelFindFirst
	= (arr, pred) =>
		pred(arr[0])
			? arr.length > 1
				? arr[0]
				: undefined
			: exports.sentinelFindFirst(
				arr.slice(1),
				pred
			);