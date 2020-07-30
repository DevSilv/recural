const process = require("process");
const { testCases: areArraysEqualTestCases }
    = require(
        "../../algorithms/other-problems/are-arrays-equal/js/are-arrays-equal-test-cases"
    );
const { testCases: splitIntoPartsTestCases }
    = require(
        "../../algorithms/other-problems/split-into-parts/js/split-into-parts-test-cases"
    );
const { testCases: sliceTestCases }
    = require("../../algorithms/other-problems/slice/js/slice-test-cases");
const { testCases: findFirstTestCases }
    = require("../../algorithms/searching/find-first/js/find-first-test-cases");
const { testCases: findAllTestCases }
    = require("../../algorithms/searching/find-all/js/find-all-test-cases");
const { testCases: reduceTestCases }
    = require("../../algorithms/other-problems/reduce/js/reduce-test-cases");
const { testCases: mapTestCases }
    = require("../../algorithms/other-problems/map/js/map-test-cases");
const { testCases: getLengthTestCases }
    = require(
        "../../algorithms/other-problems/get-length/js/get-length-test-cases"
    );
const { testCases: countIfTestCases }
    = require("../../algorithms/other-problems/count-if/js/count-if-test-cases");
const { testCases: splitIfTestCases }
    = require("../../algorithms/other-problems/split-if/js/split-if-test-cases");
const { testCases: joinTestCases }
    = require("../../algorithms/other-problems/join/js/join-test-cases");
const { testCases: binarySearchTestCases }
    = require(
        "../../algorithms/searching/binary-search/js/binary-search-test-cases"
    );
const { testCases: sentinelFindFirstTestCases }
    = require(
        "../../algorithms/searching/sentinel-find-first/js/sentinel-find-first-test-cases"
    );
const { testCases: getFactorialTestCases }
    = require(
        "../../algorithms/other-problems/get-factorial/js/get-factorial-test-cases"
    );
const { testCases: getNthFibonacciNumTestCases }
    = require(
        "../../algorithms/other-problems/get-nth-fibonacci-num/js/get-nth-fibonacci-num-test-cases"
    );
const { testCases: multiplyTestCases }
    = require("../../algorithms/other-problems/multiply/js/multiply-test-cases");
const { testCases: generateRandomPermutationTestCases }
    = require(
        "../../algorithms/other-problems/generate-random-permutation/js/generate-random-permutation-test-cases"
    );
const { testCases: breadthFirstSearchTestCases }
    = require(
        "../../algorithms/searching/breadth-first-search/js/breadth-first-search-test-cases"
    );
const { testCases: depthFirstSearchTestCases }
    = require(
        "../../algorithms/searching/depth-first-search/js/depth-first-search-test-cases"
    );
const { testCases: isSortedAscTestCases }
    = require(
        "../../algorithms/sorting/is-sorted-asc/js/is-sorted-asc-test-cases"
    );
const { testCases: quicksortTestCases }
    = require("../../algorithms/sorting/quicksort/js/quicksort-test-cases");
const { testCases: computeGreatestCommonDivisorTestCases }
    = require(
        "../../algorithms/other-problems/compute-greatest-common-divisor/js/compute-greatest-common-divisor-test-cases"
    );
const { testCases: reverseTestCases }
    = require("../../algorithms/other-problems/reverse/js/reverse-test-cases");
const { testCases: trialDivisionTestCases }
    = require(
        "../../algorithms/other-problems/trial-division/js/trial-division-test-cases"
    );
const { testCases: tohTestCases }
    = require("../../algorithms/other-problems/toh/js/toh-test-cases");

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
        reverseTestCases,
        trialDivisionTestCases,
        tohTestCases
    );

let areAllTestsPassed = true;

testCases.forEach(
    testCase => {
        const result
            = testCase.isTestPassedCallback(
                testCase.fn()
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