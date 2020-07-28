const process = require("process");
const areArraysEqualTestCases
	= require(
		"../../algorithms/other-problems/are-arrays-equal/js/"
		+ "are-arrays-equal-test-cases"
	).testCases;
const splitIntoPartsTestCases
	= require(
		"../../algorithms/other-problems/split-into-parts/js/"
		+ "split-into-parts-test-cases"
	).testCases;
const sliceTestCases
	= require("../../algorithms/other-problems/slice/js/slice-test-cases")
		.testCases;
const findFirstTestCases
	= require("../../algorithms/searching/find-first/js/find-first-test-cases")
		.testCases;
const findAllTestCases
	= require("../../algorithms/searching/find-all/js/find-all-test-cases")
		.testCases;
const reduceTestCases
	= require("../../algorithms/other-problems/reduce/js/reduce-test-cases")
		.testCases;
const mapTestCases
	= require("../../algorithms/other-problems/map/js/map-test-cases")
		.testCases;
const getLengthTestCases
	= require(
		"../../algorithms/other-problems/get-length/js/get-length-test-cases"
	).testCases;
const countIfTestCases
	= require("../../algorithms/other-problems/count-if/js/count-if-test-cases")
		.testCases;
const splitIfTestCases
	= require("../../algorithms/other-problems/split-if/js/split-if-test-cases")
		.testCases;
const joinTestCases
	= require("../../algorithms/other-problems/join/js/join-test-cases")
		.testCases;
const binarySearchTestCases
	= require(
		"../../algorithms/searching/binary-search/js/binary-search-test-cases"
	).testCases;
const sentinelFindFirstTestCases
	= require(
		"../../algorithms/searching/sentinel-find-first/js/"
		+ "sentinel-find-first-test-cases"
	).testCases;
const getFactorialTestCases
	= require(
		"../../algorithms/other-problems/get-factorial/js/"
		+ "get-factorial-test-cases"
	).testCases;
const getNthFibonacciNumTestCases
	= require(
		"../../algorithms/other-problems/get-nth-fibonacci-num/js/"
		+ "get-nth-fibonacci-num-test-cases"
	).testCases;
const multiplyTestCases
	= require("../../algorithms/other-problems/multiply/js/multiply-test-cases")
		.testCases;
const generateRandomPermutationTestCases
	= require(
		"../../algorithms/other-problems/generate-random-permutation/js/"
		+ "generate-random-permutation-test-cases"
	).testCases;
const breadthFirstSearchTestCases
	= require(
		"../../algorithms/searching/breadth-first-search/js/"
		+ "breadth-first-search-test-cases"
	).testCases;
const depthFirstSearchTestCases
	= require(
		"../../algorithms/searching/depth-first-search/js/"
		+ "depth-first-search-test-cases"
	).testCases;
const { testCases: isSortedAscTestCases }
	= require("../../algorithms/sorting/is-sorted-asc/js/is-sorted-asc-test-cases");
const quicksortTestCases
	= require("../../algorithms/sorting/quicksort/js/quicksort-test-cases")
		.testCases;
const { testCases: computeGreatestCommonDivisorTestCases }
	= require(
		"../../algorithms/other-problems/compute-greatest-common-divisor/js/compute-greatest-common-divisor-test-cases"
	);
const { testCases: reverseTestCases }
	= require("../../algorithms/other-problems/reverse/js/reverse-test-cases");

const testCases =
	areArraysEqualTestCases.concat(
		splitIntoPartsTestCases,
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
		getNthFibonacciNumTestCases,
		multiplyTestCases,
		generateRandomPermutationTestCases,
		breadthFirstSearchTestCases,
		depthFirstSearchTestCases,
		isSortedAscTestCases,
		quicksortTestCases,
		computeGreatestCommonDivisorTestCases,
		reverseTestCases
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