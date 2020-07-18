const process = require("process");
const areArraysEqualTestCases
	= require("./other-problems/are-arrays-equal-test-cases").testCases;
const splitTestCases = require("./other-problems/split-test-cases").testCases;
const sliceTestCases = require("./other-problems/slice-test-cases").testCases;
const findFirstTestCases
	= require("./searching/find-first-test-cases").testCases;
const findAllTestCases = require("./searching/find-all-test-cases").testCases;
const reduceTestCases = require("./other-problems/reduce-test-cases").testCases;
const mapTestCases = require("./other-problems/map-test-cases").testCases;
const getLengthTestCases
	= require("./other-problems/get-length-test-cases").testCases;
const countIfTestCases
	= require("./other-problems/count-if-test-cases").testCases;
const splitIfTestCases
	= require("./other-problems/split-if-test-cases").testCases;
const joinTestCases = require("./other-problems/join-test-cases").testCases;
const binarySearchTestCases
	= require("./searching/binary-search-test-cases").testCases;
const sentinelFindFirstTestCases
	= require("./searching/sentinel-find-first-test-cases").testCases;
const getFactorialTestCases
	= require("./other-problems/get-factorial-test-cases").testCases;
const getNthFibonacciNumTestCases
	= require("./other-problems/get-nth-fibonacci-num-test-cases").testCases;

const testCases =
	areArraysEqualTestCases.concat(
		splitTestCases,
		sliceTestCases,
		findFirstTestCases,
		findAllTestCases,
		reduceTestCases,
		mapTestCases,
		getLengthTestCases,
		countIfTestCases,
		splitIfTestCases,
		joinTestCases,
		binarySearchTestCases,
		sentinelFindFirstTestCases,
		getFactorialTestCases,
		getNthFibonacciNumTestCases
	);

let areAllTestsPassed = true;

testCases.forEach(
	testCase => {
		const result
			= testCase.isTestPassedCallback(
				testCase.fn.apply(undefined, testCase.fnInput)
			);

		areAllTestsPassed = areAllTestsPassed && result;

		process.stdout.write(
			`${testCase.fnName}: test ${result ? "PASSED" : "FAILED"}\n`
		);
	}
);

if (areAllTestsPassed) {
	process.stdout.write("\nAll tests PASSED\n")
} else {
	process.stdout.write("\nSome tests FAILED\n");
}