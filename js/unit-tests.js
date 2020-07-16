const process = require("process");

const {
	shallowAreArraysEqual,
	deepAreArraysEqual
} = require("./algorithms/arrays/are-arrays-equal");
const { split } = require("./algorithms/arrays/split");
const { slice } = require("./algorithms/arrays/slice");
const { findFirst } = require("./algorithms/arrays/find-first");
const { findAll } = require("./algorithms/arrays/find-all");
const { reduce } = require("./algorithms/arrays/reduce");
const { map } = require("./algorithms/arrays/map");
const { getLength } = require("./algorithms/arrays/get-length");
const { countIf } = require("./algorithms/arrays/count-if");
const { splitIf } = require("./algorithms/arrays/split-if");
const { join } = require("./algorithms/arrays/join");

// /**
//  * @callback TestFn
//  * @param {...any} args
//  * @returns {any}
//  */

// /**
//  * @callback IsPassedFn
//  * @param {any} actualOutput
//  * @returns {boolean}
//  */

// /**
//  * @typedef {object} TestObj
//  * @property {Function} outputResult
//  */

// /**
//  * @template T
//  * @param {string} testedFnName
//  * @param {TestFn} fn
//  * @param {T[]} input
//  * @param {IsPassedFn} isPassed
//  * @returns {object}
//  */
// const test
// 	= (testedFnName, fn, input, isPassed) => {
// 		const testResult
// 			= isPassed(
// 				fn.apply(undefined, input)
// 			);

// 		return {
// 			outputResult:
// 				() => {
// 					process.stdout.write(
// 						`${testedFnName}: `
// 						+ `test ${testResult ? "PASSED" : "FAILED"}\n`
// 					);
// 				}
// 		};
// 	};

process.stdout.write("Testing shallowAreArraysEqual... ")
	&& shallowAreArraysEqual([1, 2, 3], [1, 2, 3]) === true
	&& shallowAreArraysEqual([1, 2, 3], [3, 2, 1]) === false
	&& shallowAreArraysEqual([1], [1, 2, 3]) === false
	&& shallowAreArraysEqual([], [1, 2, 3]) === false
	&& process.stdout.write("all tests PASSED.\n")
	|| process.stdout.write("some tests FAILED.\n");

process.stdout.write("Testing deepAreArraysEqual... ")
	&& deepAreArraysEqual([1, 2, 3], [1, 2, 3]) === true
	&& deepAreArraysEqual([[1, 2], [3]], [[1, 2], [3]]) === true
	&& deepAreArraysEqual([[1, 2], [3]], [[1, 2], 3]) === false
	&& deepAreArraysEqual([[1, 2], [3]], [[1], [2, 3]]) === false
	&& process.stdout.write("all tests PASSED.\n")
	|| process.stdout.write("some tests FAILED.\n");

process.stdout.write("Testing split... ")
	&& deepAreArraysEqual(
		split([0, 1, 2, 3, 4], 1, []),
		[[0], [1], [2], [3], [4]]
	)
	&& deepAreArraysEqual(
		split([0, 1, 2, 3, 4], 2, []),
		[[0, 1], [2, 3], [4]]
	)
	&& deepAreArraysEqual(
		split([0, 1, 2, 3, 4], 20, []),
		[[0, 1, 2, 3, 4]]
	)
	&& process.stdout.write("all tests PASSED.\n")
	|| process.stdout.write("some tests FAILED.\n");

process.stdout.write("Testing slice... ")
	&& deepAreArraysEqual(
		slice([0, 1, 2, 3, 4], 2, 4, [], 0),
		[2, 3]
	)
	&& deepAreArraysEqual(
		slice([0, 1, 2, 3, 4], 0, 0, [], 0),
		[]
	)
	&& process.stdout.write("all tests PASSED.\n")
	|| process.stdout.write("some tests FAILED.\n");

process.stdout.write("Testing findFirst... ")
	&& findFirst([0, 1, 2, 3, 4], elem => elem % 2 === 0) === 0
	&& findFirst([1, 2, 3, 4], elem => elem % 5 === 0) === undefined
	&& findFirst([], elem => elem % 5 === 0) === undefined
	&& process.stdout.write("all tests PASSED.\n")
	|| process.stdout.write("some tests FAILED.\n");

process.stdout.write("Testing findAll... ")
	&& deepAreArraysEqual(
		findAll([0, 1, 2, 3, 4], elem => elem % 2 === 0, []),
		[0, 2, 4]
	)
	&& deepAreArraysEqual(
		findAll([0, 1, 2, 3, 4], elem => elem === elem, []),
		[0, 1, 2, 3, 4]
	)
	&& deepAreArraysEqual(
		findAll([1, 2, 3, 4], elem => elem % 5 === 0, []),
		[]
	)
	&& process.stdout.write("all tests PASSED.\n")
	|| process.stdout.write("some tests FAILED.\n");

process.stdout.write("Testing reduce... ")
	&& reduce([0, 1, 2, 3, 4], (res, cur) => res + cur, 0) === 0 + 1 + 2 + 3 + 4
	&& reduce([0, 1, 2, 3, 4], (res, cur) => res - cur, 0) === 0 - 1 - 2 - 3 - 4
	&& reduce([1, 2, 3, 4], (res, cur) => res * cur, 1) === 1 * 2 * 3 * 4
	&& reduce([1, 2, 3, 4], (res, cur) => res / cur, 1) === 1 / 2 / 3 / 4
	&& reduce(
		[2, 1, -2, -1],
		(res, cur) => cur < res ? cur : res,
		Number.POSITIVE_INFINITY
	) === -2
	&& reduce(
		["A", "B", "C", "D", "E"], (res, cur) => res + cur, ""
	) === "ABCDE"
	&& deepAreArraysEqual(
		reduce([[0], [1], [2], [3], [4]], (res, cur) => res.concat(cur), []),
		[0, 1, 2, 3, 4]
	)
	&& process.stdout.write("all tests PASSED.\n")
	|| process.stdout.write("some tests FAILED.\n");

process.stdout.write("Testing map... ")
	&& deepAreArraysEqual(
		map([0, 1, 2, 3, 4], elem => 2 * elem, []),
		[0, 2, 4, 6, 8]
	)
	&& deepAreArraysEqual(
		map(["A", "B", "C", "D", "E"], elem => "(" + elem + ")", []),
		["(A)", "(B)", "(C)", "(D)", "(E)"]
	)
	&& deepAreArraysEqual(
		map([false, true, false], elem => !elem, []),
		[true, false, true]
	)
	&& process.stdout.write("all tests PASSED.\n")
	|| process.stdout.write("some tests FAILED.\n");

process.stdout.write("Testing getLength... ")
	&& getLength([0, 1, 2, 3, 4], 0) === 5
	&& getLength([], 0) === 0
	&& process.stdout.write("all tests PASSED.\n")
	|| process.stdout.write("some tests FAILED.\n");

process.stdout.write("Testing countIf... ")
	&& countIf([0, 1, 2, 3, 4], elem => elem % 2 === 0, 0) === 3
	&& countIf([], elem => elem % 2 === 0, 0) === 0
	&& countIf([n => n * 2, n => n * 3, n => n * 4], fn => fn(2) > 5, 0) === 2
	&& process.stdout.write("all tests PASSED.\n")
	|| process.stdout.write("some tests FAILED.\n");

process.stdout.write("Testing splitIf... ")
	&& deepAreArraysEqual(
		splitIf([0, 1, 2, 3, 4], elem => elem === 2, [], []),
		[[0, 1], [2, 3, 4]]
	)
	&& deepAreArraysEqual(
		splitIf(["A", "B", "C"], elem => elem === "C", [], []),
		[["A", "B"], ["C"]]
	)
	&& deepAreArraysEqual(
		splitIf([false, false, false], elem => elem === true, [], []),
		[[false, false, false]]
	)
	&& process.stdout.write("all tests PASSED.\n")
	|| process.stdout.write("some tests FAILED.\n");

process.stdout.write("Testing join... ")
	&& deepAreArraysEqual(
		join([0, 1, 2], [3, 4]),
		[0, 1, 2, 3, 4]
	)
	&& deepAreArraysEqual(
		join([], []),
		[]
	)
	&& deepAreArraysEqual(
		join([[3], [4]], [0, 1, 2]),
		[[3], [4], 0, 1, 2]
	)
	&& process.stdout.write("all tests PASSED.\n")
	|| process.stdout.write("some tests FAILED.\n");