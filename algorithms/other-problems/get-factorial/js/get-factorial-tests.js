const { test } = require("../../../../test-runners/js/test");
const { getFactorial } = require("./get-factorial");

test(
    res => {
        console.log(`getFactorial: ${res}`);
    },
    [
        () => getFactorial(0) === 1,
        () => getFactorial(5) === 120,
        () => getFactorial(10) === 3628800
    ]
);