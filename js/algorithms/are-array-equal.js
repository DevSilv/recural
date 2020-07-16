/**
 * 	ARE_ARRAYS_EQUAL (arr1, arr2)
 * 		if empty(arr1) and empty(arr2)
 * 		then return true
 * 		else
 * 			if equal(arr1[0], arr2[0])
 * 			then return ARE_ARRAYS_EQUAL(slice(arr1, 1, len(arr1)), slice(arr2, 1, len(arr2)))
 * 			else return false
 * 
 * 	ARE_ARRAYS_EQUAL([1, 2, 3], [1, 2, 3])
 * 	ARE_ARRAYS_EQUAL([1, [2, 3]], [1, [2, 3]])
 */

/**
 * @template PrimitiveType
 * @param {PrimitiveType[]} arr1
 * @param {PrimitiveType[]} arr2
 * @returns {boolean}
 * @description Note: DOES NOT handle e.g. arrays, elements of which are also
 * 	arrays
 */
exports.shallowAreArraysEqual
	= (arr1, arr2) =>
		arr1.length === 0 && arr2.length === 0
			? true
			: arr1[0] === arr2[0]
				? exports.shallowAreArraysEqual(arr1.slice(1), arr2.slice(1))
				: false;

/**
 * @param {any[]} arr1
 * @param {any[]} arr2
 * @returns {boolean}
 * @description Note: handles arrays, elements of which are also arrays
 */
exports.deepAreArraysEqual
	= (arr1, arr2) =>
		arr1.length === 0 && arr2.length === 0
			? true
			: Array.isArray(arr1[0]) && Array.isArray(arr2[0])
				? exports.deepAreArraysEqual(arr1[0], arr2[0])
					? exports.deepAreArraysEqual(
						arr1.slice(1),
						arr2.slice(1)
					)
					: false
				: arr1[0] === arr2[0]
					? exports.deepAreArraysEqual(
						arr1.slice(1),
						arr2.slice(1)
					)
					: false;