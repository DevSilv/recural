/**
 * @template T
 * @param {T[]} arr An array
 * @param {T[]} res Always an empty array
 * @returns {T[]} The array "arr" with elements reordered
 */
exports.generateRandomPermutation
	= function (arr, res) {
		if (arr.length === 0) {
			return res;
		} else {
			const maxProperElemIndex
				= arr.length < 2
					? 0
					: arr.length - 1 - 1;
			const split
				= Math.floor(
					Math.random() * maxProperElemIndex
				);

			return exports.generateRandomPermutation(
				arr
					.slice(0, split)
					.concat(
						arr.slice(split + 1, arr.length)
					),
				res.concat(arr[split])
			);
		}
	};