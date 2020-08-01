// const { TestCase } = require("../../../../unit-tests/js/test-case");
const { test } = require("../../../../test-runner/test");
const { getNthFibonacciNum } = require("./get-nth-fibonacci-num");

exports.testCases = [
    // new TestCase(
    //     "getNthFibonacciNum",
    //     () => getNthFibonacciNum(0),
    //     res => res === 0
    // ),
    // new TestCase(
    //     "getNthFibonacciNum",
    //     () => getNthFibonacciNum(1),
    //     res => res === 1
    // ),
    // new TestCase(
    //     "getNthFibonacciNum",
    //     () => getNthFibonacciNum(10),
    //     res => res === 55
    // )
];

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