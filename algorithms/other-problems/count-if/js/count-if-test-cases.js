// const { TestCase } = require("../../../../unit-tests/js/test-case");
const { test } = require("../../../../test-runner/test");
const { countIf } = require("./count-if");

exports.testCases = [
    // new TestCase(
    //     "countIf",
    //     () => countIf([0, 1, 2, 3, 4], elem => elem % 2 === 0, 0),
    //     res => res === 3
    // ),
    // new TestCase(
    //     "countIf",
    //     () => countIf([], elem => elem % 2 === 0, 0),
    //     res => res === 0
    // ),
    // new TestCase(
    //     "countIf",
    //     () =>
    //         countIf(
    //             [n => n * 2, n => n * 3, n => n * 4],
    //             fn => fn(2) > 5,
    //             0
    //         ),
    //     res => res === 2
    // )
];

test(
    res => {
        console.log(`countIf: ${res}`);
    },
    [
        () => countIf([0, 1, 2, 3, 4], elem => elem % 2 === 0, 0) === 3,
        () => countIf([], elem => elem % 2 === 0, 0) === 0,
        () =>
            countIf(
                [n => n * 2, n => n * 3, n => n * 4],
                fn => fn(2) > 5,
                0
            ) === 2
    ]
);