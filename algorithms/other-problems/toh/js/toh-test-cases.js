// const { TestCase } = require("../../../../unit-tests/js/test-case");
const { test } = require("../../../../test-runner/test");
const {
    Peg,
    State,
    toh,
    toh2
} = require("./toh");
const areArraysEqualModule
    = require("../../are-arrays-equal/js/are-arrays-equal");

// const mockGlobalState1 = [
//     new Peg("stk", []),
//     new Peg("tmp", []),
//     new Peg("res", [])
// ];

// const mockGlobalState2 = [
//     new Peg("stk", [1, 2, 3]),
//     new Peg("tmp", []),
//     new Peg("res", [])
// ];

// const mockGlobalState3 = [
//     new Peg("stk", [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
//     new Peg("tmp", []),
//     new Peg("res", [])
// ];

// const mockArr1 = [];

// const mockArr2 = [1, 2, 3];

// const mockArr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

exports.testCases = [
    // new TestCase(
    //     "toh",
    //     () =>
    //         toh(
    //             mockGlobalState1[0].disksArr.length,
    //             mockGlobalState1[0],
    //             mockGlobalState1[1],
    //             mockGlobalState1[2]
    //         ),
    //     () =>
    //         areArraysEqualModule.deepAreArraysEqual(
    //             mockGlobalState1[0].disksArr,
    //             []
    //         ) && areArraysEqualModule.deepAreArraysEqual(
    //             mockGlobalState1[1].disksArr,
    //             []
    //         ) && areArraysEqualModule.deepAreArraysEqual(
    //             mockGlobalState1[2].disksArr,
    //             []
    //         )
    // ),
    // new TestCase(
    //     "toh",
    //     () =>
    //         toh(
    //             mockGlobalState2[0].disksArr.length,
    //             mockGlobalState2[0],
    //             mockGlobalState2[1],
    //             mockGlobalState2[2]
    //         ),
    //     () =>
    //         areArraysEqualModule.deepAreArraysEqual(
    //             mockGlobalState2[0].disksArr,
    //             []
    //         ) && areArraysEqualModule.deepAreArraysEqual(
    //             mockGlobalState2[1].disksArr,
    //             []
    //         ) && areArraysEqualModule.deepAreArraysEqual(
    //             mockGlobalState2[2].disksArr,
    //             [1, 2, 3]
    //         )
    // ),
    // new TestCase(
    //     "toh",
    //     () =>
    //         toh(
    //             mockGlobalState3[0].disksArr.length,
    //             mockGlobalState3[0],
    //             mockGlobalState3[1],
    //             mockGlobalState3[2]
    //         ),
    //     () =>
    //         areArraysEqualModule.deepAreArraysEqual(
    //             mockGlobalState3[0].disksArr,
    //             []
    //         ) && areArraysEqualModule.deepAreArraysEqual(
    //             mockGlobalState3[1].disksArr,
    //             []
    //         ) && areArraysEqualModule.deepAreArraysEqual(
    //             mockGlobalState3[2].disksArr,
    //             [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    //         )
    // ),
    // new TestCase(
    //     "toh2",
    //     () =>
    //         toh2(
    //             new State(
    //                 mockArr1.length,
    //                 0,
    //                 new Peg("stk", mockArr1),
    //                 new Peg("tmp", []),
    //                 new Peg("res", [])
    //             )
    //         ),
    //     result =>
    //         areArraysEqualModule.deepAreArraysEqual(
    //             result.stk.disksArr,
    //             []
    //         ) && areArraysEqualModule.deepAreArraysEqual(
    //             result.tmp.disksArr,
    //             []
    //         ) && areArraysEqualModule.deepAreArraysEqual(
    //             result.res.disksArr,
    //             mockArr1
    //         )
    // ),
    // new TestCase(
    //     "toh2",
    //     () =>
    //         toh2(
    //             new State(
    //                 mockArr2.length,
    //                 0,
    //                 new Peg("stk", mockArr2),
    //                 new Peg("tmp", []),
    //                 new Peg("res", [])
    //             )
    //         ),
    //     result =>
    //         areArraysEqualModule.deepAreArraysEqual(
    //             result.stk.disksArr,
    //             []
    //         ) && areArraysEqualModule.deepAreArraysEqual(
    //             result.tmp.disksArr,
    //             []
    //         ) && areArraysEqualModule.deepAreArraysEqual(
    //             result.res.disksArr,
    //             mockArr2
    //         )
    // ),
    // new TestCase(
    //     "toh2",
    //     () =>
    //         toh2(
    //             new State(
    //                 mockArr3.length,
    //                 0,
    //                 new Peg("stk", mockArr3),
    //                 new Peg("tmp", []),
    //                 new Peg("res", [])
    //             )
    //         ),
    //     result =>
    //         areArraysEqualModule.deepAreArraysEqual(
    //             result.stk.disksArr,
    //             []
    //         ) && areArraysEqualModule.deepAreArraysEqual(
    //             result.tmp.disksArr,
    //             []
    //         ) && areArraysEqualModule.deepAreArraysEqual(
    //             result.res.disksArr,
    //             mockArr3
    //         )
    // )
];

test(
    res => {
        console.log(`toh: ${res}`);
    },
    [
        () => {
            const mockGlobalState = [
                new Peg("stk", []),
                new Peg("tmp", []),
                new Peg("res", [])
            ];

            toh(
                mockGlobalState[0].disksArr.length,
                mockGlobalState[0],
                mockGlobalState[1],
                mockGlobalState[2]
            );

            return areArraysEqualModule.deepAreArraysEqual(
                mockGlobalState[0].disksArr,
                []
            ) && areArraysEqualModule.deepAreArraysEqual(
                mockGlobalState[1].disksArr,
                []
            ) && areArraysEqualModule.deepAreArraysEqual(
                mockGlobalState[2].disksArr,
                []
            );
        },
        () => {
            const mockGlobalState = [
                new Peg("stk", [1, 2, 3]),
                new Peg("tmp", []),
                new Peg("res", [])
            ];

            toh(
                mockGlobalState[0].disksArr.length,
                mockGlobalState[0],
                mockGlobalState[1],
                mockGlobalState[2]
            );

            return areArraysEqualModule.deepAreArraysEqual(
                mockGlobalState[0].disksArr,
                []
            ) && areArraysEqualModule.deepAreArraysEqual(
                mockGlobalState[1].disksArr,
                []
            ) && areArraysEqualModule.deepAreArraysEqual(
                mockGlobalState[2].disksArr,
                [1, 2, 3]
            );
        },
        () => {
            const mockGlobalState = [
                new Peg("stk", [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
                new Peg("tmp", []),
                new Peg("res", [])
            ];

            toh(
                mockGlobalState[0].disksArr.length,
                mockGlobalState[0],
                mockGlobalState[1],
                mockGlobalState[2]
            );

            return areArraysEqualModule.deepAreArraysEqual(
                mockGlobalState[0].disksArr,
                []
            ) && areArraysEqualModule.deepAreArraysEqual(
                mockGlobalState[1].disksArr,
                []
            ) && areArraysEqualModule.deepAreArraysEqual(
                mockGlobalState[2].disksArr,
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            );
        }
    ]
);

test(
    res => {
        console.log(`toh2: ${res}`);
    },
    [
        () => {
            const mockArr = [];

            const result
                = toh2(
                    new State(
                        mockArr.length,
                        0,
                        new Peg("stk", mockArr),
                        new Peg("tmp", []),
                        new Peg("res", [])
                    )
                );

            return areArraysEqualModule.deepAreArraysEqual(
                result.stk.disksArr,
                []
            ) && areArraysEqualModule.deepAreArraysEqual(
                result.tmp.disksArr,
                []
            ) && areArraysEqualModule.deepAreArraysEqual(
                result.res.disksArr,
                mockArr
            );
        },
        () => {
            const mockArr = [1, 2, 3];

            const result
                = toh2(
                    new State(
                        mockArr.length,
                        0,
                        new Peg("stk", mockArr),
                        new Peg("tmp", []),
                        new Peg("res", [])
                    )
                );

            return areArraysEqualModule.deepAreArraysEqual(
                result.stk.disksArr,
                []
            ) && areArraysEqualModule.deepAreArraysEqual(
                result.tmp.disksArr,
                []
            ) && areArraysEqualModule.deepAreArraysEqual(
                result.res.disksArr,
                mockArr
            );
        },
        () => {
            const mockArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

            const result
                = toh2(
                    new State(
                        mockArr.length,
                        0,
                        new Peg("stk", mockArr),
                        new Peg("tmp", []),
                        new Peg("res", [])
                    )
                );

            return areArraysEqualModule.deepAreArraysEqual(
                result.stk.disksArr,
                []
            ) && areArraysEqualModule.deepAreArraysEqual(
                result.tmp.disksArr,
                []
            ) && areArraysEqualModule.deepAreArraysEqual(
                result.res.disksArr,
                mockArr
            );
        }
    ]
);