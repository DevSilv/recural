// const { TestCase } = require("../../../../unit-tests/js/test-case");
const { test } = require("../../../../test-runner/test");
const {
    shallowAreArraysEqual,
    deepAreArraysEqual
} = require("./are-arrays-equal");

exports.testCases = [
    // new TestCase(
    //     "shallowAreArraysEqual",
    //     () => shallowAreArraysEqual([1, 2, 3], [1, 2, 3]),
    //     res => res === true
    // ),
    // new TestCase(
    //     "shallowAreArraysEqual",
    //     () => shallowAreArraysEqual([1, 2, 3], [3, 2, 1]),
    //     res => res === false
    // ),
    // new TestCase(
    //     "shallowAreArraysEqual",
    //     () => shallowAreArraysEqual([1], [1, 2, 3]),
    //     res => res === false
    // ),
    // new TestCase(
    //     "shallowAreArraysEqual",
    //     () => shallowAreArraysEqual([], [1, 2, 3]),
    //     res => res === false
    // ),
    // new TestCase(
    //     "deepAreArraysEqual",
    //     () => deepAreArraysEqual([1, 2, 3], [1, 2, 3]),
    //     res => res === true
    // ),
    // new TestCase(
    //     "deepAreArraysEqual",
    //     () =>
    //         deepAreArraysEqual(
    //             [
    //                 [1, 2],
    //                 [3]
    //             ],
    //             [
    //                 [1, 2],
    //                 [3]
    //             ]
    //         ),
    //     res => res === true
    // ),
    // new TestCase(
    //     "deepAreArraysEqual",
    //     () =>
    //         deepAreArraysEqual(
    //             [
    //                 [1, 2],
    //                 [3]
    //             ],
    //             [
    //                 [1, 2],
    //                 3
    //             ]
    //         ),
    //     res => res === false
    // ),
    // new TestCase(
    //     "deepAreArraysEqual",
    //     () =>
    //         deepAreArraysEqual(
    //             [
    //                 [1, 2],
    //                 [3]
    //             ],
    //             [
    //                 [1],
    //                 [2, 3]
    //             ]
    //         ),
    //     res => res === false
    // )
];

test(
    result => {
        console.log(`shallowAreArraysEqual: ${result}`);
    },
    [
        () => shallowAreArraysEqual([1, 2, 3], [1, 2, 3]) === true,
        () => shallowAreArraysEqual([1, 2, 3], [3, 2, 1]) === false,
        () => shallowAreArraysEqual([1], [1, 2, 3]) === false,
        () => shallowAreArraysEqual([], [1, 2, 3]) === false
    ]
);

test(
    result => {
        console.log(`deepAreArraysEqual: ${result}`);
    },
    [
        () => deepAreArraysEqual([1, 2, 3], [1, 2, 3]) === true,
        () =>
            deepAreArraysEqual(
                [
                    [1, 2],
                    [3]
                ],
                [
                    [1, 2],
                    [3]
                ]
            ) === true,
        () =>
            deepAreArraysEqual(
                [
                    [1, 2],
                    [3]
                ],
                [
                    [1, 2],
                    3
                ]
            ) === false,
        () =>
            deepAreArraysEqual(
                [
                    [1, 2],
                    [3]
                ],
                [
                    [1],
                    [2, 3]
                ]
            ) === false
    ]
);