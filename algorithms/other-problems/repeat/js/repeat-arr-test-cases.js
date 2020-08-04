const { test } = require("../../../../test-runners/js/test");
const { repeatArr } = require("./repeat-arr");
const areArraysEqualModule
    = require("../../are-arrays-equal/js/are-arrays-equal");

test(
    res => {
        console.log(`repeatArr: ${res}`);
    },
    [
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                repeatArr([], 0, []),
                []
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                repeatArr([], 5, []),
                [[], [], [], [], []]
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                repeatArr(["A", "B", "C"], 0, []),
                []
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                repeatArr(["A", "B", "C"], 5, []),
                [
                    ["A", "B", "C"],
                    ["A", "B", "C"],
                    ["A", "B", "C"],
                    ["A", "B", "C"],
                    ["A", "B", "C"]
                ]
            ),
    ]
);