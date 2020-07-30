/**
 * @param {any[]} arr1
 * @param {any[]} arr2
 * @returns {any[]}
 */
exports.join
	= (arr1, arr2) =>
		arr2.length === 0
			? arr1
			: exports.join(
				arr1.concat([arr2[0]]),
				arr2.slice(1)
			);