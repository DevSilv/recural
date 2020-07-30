const { TestCase } = require("../../../../unit-tests/js/test-case");
const { sentinelFindFirst } = require("./sentinel-find-first");

exports.testCases = [
    new TestCase(
        "sentinelFindFirst",
        () => sentinelFindFirst([0, 1, 2, 3, 4, 2], elem => elem % 2 === 0),
        res => res === 0
    ),
    new TestCase(
        "sentinelFindFirst",
        () => sentinelFindFirst([1, 2, 3, 4, 5], elem => elem % 5 === 0),
        res => res === undefined
    ),
    new TestCase(
        "sentinelFindFirst",
        () => sentinelFindFirst([5], elem => elem % 5 === 0),
        res => res === undefined
    )
];