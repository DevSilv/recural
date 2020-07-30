const benchmarkUtilsModule = require("../../../../benchmarks/js/utils");

/**
 * @param {number} num
 * @param {number} n
 * @returns {boolean}
 */
const isMultiple = (num, n) => num % n === 0;

// =============================================================================

/**
 * @param {number} num An integer >= 0
 * @param {number} cur Always 2
 * @param {number[]} res Always an empty array
 * @param {number[]} notApplying Always an empty array
 * @param {number} remainderOperCount Always 0
 * @param {number} recInvokCount Always 0
 * @returns {[number, number, number[]]}
 */
exports.trialDivision
    = (num, cur, res, notApplying, remainderOperCount, recInvokCount, debug) =>
        cur > num / 2
            ? [
                recInvokCount,
                remainderOperCount,
                res
            ]
            : res.find(elem => isMultiple(cur, elem))
                || notApplying.find(elem => isMultiple(cur, elem))
                ? (() => {
                    if (debug) {
                        console.debug(
                            `${cur} does not apply `
                            + `(res: [${res}], notApplying: [${notApplying}])`
                        );
                    }

                    return exports.trialDivision(
                        num,
                        cur + 1,
                        res,
                        notApplying,
                        remainderOperCount,
                        recInvokCount + 1,
                        debug
                    );
                })()
                : num % cur === 0
                    ? (() => {
                        if (debug) {
                            console.debug(
                                `${cur} applies `
                                + `(${num} % ${cur} is ${num % cur})`
                            );
                        }

                        return exports.trialDivision(
                            num,
                            cur + 1,
                            res.concat([cur]),
                            notApplying,
                            remainderOperCount + 1,
                            recInvokCount + 1,
                            debug
                        );
                    })()
                    : (() => {
                        if (debug) {
                            console.debug(
                                `${cur} does not apply `
                                + `(${num} % ${cur} is ${num % cur})`
                            );
                        }

                        return exports.trialDivision(
                            num,
                            cur + 1,
                            res,
                            notApplying.concat([cur]),
                            remainderOperCount + 1,
                            recInvokCount + 1,
                            debug
                        );
                    })();

// =============================================================================

/**
 * @param {number} num An integer (>= 0 or not?)
 * @param {number} cur Always 2
 * @param {number[]} res Always an empty array
 * @param {number[]} notApplying Always an empty array
 * @returns {number[]}
 */
exports.trialDivision2
    = (num, cur, res, notApplying) =>
        num < 2
            ? res
            : res.find(elem => isMultiple(cur, elem) && elem !== cur)
                || notApplying.find(elem => isMultiple(cur, elem))
                ? exports.trialDivision2(num, cur + 1, res, notApplying)
                : num % cur === 0
                    ? exports.trialDivision2(
                        num / cur, cur, res.concat([cur]), notApplying
                    )
                    : exports.trialDivision2(
                        num, cur + 1, res, notApplying.concat([cur])
                    );