const { TestCase } = require("../../../../unit-tests/js/test-case");
const { deepAreArraysEqual }
	= require("../../are-arrays-equal/js/are-arrays-equal");
const { reduce } = require("./reduce");

exports.testCases = [
	new TestCase(
		"reduce",
		() => reduce([0, 1, 2, 3, 4], (res, cur) => res + cur, 0),
		res => res === 0 + 1 + 2 + 3 + 4
	),
	new TestCase(
		"reduce",
		() => reduce([0, 1, 2, 3, 4], (res, cur) => res - cur, 0),
		res => res === 0 - 1 - 2 - 3 - 4
	),
	new TestCase(
		"reduce",
		() => reduce([1, 2, 3, 4], (res, cur) => res * cur, 1),
		res => res === 1 * 2 * 3 * 4
	),
	new TestCase(
		"reduce",
		() => reduce([1, 2, 3, 4], (res, cur) => res / cur, 1),
		res => res === 1 / 2 / 3 / 4
	),
	new TestCase(
		"reduce",
		() =>
			reduce(
				[2, 1, -2, -1],
				(res, cur) => cur < res ? cur : res,
				Number.POSITIVE_INFINITY
			),
		res => res === -2
	),
	new TestCase(
		"reduce",
		() => reduce(["A", "B", "C", "D", "E"], (res, cur) => res + cur, ""),
		res => res === "ABCDE"
	),
	new TestCase(
		"reduce",
		() =>
			reduce(
				[[0], [1], [2], [3], [4]],
				(res, cur) => res.concat(cur),
				[]
			),
		res => deepAreArraysEqual(res, [0, 1, 2, 3, 4])
	)
];