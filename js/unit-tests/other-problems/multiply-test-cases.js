const { TestCase } = require("../test-case");
const { multiply } = require("../../algorithms/other-problems/multiply");

exports.testCases = [
	new TestCase(
		"multiply",
		multiply,
		[10, 0],
		res => res === 0
	),
	new TestCase(
		"multiply",
		multiply,
		[2, 3],
		res => res === 6
	),
	new TestCase(
		"multiply",
		multiply,
		[-15, 2],
		res => res === -30
	),
	new TestCase(
		"multiply",
		multiply,
		[2.5, 4],
		res => res === 10
	),
	new TestCase(
		"multiply",
		multiply,
		[-1.5, 4],
		res => res === -6
	)
];