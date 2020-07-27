const { TestCase } = require("../../../../unit-tests/js/test-case");
const { depthFirstSearch } = require("./depth-first-search");

const simpleMockGraphWithoutCycles
	= new Map(
		[
			[0, [1, 2]],
			[1, [3]],
			[2, [3]],
			[3, []]
		]
	);

const simpleMockGraphWithCycles
	= new Map(
		[
			[0, [1, 2]],
			[1, [0, 3]],
			[2, [0, 3]],
			[3, [1, 2]]
		]
	);

const complexMockGraphWithCycles
	= new Map(
		[
			[0, [0, 1, 2, 3, 4, 5, 6]],
			[1, [0, 1, 2, 3, 4, 5, 6]],
			[2, [0, 2, 3, 4, 5, 6]],
			[3, [0, 3, 4, 5, 6]],
			[4, [0, 4, 5, 6]],
			[5, [0, 5, 6]],
			[6, [0, 6]]
		]
	);

const initialVt = 0;

exports.testCases = [
	new TestCase(
		"depthFirstSearch",
		depthFirstSearch,
		[
			vt => vt === 0,
			vt => simpleMockGraphWithoutCycles.get(vt).filter(v => v !== vt),
			initialVt,
			[],
			[]
		],
		res => res === 0
	),
	new TestCase(
		"depthFirstSearch",
		depthFirstSearch,
		[
			vt => vt === 1,
			vt => simpleMockGraphWithCycles.get(vt).filter(v => v !== vt),
			initialVt,
			[],
			[]
		],
		res => res === 1
	),
	new TestCase(
		"depthFirstSearch",
		depthFirstSearch,
		[
			vt => vt === 2,
			vt => complexMockGraphWithCycles.get(vt).filter(v => v !== vt),
			initialVt,
			[],
			[]
		],
		res => res === 2
	),
	new TestCase(
		"depthFirstSearch",
		depthFirstSearch,
		[
			vt => vt === 6,
			vt => complexMockGraphWithCycles.get(vt).filter(v => v !== vt),
			initialVt,
			[],
			[]
		],
		res => res === 6
	),
	new TestCase(
		"depthFirstSearch",
		depthFirstSearch,
		[
			vt => vt === 7,
			vt => complexMockGraphWithCycles.get(vt).filter(v => v !== vt),
			initialVt,
			[],
			[]
		],
		res => res === undefined
	)
];