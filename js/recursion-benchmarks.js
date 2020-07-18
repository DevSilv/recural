const process = require("process");

const {
	shallowAreArraysEqual,
	deepAreArraysEqual
} = require("./algorithms/other-problems/are-arrays-equal");
const { split } = require("./algorithms/other-problems/split");
const { slice } = require("./algorithms/other-problems/slice");
const { findFirst } = require("./algorithms/searching/find-first");
const { findAll } = require("./algorithms/searching/find-all");
const { reduce } = require("./algorithms/other-problems/reduce");
const { map } = require("./algorithms/other-problems/map");
const { getLength } = require("./algorithms/other-problems/get-length");
const { countIf } = require("./algorithms/other-problems/count-if");
const { splitIf } = require("./algorithms/other-problems/split-if");
const { join } = require("./algorithms/other-problems/join");
const { binarySearch } = require("./algorithms/searching/binary-search");
const { sentinelFindFirst }
	= require("./algorithms/searching/sentinel-find-first");
const { getFactorial } = require("./algorithms/other-problems/get-factorial");

/**
 * @param {number} start
 * @param {number} end
 * @returns {number[]}
 */
const getIntegerRange
	= (start, end) =>
		Array
			.from(
				new Array(end + 1)
					.keys()
			)
			.filter(elem => elem >= start);

/**
 * @callback GetMeanExecTimeFn
 * @returns {number[]}
 */

/**
 * @param {GetMeanExecTimeFn} fn
 * @param {number} count
 * @returns {number[]}
 */
const getMeanExecTime
	= (fn, count, meanS, meanNs, counter) =>
		counter === count
			? [
				meanS,
				meanNs
			]
			: (() => {
				const times = fn();

				return getMeanExecTime(
					fn,
					count,
					(meanS + times[0]) / 2,
					(meanNs + times[1]) / 2,
					counter + 1
				);
			})();

const benchmark
	= (benchmarkedFnName, fn, repeatCount) => {
		const getExecTime
			= () => {
				const start = process.hrtime();
				fn();
				const end = process.hrtime(start);

				return end;
			};
		const meanExecTime
			= getMeanExecTime(getExecTime, repeatCount, 0.0, 0.0, 0);

		return {
			outputResult:
				() => {
					process.stdout.write(`${benchmarkedFnName}\n`);
					process.stdout.write(`${meanExecTime[0]}s\n`);
					process.stdout.write(`${meanExecTime[1] / 1000000}ms\n\n`);
				}
		};
	};

const integerRange = getIntegerRange(1000, 2000);

benchmark(
	"shallowAreArraysEqual",
	() => shallowAreArraysEqual(integerRange, integerRange),
	100
).outputResult();

benchmark(
	"deepAreArraysEqual",
	() => deepAreArraysEqual(integerRange, integerRange),
	100
).outputResult();

benchmark(
	"split",
	() => split(integerRange, 100, []),
	100
).outputResult();

benchmark(
	"slice",
	() => slice(integerRange, 400, 600, [], 0),
	100
).outputResult();

benchmark(
	"findFirst",
	() => findFirst(integerRange, elem => elem > 1500),
	100
).outputResult();

benchmark(
	"findAll",
	() => findAll(integerRange, elem => elem > 1500, []),
	100
).outputResult();

benchmark(
	"reduce",
	() => reduce(integerRange, (res, cur) => res / cur, 1.0),
	100
).outputResult();

benchmark(
	"map",
	() => map(integerRange, elem => elem ** 2, []),
	100
);

benchmark(
	"getLength",
	() => getLength(integerRange, 0),
	100
);

benchmark(
	"countIf",
	() => countIf(integerRange, elem => elem % 3 === 2, 0),
	100
).outputResult();

benchmark(
	"splitIf",
	() => splitIf(integerRange, elem => elem % 30 === 17, [], []),
	100
).outputResult();

benchmark(
	"join",
	() => join(integerRange, integerRange),
	100
).outputResult();

benchmark(
	"binarySearch",
	() => binarySearch(integerRange, 1500, 0, integerRange.length - 1),
	100
).outputResult();

benchmark(
	"sentinelFindFirst",
	() => sentinelFindFirst(integerRange.concat([1500]), elem => elem === 1500),
	100
).outputResult();

benchmark(
	"getFactorial",
	() => getFactorial(integerRange[Math.floor(integerRange.length / 2)]),
	100
).outputResult();