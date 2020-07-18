const { TestCase } = require("../../../../unit-tests/js/test-case");
const { binarySearch } = require("./binary-search");

/**
 * @todo Add test cases for duplicate elements as soon as it will be clear
 * 	to me what index should binary search return in such cases
 */
exports.testCases = [
	new TestCase(
		"binarySearch",
		binarySearch,
		[[0, 1, 2, 3, 4, 5, 6, 7], 0, 0, 7],
		res => res === 0
	),
	new TestCase(
		"binarySearch",
		binarySearch,
		[[0, 1, 2, 3, 4, 5, 6], 5, 0, 6],
		res => res === 5
	),
	new TestCase(
		"binarySearch",
		binarySearch,
		[[], 0, 0, -1],
		res => res === undefined
	),
	new TestCase(
		"binarySearch",
		binarySearch,
		[[0, 1, 2, 3, 4, 5, 6, 7], 10, 0, 7],
		res => res === undefined
	)
];