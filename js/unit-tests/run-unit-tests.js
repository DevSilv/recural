const process = require("process");
const areArraysEqualTestCases
	= require("./arrays/are-arrays-equal-test-cases").testCases;
const splitTestCases = require("./arrays/split-test-cases").testCases;
const sliceTestCases = require("./arrays/slice-test-cases").testCases;
const findFirstTestCases = require("./arrays/find-first-test-cases").testCases;
const findAllTestCases = require("./arrays/find-all-test-cases").testCases;
const reduceTestCases = require("./arrays/reduce-test-cases").testCases;
const mapTestCases = require("./arrays/map-test-cases").testCases;
const getLengthTestCases = require("./arrays/get-length-test-cases").testCases;
const countIfTestCases = require("./arrays/count-if-test-cases").testCases;
const splitIfTestCases = require("./arrays/split-if-test-cases").testCases;
const joinTestCases = require("./arrays/join-test-cases").testCases;

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
		joinTestCases
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