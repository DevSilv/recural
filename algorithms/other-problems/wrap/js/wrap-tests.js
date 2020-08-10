const { test } = require("../../../../test-runners/js/test");
const {
    wrap,
    wrap2
} = require("./wrap");
const areArraysEqualModule
    = require("../../are-arrays-equal/js/are-arrays-equal");

test(
    res => {
        console.log(`wrap: ${res}`);
    },
    [
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                wrap([], "", 0, 0, []),
                []
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                wrap(["A"], "", 0, 0, []),
                ["A"]
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                wrap([], "#", 0, 0, []),
                []
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                wrap([], "", 5, 0, []),
                []
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                wrap(["A"], "#", 0, 0, []),
                ["A"]
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                wrap(["A"], "", 2, 0, []),
                [
                    "",
                    "",
                    "A",
                    "",
                    ""
                ]
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                wrap(["A"], "#", 2, 0, []),
                [
                    "#####",
                    "#####",
                    "##A##",
                    "#####",
                    "#####"
                ]
            )
    ]
);

test(
    res => {
        console.log(`wrap2: ${res}`);
    },
    [
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                wrap2([], "", 0),
                []
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                wrap2(["A"], "", 0),
                ["A"]
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                wrap2([], "#", 0),
                []
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                wrap2([], "", 5),
                []
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                wrap2(["A"], "#", 0),
                ["A"]
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                wrap2(["A"], "", 2),
                [
                    "",
                    "",
                    "A",
                    "",
                    ""
                ]
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                wrap2(["A"], "#", 2),
                [
                    "#####",
                    "#####",
                    "##A##",
                    "#####",
                    "#####"
                ]
            )
    ]
);