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