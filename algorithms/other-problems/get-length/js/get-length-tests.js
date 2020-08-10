const { test } = require("../../../../test-runners/js/test");
const { getLength } = require("./get-length");

test(
    res => {
        console.log(`getLength: ${res}`);
    },
    [
        () => getLength([0, 1, 2, 3, 4], 0) === 5,
        () => getLength([], 0) === 0
    ]
);