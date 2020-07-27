const { TestCase } = require("../../../../unit-tests/js/test-case");
const { generateRandomPermutation } = require("./generate-random-permutation");
const { generateIntegerRange } = require("../../../../benchmarks/js/utils");
const { findAll } = require("../../../searching/find-all/js/find-all");

const mockArr = generateIntegerRange(0, 100);
/**
 * @param {number[]} res
 * @returns {boolean}
 */
const containsSameElements
	= res =>
		mockArr.every(
			elem =>
				findAll(res, e => e === elem, []).length
				=== findAll(mockArr, e => e === elem, []).length
		);

exports.testCases = [
	new TestCase(
		"generateRandomPermutation",
		generateRandomPermutation,
		[
			mockArr,
			[]
		],
		containsSameElements
	),
	new TestCase(
		"generateRandomPermutation",
		generateRandomPermutation,
		[
			mockArr,
			[]
		],
		containsSameElements
	),
	new TestCase(
		"generateRandomPermutation",
		generateRandomPermutation,
		[
			mockArr,
			[]
		],
		containsSameElements
	),
	new TestCase(
		"generateRandomPermutation",
		generateRandomPermutation,
		[
			mockArr,
			[]
		],
		containsSameElements
	),
	new TestCase(
		"generateRandomPermutation",
		generateRandomPermutation,
		[
			mockArr,
			[]
		],
		containsSameElements
	)
];