const { TestCase } = require("../../../../unit-tests/js/test-case");
const { deepAreArraysEqual }
	= require("../../../other-problems/are-arrays-equal/js/are-arrays-equal");
const { findAll } = require("./find-all");

exports.testCases = [
	new TestCase(
		"findAll",
		findAll,
		[[0, 1, 2, 3, 4], elem => elem % 2 === 0, []],
		res => deepAreArraysEqual(res, [0, 2, 4])
	),
	new TestCase(
		"findAll",
		findAll,
		[[0, 1, 2, 3, 4], elem => elem === elem, []],
		res => deepAreArraysEqual(res, [0, 1, 2, 3, 4])
	),
	new TestCase(
		"findAll",
		findAll,
		[[1, 2, 3, 4], elem => elem % 5 === 0, []],
		res => deepAreArraysEqual(res, [])
	)
];