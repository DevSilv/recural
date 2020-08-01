const { test } = require("../../../../test-runner/test");
const { multiply } = require("./multiply");

test(
    res => {
        console.log(`multiply: ${res}`);
    },
    [
        () => multiply(10, 0) === 0,
        () => multiply(2, 3) === 6,
        () => multiply(-15, 2) === -30,
        () => multiply(2.5, 4) === 10,
        () => multiply(-1.5, 4) === -6
    ]
);