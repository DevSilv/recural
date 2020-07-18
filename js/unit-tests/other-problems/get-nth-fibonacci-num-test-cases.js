const { TestCase } = require("../test-case");
const { getNthFibonacciNum }
	= require("../../algorithms/other-problems/get-nth-fibonacci-num");

exports.testCases = [
	new TestCase(
		"getNthFibonacciNum",
		getNthFibonacciNum,
		[0],
		res => res === 0
	),
	new TestCase(
		"getNthFibonacciNum",
		getNthFibonacciNum,
		[1],
		res => res === 1
	),
	new TestCase(
		"getNthFibonacciNum",
		getNthFibonacciNum,
		[10],
		res => res === 55
	)
];