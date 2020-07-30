const { TestCase } = require("../../../../unit-tests/js/test-case");
const { deepAreArraysEqual }
	= require("../../are-arrays-equal/js/are-arrays-equal");
const { splitIntoParts } = require("./split-into-parts");

exports.testCases = [
	new TestCase(
		"splitIntoParts",
		() => splitIntoParts([0, 1, 2, 3, 4], 1, []),
		res =>
			deepAreArraysEqual(
				res,
				[
					[0],
					[1],
					[2],
					[3],
					[4]
				]
			)
	),
	new TestCase(
		"splitIntoParts",
		() => splitIntoParts([0, 1, 2, 3, 4], 2, []),
		res =>
			deepAreArraysEqual(
				res,
				[
					[0, 1],
					[2, 3],
					[4]
				]
			)
	),
	new TestCase(
		"splitIntoParts",
		() => splitIntoParts([0, 1, 2, 3, 4], 20, []),
		res =>
			deepAreArraysEqual(
				res,
				[
					[0, 1, 2, 3, 4]
				]
			)
	)
];