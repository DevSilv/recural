/**
 * 	ARE_ARRAYS_EQUAL (arr1, arr2)
 * 		if empty(arr1) and empty(arr2)
 * 		then return true
 * 		else
 * 			if equal(arr1[0], arr2[0])
 * 			then return ARE_ARRAYS_EQUAL(slice(arr1, 1, len(arr1)), slice(arr2, 1, len(arr2)))
 * 			else return false
 * 
 * 	ARE_ARRAYS_EQUAL([1, 2, 3], [1, 2, 3])
 * 	ARE_ARRAYS_EQUAL([1, [2, 3]], [1, [2, 3]])
 */

/**
 * @template PrimitiveType
 * @param {PrimitiveType[]} arr1
 * @param {PrimitiveType[]} arr2
 * @returns {boolean}
 * @description Note: DOES NOT handle e.g. arrays, elements of which are also
 * 	arrays
 */
const shallowAreArraysEqual
	= (arr1, arr2) =>
		arr1.length === 0 && arr2.length === 0
			? true
			: arr1[0] === arr2[0]
				? shallowAreArraysEqual(arr1.slice(1), arr2.slice(1))
				: false;

/**
 * @param {any[]} arr1
 * @param {any[]} arr2
 * @returns {boolean}
 * @description Note: handles arrays, elements of which are also arrays
 */
const deepAreArraysEqual
	= (arr1, arr2) =>
		arr1.length === 0 && arr2.length === 0
			? true
			: Array.isArray(arr1[0]) && Array.isArray(arr2[0])
				? deepAreArraysEqual(arr1[0], arr2[0])
					? deepAreArraysEqual(
						arr1.slice(1),
						arr2.slice(1)
					)
					: false
				: arr1[0] === arr2[0]
					? deepAreArraysEqual(
						arr1.slice(1),
						arr2.slice(1)
					)
					: false;

/**
 * 	SPLIT (arr, len, res)
 * 		if len(arr) < len
 * 		then return concat(res, arr)
 * 		else return SPLIT(slice(arr, len), len, concat(res, slice(arr, 0, len)))
 * 
 * 	SPLIT([1, 2, 3], 2, [])
 */

/**
 * @template T
 * @param {T[]} arr An array
 * @param {number} len An integer > 0
 * @param {T[][]} res An array
 * @returns {T[][]}
 */
const split
	= (arr, len, res) =>
		arr.length <= len
			? res.concat(
				[
					arr
				]
			)
			: split(
				arr.slice(len),
				len,
				res.concat(
					[
						arr.slice(0, len)
					]
				)
			);

/**
 * 	SLICE (arr, start, end, res, cur)
 * 		if equal(cur, end)
 * 		then return res
 * 		else
 * 			if greaterOrEqual(cur, start) and less(cur, end)
 * 			then return SLICE(arr, start, end, concat(res, arr[cur]), cur + 1)
 * 			else return SLICE(arr, start, end, res, cur + 1)
 *
 * 	SLICE([1, 2, 3], 1, 3, [], 0)
 */

/**
 * @template T
 * @param {T[]} arr
 * @param {number} start
 * @param {number} end
 * @param {T[]} res
 * @param {number} cur
 * @returns {T[]}
 */
const slice
	= (arr, start, end, res, cur) =>
		cur >= end
			? res
			: cur >= start && cur < end
				? slice(
					arr,
					start,
					end,
					res.concat(
						[
							arr[cur]
						]
					),
					cur + 1
				)
				: slice(arr, start, end, res, cur + 1);

/**
 * 	FIND_FIRST (arr, pred)
 * 		if empty(arr)
 * 		then return nil
 * 		else
 * 			if pred(arr[0])
 * 			then return arr[0]
 * 			else return FIND_FIRST(slice(arr, 1, len(arr)), pred)
 * 
 * 	FIND_FIRST([1, 2, 3], elem -> equal(remainder(elem, 2), 0))
 */

/**
 * @callback FindFirstPredicate
 * @param {any} elem
 * @returns {boolean}
 */

/**
 * @param {any[]} arr
 * @param {FindFirstPredicate} pred
 * @returns {undefined|any}
 */
const findFirst
	= (arr, pred) =>
		arr.length === 0
			? undefined
			: pred(arr[0])
				? arr[0]
				: findFirst(
					arr.slice(1),
					pred
				);

/**
 * 	FIND_ALL (arr, pred, res)
 * 		if empty(arr)
 * 		then return res
 * 		else
 * 			if pred(arr[0])
 * 			then return FIND_ALL(slice(arr, 1, len(arr)), pred, concat(res, arr[0]))
 * 			else return FIND_ALL(slice(arr, 1, len(arr)), pred, res)
 * 
 * 	FIND_ALL([1, 2, 3, 4], elem -> equal(remainder(elem, 2), 0), [])
 */

/**
 * @callback FindAllPredicate
 * @param {any} elem
 * @returns {boolean}
 */

/**
 * @param {any[]} arr
 * @param {FindAllPredicate} pred
 * @param {any[]} res
 * @returns {undefined|any}
 */
const findAll
	= (arr, pred, res) =>
		arr.length === 0
			? res
			: pred(arr[0])
				? findAll(
					arr.slice(1),
					pred,
					res.concat([arr[0]])
				)
				: findAll(
					arr.slice(1),
					pred,
					res
				);

/**
 * 	REDUCE (arr, fn, res)
 * 		if empty(arr)
 * 		then return res
 * 		else return REDUCE(slice(arr, 1, len(arr)), fn, fn(res, arr[0]))
 *
 * 	REDUCE([1, 2, 3], (res, cur) -> res + cur, [])
 */

/**
 * @callback ReduceFn
 * @param {any} res
 * @param {any} cur
 * @returns {any}
 */

/**
 * @param {any[]} arr
 * @param {ReduceFn} fn
 * @param {any} res
 * @returns {any}
 */
const reduce
	= (arr, fn, res) =>
		arr.length === 0
			? res
			: reduce(arr.slice(1), fn, fn(res, arr[0]));

/**
 * 	MAP (arr, fn, res)
 * 		if empty(arr)
 * 		then return res
 * 		else return MAP(slice(arr, 1, len(arr)), fn, concat(res, fn(arr[0])))
 * 
 * 	MAP([1, 2, 3], elem -> multiply(elem, 2))
 */

/**
 * @callback MapFn
 * @param {any} elem
 * @returns {any}
 */

/**
 * 
 * @param {any[]} arr
 * @param {MapFn} fn
 * @param {any[]} res
 */
const map
	= (arr, fn, res) =>
		arr.length === 0
			? res
			: map(arr.slice(1), fn, res.concat([fn(arr[0])]));

/**
 * 	GET_LENGTH (arr, res)
 * 		if equal(arr[res - 1], NIL)
 * 		then return res
 * 		else return GET_LENGTH(arr, res + 1)
 * 
 * 	GET_LENGTH([1, 2, 3], 0)
 */

/**
 * @param {any[]} arr
 * @param {number} res
 * @returns {number}
 */
const getLength
	= (arr, res) =>
		arr[res] === undefined
			? res
			: getLength(arr, res + 1);

/**
 * 	COUNT_IF (arr, pred, res)
 * 		if empty(arr)
 * 		then return res
 * 		else
 * 			if pred(arr[0])
 * 			then return COUNT_IF(slice(arr, 1, len(arr)), pred, res + 1)
 * 			else return COUNT_IF(slice(arr, 1, len(arr)), pred, res)
 * 
 * 	COUNT_IF ([1, 2, 3], elem -> equal(remainder(elem, 2), 0), 0)
 */

/**
 * @callback CountIfFn
 * @param {any} elem
 * @returns {boolean}
 */

/**
 * 
 * @param {any[]} arr
 * @param {CountIfFn} pred
 * @param {number} res
 */
const countIf
	= (arr, pred, res) =>
		arr.length === 0
			? res
			: pred(arr[0])
				? countIf(
					arr.slice(1),
					pred,
					res + 1
				)
				: countIf(
					arr.slice(1),
					pred,
					res
				);

/**
 * 	SPLIT_IF (arr, pred, part, res)
 * 		if empty(arr)
 * 		then return res
 * 		else
 * 			if pred(arr[0])
 * 			then return SPLIT_IF(slice(arr, 1, len(arr)), pred, concat([], arr[0]), concat(res, part))
 * 			else return SPLIT_IF(slice(arr, 1, len(arr)), pred, concat(part, arr[0]), res)
 * 
 * 	SPLIT_IF([1, 2, 3], elem -> equal(elem, 2), [], [])
 */

/**
 * @callback SplitIfFn
 * @param {any} elem
 * @returns {boolean}
 */

/**
 * @template T
 * @param {T[]} arr
 * @param {SplitIfFn} pred
 * @param {T[]} part
 * @param {T[][]} res
 * @returns {T[][]}
 */
const splitIf
	= (arr, pred, part, res) =>
		arr.length === 0
			? res.concat(
				[
					part
				]
			)
			: pred(arr[0])
				? splitIf(
					arr.slice(1),
					pred,
					[
						arr[0]
					],
					res.concat(
						[
							part
						]
					)
				)
				: splitIf(
					arr.slice(1),
					pred,
					part.concat(
						[
							arr[0]
						]
					),
					res
				);

/**
 * 	JOIN (arr1, arr2)
 * 		if empty(arr2)
 * 		then return arr1
 * 		else return JOIN(concat(arr1, arr2[0]), slice(arr2, 1, len(arr2)))
 * 
 * 	JOIN([1, 2, 3], [4, 5])
 */

/**
 * @param {any[]} arr1
 * @param {any[]} arr2
 * @returns {any[]}
 */
const join
	= (arr1, arr2) =>
		arr2.length === 0
			? arr1
			: join(arr1.concat([arr2[0]]), arr2.slice(1));

module.exports = exports = {
	shallowAreArraysEqual,
	deepAreArraysEqual,
	split,
	slice,
	findFirst,
	findAll,
	reduce,
	map,
	getLength,
	countIf,
	splitIf,
	join
};