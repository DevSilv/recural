const { TestCase } = require("../../../../unit-tests/js/test-case");
const {
	trialDivision,
	trialDivision2
} = require("./trial-division");
const areArraysEqualModule
	= require("../../are-arrays-equal/js/are-arrays-equal");

exports.testCases = [
	new TestCase(
		"trialDivision",
		trialDivision,
		[
			0,
			2,
			[],
			[],
			0,
			0,
			false
		],
		res => areArraysEqualModule.deepAreArraysEqual(res[2], [])
	),
	new TestCase(
		"trialDivision",
		trialDivision,
		[
			1,
			2,
			[],
			[],
			0,
			0,
			false
		],
		res => areArraysEqualModule.deepAreArraysEqual(res[2], [])
	),
	new TestCase(
		"trialDivision",
		trialDivision,
		[
			10,
			2,
			[],
			[],
			0,
			0,
			false
		],
		res => areArraysEqualModule.deepAreArraysEqual(res[2], [2, 5])
	),
	new TestCase(
		"trialDivision",
		trialDivision,
		[
			100,
			2,
			[],
			[],
			0,
			0,
			false
		],
		res => areArraysEqualModule.deepAreArraysEqual(res[2], [2, 5])
	),
	new TestCase(
		"trialDivision",
		trialDivision,
		[
			101,
			2,
			[],
			[],
			0,
			0,
			false
		],
		res => areArraysEqualModule.deepAreArraysEqual(res[2], [])
	),
	new TestCase(
		"trialDivision",
		trialDivision,
		[
			102,
			2,
			[],
			[],
			0,
			0,
			false
		],
		res => areArraysEqualModule.deepAreArraysEqual(res[2], [2, 3, 17])
	),
	new TestCase(
		"trialDivision",
		trialDivision,
		[
			103,
			2,
			[],
			[],
			0,
			0,
			false
		],
		res => areArraysEqualModule.deepAreArraysEqual(res[2], [])
	),
	new TestCase(
		"trialDivision",
		trialDivision,
		[
			104,
			2,
			[],
			[],
			0,
			0,
			false
		],
		res => areArraysEqualModule.deepAreArraysEqual(res[2], [2, 13])
	),
	new TestCase(
		"trialDivision",
		trialDivision,
		[
			105,
			2,
			[],
			[],
			0,
			0,
			false
		],
		res => areArraysEqualModule.deepAreArraysEqual(res[2], [3, 5, 7])
	),
	new TestCase(
		"trialDivision",
		trialDivision,
		[
			106,
			2,
			[],
			[],
			0,
			0,
			false
		],
		res => areArraysEqualModule.deepAreArraysEqual(res[2], [2, 53])
	),
	new TestCase(
		"trialDivision",
		trialDivision,
		[
			107,
			2,
			[],
			[],
			0,
			0,
			false
		],
		res => areArraysEqualModule.deepAreArraysEqual(res[2], [])
	),
	new TestCase(
		"trialDivision",
		trialDivision,
		[
			108,
			2,
			[],
			[],
			0,
			0,
			false
		],
		res => areArraysEqualModule.deepAreArraysEqual(res[2], [2, 3])
	),
	new TestCase(
		"trialDivision",
		trialDivision,
		[
			109,
			2,
			[],
			[],
			0,
			0,
			false
		],
		res => areArraysEqualModule.deepAreArraysEqual(res[2], [])
	),
	new TestCase(
		"trialDivision",
		trialDivision,
		[
			110,
			2,
			[],
			[],
			0,
			0,
			false
		],
		res => areArraysEqualModule.deepAreArraysEqual(res[2], [2, 5, 11])
	),
	new TestCase(
		"trialDivision",
		trialDivision,
		[
			111,
			2,
			[],
			[],
			0,
			0,
			false
		],
		res => areArraysEqualModule.deepAreArraysEqual(res[2], [3, 37])
	),
	new TestCase(
		"trialDivision",
		trialDivision,
		[
			112,
			2,
			[],
			[],
			0,
			0,
			false
		],
		res => areArraysEqualModule.deepAreArraysEqual(res[2], [2, 7])
	),
	new TestCase(
		"trialDivision",
		trialDivision,
		[
			113,
			2,
			[],
			[],
			0,
			0,
			false
		],
		res => areArraysEqualModule.deepAreArraysEqual(res[2], [])
	),
	new TestCase(
		"trialDivision",
		trialDivision,
		[
			114,
			2,
			[],
			[],
			0,
			0,
			false
		],
		res => areArraysEqualModule.deepAreArraysEqual(res[2], [2, 3, 19])
	),
	new TestCase(
		"trialDivision",
		trialDivision,
		[
			115,
			2,
			[],
			[],
			0,
			0,
			false
		],
		res => areArraysEqualModule.deepAreArraysEqual(res[2], [5, 23])
	),
	new TestCase(
		"trialDivision",
		trialDivision,
		[
			116,
			2,
			[],
			[],
			0,
			0,
			false
		],
		res => areArraysEqualModule.deepAreArraysEqual(res[2], [2, 29])
	),
	new TestCase(
		"trialDivision",
		trialDivision,
		[
			117,
			2,
			[],
			[],
			0,
			0,
			false
		],
		res => areArraysEqualModule.deepAreArraysEqual(res[2], [3, 13])
	),
	new TestCase(
		"trialDivision",
		trialDivision,
		[
			118,
			2,
			[],
			[],
			0,
			0,
			false
		],
		res => areArraysEqualModule.deepAreArraysEqual(res[2], [2, 59])
	),
	new TestCase(
		"trialDivision",
		trialDivision,
		[
			119,
			2,
			[],
			[],
			0,
			0,
			false
		],
		res => areArraysEqualModule.deepAreArraysEqual(res[2], [7, 17])
	),
	new TestCase(
		"trialDivision",
		trialDivision,
		[
			120,
			2,
			[],
			[],
			0,
			0,
			false
		],
		res => areArraysEqualModule.deepAreArraysEqual(res[2], [2, 3, 5])
	),

	// =========================================================================

	new TestCase(
		"trialDivision2",
		trialDivision2,
		[
			0,
			2,
			[],
			[]
		],
		res => areArraysEqualModule.deepAreArraysEqual(res, [])
	),
	new TestCase(
		"trialDivision2",
		trialDivision2,
		[
			1,
			2,
			[],
			[]
		],
		res => areArraysEqualModule.deepAreArraysEqual(res, [])
	),
	new TestCase(
		"trialDivision2",
		trialDivision2,
		[
			10,
			2,
			[],
			[]
		],
		res => areArraysEqualModule.deepAreArraysEqual(res, [2, 5])
	),
	new TestCase(
		"trialDivision2",
		trialDivision2,
		[
			100,
			2,
			[],
			[]
		],
		res => areArraysEqualModule.deepAreArraysEqual(res, [2, 2, 5, 5])
	),
	new TestCase(
		"trialDivision2",
		trialDivision2,
		[
			101,
			2,
			[],
			[]
		],
		res => areArraysEqualModule.deepAreArraysEqual(res, [101])
	),
	new TestCase(
		"trialDivision2",
		trialDivision2,
		[
			102,
			2,
			[],
			[]
		],
		res => areArraysEqualModule.deepAreArraysEqual(res, [2, 3, 17])
	),
	new TestCase(
		"trialDivision2",
		trialDivision2,
		[
			103,
			2,
			[],
			[]
		],
		res => areArraysEqualModule.deepAreArraysEqual(res, [103])
	),
	new TestCase(
		"trialDivision2",
		trialDivision2,
		[
			104,
			2,
			[],
			[]
		],
		res => areArraysEqualModule.deepAreArraysEqual(res, [2, 2, 2, 13])
	),
	new TestCase(
		"trialDivision2",
		trialDivision2,
		[
			105,
			2,
			[],
			[]
		],
		res => areArraysEqualModule.deepAreArraysEqual(res, [3, 5, 7])
	),
	new TestCase(
		"trialDivision2",
		trialDivision2,
		[
			106,
			2,
			[],
			[]
		],
		res => areArraysEqualModule.deepAreArraysEqual(res, [2, 53])
	),
	new TestCase(
		"trialDivision2",
		trialDivision2,
		[
			107,
			2,
			[],
			[]
		],
		res => areArraysEqualModule.deepAreArraysEqual(res, [107])
	),
	new TestCase(
		"trialDivision2",
		trialDivision2,
		[
			108,
			2,
			[],
			[]
		],
		res => areArraysEqualModule.deepAreArraysEqual(res, [2, 2, 3, 3, 3])
	),
	new TestCase(
		"trialDivision2",
		trialDivision2,
		[
			109,
			2,
			[],
			[]
		],
		res => areArraysEqualModule.deepAreArraysEqual(res, [109])
	),
	new TestCase(
		"trialDivision2",
		trialDivision2,
		[
			110,
			2,
			[],
			[]
		],
		res => areArraysEqualModule.deepAreArraysEqual(res, [2, 5, 11])
	),
	new TestCase(
		"trialDivision2",
		trialDivision2,
		[
			111,
			2,
			[],
			[]
		],
		res => areArraysEqualModule.deepAreArraysEqual(res, [3, 37])
	),
	new TestCase(
		"trialDivision2",
		trialDivision2,
		[
			112,
			2,
			[],
			[]
		],
		res => areArraysEqualModule.deepAreArraysEqual(res, [2, 2, 2, 2, 7])
	),
	new TestCase(
		"trialDivision2",
		trialDivision2,
		[
			113,
			2,
			[],
			[]
		],
		res => areArraysEqualModule.deepAreArraysEqual(res, [113])
	),
	new TestCase(
		"trialDivision2",
		trialDivision2,
		[
			114,
			2,
			[],
			[]
		],
		res => areArraysEqualModule.deepAreArraysEqual(res, [2, 3, 19])
	),
	new TestCase(
		"trialDivision2",
		trialDivision2,
		[
			115,
			2,
			[],
			[]
		],
		res => areArraysEqualModule.deepAreArraysEqual(res, [5, 23])
	),
	new TestCase(
		"trialDivision2",
		trialDivision2,
		[
			116,
			2,
			[],
			[]
		],
		res => areArraysEqualModule.deepAreArraysEqual(res, [2, 2, 29])
	),
	new TestCase(
		"trialDivision2",
		trialDivision2,
		[
			117,
			2,
			[],
			[]
		],
		res => areArraysEqualModule.deepAreArraysEqual(res, [3, 3, 13])
	),
	new TestCase(
		"trialDivision2",
		trialDivision2,
		[
			118,
			2,
			[],
			[]
		],
		res => areArraysEqualModule.deepAreArraysEqual(res, [2, 59])
	),
	new TestCase(
		"trialDivision2",
		trialDivision2,
		[
			119,
			2,
			[],
			[]
		],
		res => areArraysEqualModule.deepAreArraysEqual(res, [7, 17])
	),
	new TestCase(
		"trialDivision2",
		trialDivision2,
		[
			120,
			2,
			[],
			[]
		],
		res => areArraysEqualModule.deepAreArraysEqual(res, [2, 2, 2, 3, 5])
	)
];