/**
 * @param {number} a
 * @param {number} b
 * @param {number} stepsCount Always 0
 * @returns {[number, number]}
 */
exports.computeGreatestCommonDivisorEuclideanAlgorithm
	= (a, b, stepsCount) =>
		b === 0
			? [a, stepsCount]
			: exports.computeGreatestCommonDivisorEuclideanAlgorithm(
				b,
				a % b,
				stepsCount + 1
			);

// =============================================================================

/**
 * @param {number} a
 * @param {number} b
 * @param {number} stepsCount Always 0
 * @returns {[number, number]}
 */
exports.computeGreatestCommonDivisorEuclideanAlgorithm2
	= (a, b, stepsCount) =>
		a === b
			? [a, stepsCount]
			: a > b
				? exports.computeGreatestCommonDivisorEuclideanAlgorithm2(
					a - b,
					b,
					stepsCount + 1
				)
				: exports.computeGreatestCommonDivisorEuclideanAlgorithm2(
					a,
					b - a,
					stepsCount + 1
				);