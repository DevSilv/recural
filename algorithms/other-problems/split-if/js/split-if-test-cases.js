const { TestCase } = require("../../../../unit-tests/js/test-case");
const { deepAreArraysEqual }
    = require("../../are-arrays-equal/js/are-arrays-equal");
const { splitIf } = require("./split-if");

exports.testCases = [
    new TestCase(
        "splitIf",
        () => splitIf([0, 1, 2, 3, 4], elem => elem === 2, [], []),
        res =>
            deepAreArraysEqual(
                res,
                [
                    [0, 1],
                    [2, 3, 4]
                ]
            )
    ),
    new TestCase(
        "splitIf",
        () => splitIf(["A", "B", "C"], elem => elem === "C", [], []),
        res =>
            deepAreArraysEqual(
                res,
                [
                    ["A", "B"],
                    ["C"]
                ]
            )
    ),
    new TestCase(
        "splitIf",
        () => splitIf([false, false, false], elem => elem === true, [], []),
        res =>
            deepAreArraysEqual(
                res,
                [
                    [false, false, false]
                ]
            )
    )
];