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