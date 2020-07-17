const { TestCase } = require("../test-case");
const { deepAreArraysEqual }
	= require("../../algorithms/other-problems/are-arrays-equal");
const { split } = require("../../algorithms/other-problems/split");

exports.testCases = [
	new TestCase(
		"split",
		split,
		[[0, 1, 2, 3, 4], 1, []],
		res => deepAreArraysEqual(res, [[0], [1], [2], [3], [4]])
	),
	new TestCase(
		"split",
		split,
		[[0, 1, 2, 3, 4], 2, []],
		res => deepAreArraysEqual(res, [[0, 1], [2, 3], [4]])
	),
	new TestCase(
		"split",
		split,
		[[0, 1, 2, 3, 4], 20, []],
		res => deepAreArraysEqual(res, [[0, 1, 2, 3, 4]])
	)
];