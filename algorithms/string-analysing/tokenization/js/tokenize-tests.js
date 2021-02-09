const { test } = require("../../../../test-runners/js/test");
const {
    tokenize,
    tokenize2
} = require("./tokenize");
const areArraysEqualModule
    = require("../../../other-problems/are-arrays-equal/js/are-arrays-equal");

test(
    res => {
        console.log(`tokenize: ${res}`);
    },
    [
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                tokenize("", 0, []),
                []
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                tokenize("(", 0, []),
                [0]
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                tokenize(")", 0, []),
                [1]
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                tokenize("()", 0, []),
                [0, 1]
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                tokenize("(,)", 0, []),
                [0, 2, 1]
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                tokenize("(a)", 0, []),
                [0, 3, 1]
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                tokenize("(a,)", 0, []),
                [0, 3, 2, 1]
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                tokenize("(,a)", 0, []),
                [0, 2, 3, 1]
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                tokenize("(a,b)", 0, []),
                [0, 3, 2, 3, 1]
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                tokenize("(abc,(def,ghi))", 0, []),
                [0, 3, 3, 3, 2, 0, 3, 3, 3, 2, 3, 3, 3, 1, 1]
            ),
        () => tokenize("#", 0, []) === undefined,
        () => tokenize("#(abc,(def,ghi))", 0, []) === undefined,
        () => tokenize("(abc,(#def,ghi))", 0, []) === undefined,
        () => tokenize("(abc,(def,ghi))#", 0, []) === undefined
    ]
);

test(
    res => {
        console.log(`tokenize2: ${res}`);
    },
    [
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                tokenize2(""),
                []
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                tokenize2("("),
                [0]
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                tokenize2(")"),
                [1]
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                tokenize2("()"),
                [0, 1]
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                tokenize2("(,)"),
                [0, 2, 1]
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                tokenize2("(a)"),
                [0, 3, 1]
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                tokenize2("(a,)"),
                [0, 3, 2, 1]
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                tokenize2("(,a)"),
                [0, 2, 3, 1]
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                tokenize2("(a,b)"),
                [0, 3, 2, 3, 1]
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                tokenize2("(abc,(def,ghi))"),
                [0, 3, 3, 3, 2, 0, 3, 3, 3, 2, 3, 3, 3, 1, 1]
            ),
        () =>
            tokenize2("#")
                .includes(undefined),
        () =>
            tokenize2("#(abc,(def,ghi))")
                .includes(undefined),
        () =>
            tokenize2("(abc,(#def,ghi))")
                .includes(undefined),
        () =>
            tokenize2("(abc,(def,ghi))#")
                .includes(undefined)
    ]
);