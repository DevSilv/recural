const { test } = require("../../../../test-runner/test");
const { getNthFibonacciNum } = require("./get-nth-fibonacci-num");

test(
    res => {
        console.log(`getNthFibonacciNum: ${res}`);
    },
    [
        () => getNthFibonacciNum(0) === 0,
        () => getNthFibonacciNum(1) === 1,
        () => getNthFibonacciNum(10) === 55
    ]
);