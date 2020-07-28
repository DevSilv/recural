const { TestCase } = require("../../../../unit-tests/js/test-case");
const {
	quicksort,
	quicksort2
} = require("./quicksort");
const { generateRandomPermutation }
	= require(
		"../../../other-problems/generate-random-permutation/js/generate-random-permutation"
	);
const { generateIntegerRange } = require("../../../../benchmarks/js/utils");
const { isSortedAsc } = require("../../is-sorted-asc/js/is-sorted-asc");

const mockArrs = [
	[0, 1, 2, 3, 4],
	[4, 3, 2, 1, 0],
	[9, 1, 5, 3, 7, 2, 0, 4, 8, 6],
	[10, 0, 0, 10, 1, 2, 7, 12],
	[],
	generateRandomPermutation(
		generateIntegerRange(1, 150), []
	),
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

exports.testCases = [
	new TestCase(
		"quicksort",
		quicksort,
		[
			mockArrs[0],
			0,
			mockArrs[0].length - 1
		],
		res =>
			isSortedAsc(
				(firstElem, secondElem) => firstElem > secondElem,
				res,
				0
			) === true
	),
	new TestCase(
		"quicksort",
		quicksort,
		[
			mockArrs[1],
			0,
			mockArrs[1].length - 1
		],
		res =>
			isSortedAsc(
				(firstElem, secondElem) => firstElem > secondElem,
				res,
				0
			) === true
	),
	new TestCase(
		"quicksort",
		quicksort,
		[
			mockArrs[2],
			0,
			mockArrs[2].length - 1
		],
		res =>
			isSortedAsc(
				(firstElem, secondElem) => firstElem > secondElem,
				res,
				0
			) === true
	),
	new TestCase(
		"quicksort",
		quicksort,
		[
			mockArrs[3],
			0,
			mockArrs[3].length - 1
		],
		res =>
			isSortedAsc(
				(firstElem, secondElem) => firstElem > secondElem,
				res,
				0
			) === true
	),
	new TestCase(
		"quicksort",
		quicksort,
		[
			mockArrs[4],
			0,
			mockArrs[4].length - 1
		],
		res =>
			isSortedAsc(
				(firstElem, secondElem) => firstElem > secondElem,
				res,
				0
			) === true
	),
	new TestCase(
		"quicksort",
		quicksort,
		[
			mockArrs[5],
			0,
			mockArrs[5].length - 1
		],
		res =>
			isSortedAsc(
				(firstElem, secondElem) => firstElem > secondElem,
				res,
				0
			) === true
	),
	new TestCase(
		"quicksort",
		quicksort,
		[
			mockArrs[6],
			0,
			mockArrs[6].length - 1
		],
		res =>
			isSortedAsc(
				(firstElem, secondElem) => firstElem > secondElem,
				res,
				0
			) === true
	),
	new TestCase(
		"quicksort2",
		quicksort2,
		[
			mockArrs[0],
			0,
			mockArrs[0].length - 1,
			0,
			Math.floor(mockArrs[0].length / 2),
			[],
			[]
		],
		res =>
			isSortedAsc(
				(firstElem, secondElem) => firstElem > secondElem,
				res,
				0
			) === true
	),
	new TestCase(
		"quicksort2",
		quicksort2,
		[
			mockArrs[1],
			0,
			mockArrs[1].length - 1,
			0,
			Math.floor(mockArrs[1].length / 2),
			[],
			[]
		],
		res =>
			isSortedAsc(
				(firstElem, secondElem) => firstElem > secondElem,
				res,
				0
			) === true
	),
	new TestCase(
		"quicksort2",
		quicksort2,
		[
			mockArrs[2],
			0,
			mockArrs[2].length - 1,
			0,
			Math.floor(mockArrs[2].length / 2),
			[],
			[]
		],
		res =>
			isSortedAsc(
				(firstElem, secondElem) => firstElem > secondElem,
				res,
				0
			) === true
	),
	new TestCase(
		"quicksort2",
		quicksort2,
		[
			mockArrs[3],
			0,
			mockArrs[3].length - 1,
			0,
			Math.floor(mockArrs[3].length / 2),
			[],
			[]
		],
		res =>
			isSortedAsc(
				(firstElem, secondElem) => firstElem > secondElem,
				res,
				0
			) === true
	),
	new TestCase(
		"quicksort2",
		quicksort2,
		[
			mockArrs[4],
			0,
			mockArrs[4].length - 1,
			0,
			Math.floor(mockArrs[4].length / 2),
			[],
			[]
		],
		res =>
			isSortedAsc(
				(firstElem, secondElem) => firstElem > secondElem,
				res,
				0
			) === true
	),
	new TestCase(
		"quicksort2",
		quicksort2,
		[
			mockArrs[5],
			0,
			mockArrs[5].length - 1,
			0,
			Math.floor(mockArrs[5].length / 2),
			[],
			[]
		],
		res =>
			isSortedAsc(
				(firstElem, secondElem) => firstElem > secondElem,
				res,
				0
			) === true
	),
	new TestCase(
		"quicksort2",
		quicksort2,
		[
			mockArrs[6],
			0,
			mockArrs[6].length - 1,
			0,
			Math.floor(mockArrs[6].length / 2),
			[],
			[]
		],
		res =>
			isSortedAsc(
				(firstElem, secondElem) => firstElem > secondElem,
				res,
				0
			) === true
	)
];