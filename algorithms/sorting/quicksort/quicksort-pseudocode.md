# Quicksort — pseudocode

Sorts elements of an array in ascending order.

## Input

- An array, elements of which are of a comparable type; the array, elements of which to sort

## Output

- An array, elements of which are the same elements as the given array, sorted in ascending order

## Variant 1

### The `QUICKSORT` function

**Parameters:**

- `arr` — An array, elements of which are of a comparable type; the array, elements of which to sort
- `start` — A helper variable; always the first index of `arr` (between consecutive recursive invokations of the function, it is the index of the first element of the array's current part to sort)
- `end` — A helper variable; always the last index of `arr` (between consecutive recursive invokations of the function, it is the index of the last element of the array's current part to sort)

**Output values:**

- An array, elements of which are the same as `arr`'s elements and are sorted in ascending order

```
QUICKSORT (arr, start, end)
	if greater(start, end)
	then return arr

	(newArr, pvtIdxAfterRearr) <- PARTITION(
		arr, [], [], pvtIdx(start, end), start, end, start
	)
	newArr <- QUICKSORT(newArr, start, pvtIdxAfterRearr - 1)
	newArr <- QUICKSORT(newArr, pvtIdxAfterRearr + 1, end)
	
	return newArr
```

### The `PARTITION` function

**Parameters:**

- `arr` — An array, elements of which are of a comparable type; the array, elements of which to sort
- `prePvt` — A helper variable; always an empty array (between consecutive recursive invokations of the function, it is an array being filled with all `arr`'s elements that are less than the pivot element)
- `postPvt` — A helper variable; always an empty array (between consecutive recursive invokations of the function, it is an array being filled with all `arr`'s elements that are greater than the pivot element)
- `pvtIdx` — The index of the pivot element; an integer from the first index of `arr` (inclusive) to the last index of `arr` (inclusive)
- `start` — A helper variable; always the first index of `arr` (between consecutive recursive invokations of the function, it is the index of the first element of `arr`'s current part to sort)
- `end` — A helper variable; always the last index of `arr` (between consecutive recursive invokations of the function, it is the index of the last element of `arr`'s current part to sort)
- `cur` — A helper variable; always the first element of `arr` (between consecutive recursive invokations of the function, it is the index of the current element when reordering `arr`'s elements)

**Output values:**

- An ordered pair of:
	1. an array with the same elemenst as `arr`, of which elements from `start` (inclusive) to `end` (inclusive) are ordered in such a way that all elements less than the `arr[pvtIdx]` element are on positions before this element, and all the elements greater than the `arr[pvtIdx]` element are on positions after this element;
	2. the new index of the `arr[pvtIdx]` element

```
PARTITION (arr, prePvt, postPvt, pvtIdx, start, end, cur)
	if greater(cur, end)
	then return (
		join(
			subarr(arr, 0, start - 1),
			prePvt,
			arr[pvtIdx],
			postPvt,
			subarr(arr, end + 1, len(arr) - 1)
		),
		start + len(prePvt)
	)
	else
		if equal(cur, pvtIdx)
		then return PARTITION(arr, prePvt, postPvt, pvtIdx, start, end, cur + 1)
		else
			if less(arr[cur], arr[pvtIdx])
			then return PARTITION(
				arr,
				join(prePvt, arr[cur]),
				postPvt,
				pvtIdx,
				start,
				end,
				cur + 1
			)
			else return PARTITION(
				arr,
				prePvt,
				join(postPvt, arr[cur]),
				pvtIdx,
				start,
				end,
				cur + 1
			)
```

## Variant 2

### Purposes

1. Not to have a need for a second function (i.e., the `partition` function).
2. To check whether it would be possible to write this algorithm having all branch to immediately return.

### The `QUICKSORT` function

**Parameters:**

- `arr` — An array, elements of which are of a comparable type; the array, elements of which to sort
- `start` — A helper variable; always the first index of `arr` (between consecutive recursive invokations of the function, it is the index of the first element of `arr`'s current part to sort)
- `end` — A helper variable; always the last index of `arr` (between consecutive recursive invokations of the function, it is the index of the last element of `arr`'s current part to sort)
- `cur` — A helper variable; always the first index of `arr` (between consecutive recursive invokations of the function, it is the index of the current element when reordering `arr`'s elements)
- `pvtIdx` — An integer from the first index of `arr` (inclusive) to the last index of `arr` (also inclusive); the index of the pivot element
- `prePvt` — A helper variable; always an empty array (between consecutive recursive invokations of the function, it is an array being filled with all `arr`'s elements that are less than the pivot element)
- `postPvt` — A helper variable; always an empty array (between consecutive recursive invokations of the function, it is an array being filled with all `arr`'s elements that are greater than the pivot element)

**Output values:**

- An array, elements of which are the same as `arr`'s elements and are sorted in ascending order

```
QUICKSORT_2 (arr, start, end, cur, pvtIdx, prePvt, postPvt)
	if greater(start, end)
	then return arr
	else
		// START OF THE PARTITION OPERATION
		if lessOrEqual(cur, end)
		then
			if equal(cur, pvtIdx)
			then QUICKSORT_2(
				arr, start, end, cur + 1, pvtIdx, prePvt, postPvt
			)
			else
				if less(arr[cur], arr[pvtIdx])
				then QUICKSORT_2(
					arr,
					start,
					end,
					cur + 1,
					pvtIdx,
					join(prePvt, arr[cur]),
					postPvt
				)
				else QUICKSORT_2(
					arr,
					start,
					end,
					cur + 1,
					pvtIdx,
					prePvt,
					join(postPvt, arr[cur])
				)
		// END OF THE PARTITION OPERATION
		else return QUICKSORT_2(
			QUICKSORT_2(
				join(
					subarr(arr, 0, start),
					prePvt,
					arr[pvtIdx],
					postPvt,
					subarr(arr, end + 1, len(arr))
				),
				start,
				start + len(prePvt) - 1,
				start,
				start,
				[],
				[]
			),
			start + len(prePvt) + 1,
			end,
			start + len(prePvt) + 1,
			start + len(prePvt) + 1,
			[],
			[]
		)
```