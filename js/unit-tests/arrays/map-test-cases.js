const { TestCase } = require("../test-case");
const { deepAreArraysEqual }
	= require("../../algorithms/arrays/are-arrays-equal");
const { map } = require("../../algorithms/arrays/map");

exports.testCases = [
	new TestCase(
		"map",
		map,
		[[0, 1, 2, 3, 4], elem => 2 * elem, []],
		res => deepAreArraysEqual(res, [0, 2, 4, 6, 8])
	),
	new TestCase(
		"map",
		map,
		[["A", "B", "C", "D", "E"], elem => "(" + elem + ")", []],
		res => deepAreArraysEqual(res, ["(A)", "(B)", "(C)", "(D)", "(E)"])
	),
	new TestCase(
		"map",
		map,
		[[false, true, false], elem => !elem, []],
		res => deepAreArraysEqual(res, [true, false, true])
	)
];