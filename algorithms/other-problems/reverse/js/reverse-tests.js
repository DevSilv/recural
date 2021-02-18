const { test } = require("../../../../test-runners/js/test");
const areArraysEqualModule
    = require("../../are-arrays-equal/js/are-arrays-equal");
const { generateIntegerRange }
    = require(
        "../../../../utils/generate-integer-range/js/generate-integer-range.js"
    );
const {
    reverse,
    reverse2
} = require("./reverse");

const mockArrs = [
    generateIntegerRange(1, 200)
];

test(
    res => {
        console.log(`reverse: ${res}`);
    },
    [
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                reverse([], 0),
                []
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                reverse([0, 1, 2, 3, 4], 0),
                [4, 3, 2, 1, 0]
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                mockArrs[0],
                reverse(
                    reverse(mockArrs[0], 0),
                    0
                )
            )
    ]
);

test(
    res => {
        console.log(`reverse2: ${res}`);
    },
    [
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                reverse2([], []),
                []
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                reverse2([0, 1, 2, 3, 4], []),
                [4, 3, 2, 1, 0]
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                mockArrs[0],
                reverse2(
                    reverse2(mockArrs[0], []),
                    []
                )
            )
    ]
);
