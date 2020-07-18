const { TestCase } = require("../../../../unit-tests/js/test-case");
const { countIf } = require("./count-if");

exports.testCases = [
	new TestCase(
		"countIf",
		countIf,
		[[0, 1, 2, 3, 4], elem => elem % 2 === 0, 0],
		res => res === 3
	),
	new TestCase(
		"countIf",
		countIf,
		[[], elem => elem % 2 === 0, 0],
		res => res === 0
	),
	new TestCase(
		"countIf",
		countIf,
		[[n => n * 2, n => n * 3, n => n * 4], fn => fn(2) > 5, 0],
		res => res === 2
	)
];