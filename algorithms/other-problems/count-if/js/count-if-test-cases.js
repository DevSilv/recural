const { test } = require("../../../../test-runner/test");
const { countIf } = require("./count-if");

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