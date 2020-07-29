const { TestCase } = require("../../../../unit-tests/js/test-case");
const {
	shallowAreArraysEqual,
	deepAreArraysEqual
} = require("./are-arrays-equal");

exports.testCases = [
	new TestCase(
		"shallowAreArraysEqual",
		() => shallowAreArraysEqual([1, 2, 3], [1, 2, 3]),
		[

		],
		res => res === true
	),
	new TestCase(
		"shallowAreArraysEqual",
		() => shallowAreArraysEqual([1, 2, 3], [3, 2, 1]),
		[

		],
		res => res === false
	),
	new TestCase(
		"shallowAreArraysEqual",
		() => shallowAreArraysEqual([1], [1, 2, 3]),
		[

		],
		res => res === false
	),
	new TestCase(
		"shallowAreArraysEqual",
		() => shallowAreArraysEqual([], [1, 2, 3]),
		[

		],
		res => res === false
	),
	new TestCase(
		"deepAreArraysEqual",
		() => deepAreArraysEqual([1, 2, 3], [1, 2, 3]),
		[

		],
		res => res === true
	),
	new TestCase(
		"deepAreArraysEqual",
		() => deepAreArraysEqual([[1, 2], [3]], [[1, 2], [3]]),
		[

		],
		res => res === true
	),
	new TestCase(
		"deepAreArraysEqual",
		() => deepAreArraysEqual([[1, 2], [3]], [[1, 2], 3]),
		[

		],
		res => res === false
	),
	new TestCase(
		"deepAreArraysEqual",
		() => deepAreArraysEqual([[1, 2], [3]], [[1], [2, 3]]),
		[

		],
		res => res === false
	)
];