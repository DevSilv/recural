const { TestCase } = require("../../../../unit-tests/js/test-case");
const { findFirst } = require("./find-first");

exports.testCases = [
	new TestCase(
		"findFirst",
		findFirst,
		[[0, 1, 2, 3, 4], elem => elem % 2 === 0],
		res => res === 0
	),
	new TestCase(
		"findFirst",
		findFirst,
		[[1, 2, 3, 4], elem => elem % 5 === 0],
		res => res === undefined
	),
	new TestCase(
		"findFirst",
		findFirst,
		[[], elem => elem % 5 === 0],
		res => res === undefined
	)
];