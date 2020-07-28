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

const result3
	= exports.computeGreatestCommonDivisorEuclideanAlgorithm2(1870, 4389, 0);
console.debug(`Passed? ${result3[0] === 11}; steps: ${result3[1]}`);
const result4
	= exports.computeGreatestCommonDivisorEuclideanAlgorithm2(33263, 215441, 0);
console.debug(`Passed? ${result4[0] === 29}; steps: ${result4[1]}`);