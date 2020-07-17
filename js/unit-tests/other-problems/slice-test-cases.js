const { TestCase } = require("../test-case");
const { deepAreArraysEqual }
	= require("../../algorithms/other-problems/are-arrays-equal");
const { slice } = require("../../algorithms/other-problems/slice");

exports.testCases = [
	new TestCase(
		"slice",
		slice,
		[[0, 1, 2, 3, 4], 2, 4, [], 0],
		res => deepAreArraysEqual(res, [2, 3])
	),
	new TestCase(
		"slice",
		slice,
		[[0, 1, 2, 3, 4], 0, 0, [], 0],
		res => deepAreArraysEqual(res, [])
	)
];