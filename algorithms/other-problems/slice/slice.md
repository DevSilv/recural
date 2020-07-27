# Slice — pseudocode

Extracts a subarray from an array.

## Input

- The array to extract the subarray from
- The index of the first element of the subarray
- The index of the last element of the subarray

## Output

- A subarray containing the same elements, in the same order, as the given array, starting from the given first element (inclusive), and ending on the given last element (inclusive)

## The `SLICE` function

**Parameters:**

- `arr` — An array; the array, from which to extract the subarray
- `start` — An integer from 0 (inclusive) to `len(arr)` (inclusive), being less than or equal to `end`; the index of the first element of `arr` to extract
- `end` — An integer from 0 (inclusive) to `len(arr)`, being greater than or equal to `start`; the index of the last element of `arr` to extract
- `res` — A helper variable; always an empty array (between consecutive recursive invokations of the function, it is the subarray)
- `cur` — A helper variable; an integer; always 0 (between consecutive recursive invokations of the function, it is the index of the currently processed element of `arr`)

**Output values:**

- An array with elements of the same type as `arr`'s elements; the subarray extracted from `arr`

```
SLICE (arr, start, end, res, cur)
	if equal(cur, end)
	then return res
	else
		if greaterOrEqual(cur, start) and less(cur, end)
		then return SLICE(arr, start, end, concat(res, arr[cur]), cur + 1)
		else return SLICE(arr, start, end, res, cur + 1)
```