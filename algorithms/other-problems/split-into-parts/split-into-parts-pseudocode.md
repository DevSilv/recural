# Split-into-parts — pseudocode

Splits an array into parts of the given length.

## Input

- An array; the array to split
- An integer from 0 (inclusive) to infinity; the maximum length of each part of the array

## Output

- An array of arrays, each of them having elements of the same type as the given array; parts of the given array

## The `SPLIT_INTO_PARTS` function

**Parameters:**

- `arr` — An array; the array to split
- `len` — The maximum length of each part of `arr`
- `res` — A helper variable; always an empty array (between consecutive recursive invokations of the function, it is an array holding the parts that `arr` has been split into so far)

**Output values:**

- An array of arrays, each of them having elements of the same type as the given array; parts of the given array

```
SPLIT_INTO_PARTS (arr, len, res)
	if len(arr) < len
	then return concat(res, arr)
	else return SPLIT_INTO_PARTS(
		slice(arr, len), len, concat(res, slice(arr, 0, len))
	)
```