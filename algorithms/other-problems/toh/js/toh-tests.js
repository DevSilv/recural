const { test } = require("../../../../test-runners/js/test");
const {
    Peg,
    State,
    toh,
    toh2
} = require("./toh");
const areArraysEqualModule
    = require("../../are-arrays-equal/js/are-arrays-equal");

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