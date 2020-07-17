const { TestCase } = require("../test-case");
const { getLength } = require("../../algorithms/arrays/get-length");

exports.testCases = [
	new TestCase(
		"getLength",
		getLength,
		[[0, 1, 2, 3, 4], 0],
		res => res === 5
	),
	new TestCase(
		"getLength",
		getLength,
		[[], 0],
		res => res === 0
	)
];