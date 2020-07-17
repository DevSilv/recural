const { TestCase } = require("../test-case");
const { deepAreArraysEqual }
	= require("../../algorithms/arrays/are-arrays-equal");
const { slice } = require("../../algorithms/arrays/slice");

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