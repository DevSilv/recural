/**
 * @template T
 * @param {T[]} arr
 * @param {number} n
 * @returns {T[]}
 */
exports.reverse
	= (arr, n) =>
		arr.length < 2
			? arr
			: n > arr.length - 3
				? [
					arr[n + 1]
				].concat(
					arr.slice(0, n + 1),
					arr.slice(n + 2, arr.length)
				)
				: exports.reverse(
					[
						arr[n + 1]
					].concat(
						arr.slice(0, n + 1),
						arr.slice(n + 2, arr.length)
					),
					n + 1
				);

// =============================================================================

/**
 * @template T
 * @param {T[]} arr
 * @param {T[]} res
 * @returns {T[]}
 */
exports.reverse2
	= (arr, res) =>
		arr.length === 0
			? res
			: exports.reverse2(
				arr.slice(1),
				[arr[0]].concat(res)
			);