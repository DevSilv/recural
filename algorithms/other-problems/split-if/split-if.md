# Split-if — pseudocode

Splits an array into parts on elements that fulfil a predicate.

## Input

- An array; the array to split
- A function of one argument of the same type as elements of the given array, returning a boolean value; the predicate that an element needs to fulfil in order for the given array to be split on it

## Output

- An array of arrays, each of them having elements of the same type as the given array; parts of the given array

## The `SPLIT_IF` function

**Parameters:**

- `arr` — An array; the array to split
- `pred` — A function of one argument of the same type as `arr`'s elements, returning a boolean value; the predicate that an element needs to fulfil in order for the given array to be split on it
- `part` — A helper variable; always an empty array (between consecutive recursive invokations of the function, it is the part of `arr` containing elements from the last element that fulfils `pred` (inclusive) to the element one position before the current element (inclusive))
- `res` — A helper variable; always an empty array (between consecutive recursive invokations of the function, it is an array holding the parts that `arr` has been split into so far)

**Output values:**

- An array of arrays, each of them having elements of the same type as the given array; parts of the given array

```
SPLIT_IF (arr, pred, part, res)
	if empty(arr)
	then return res
	else
		if pred(arr[0])
		then return SPLIT_IF(
			slice(arr, 1, len(arr)), pred, concat([], arr[0]), concat(res, part)
		)
		else return SPLIT_IF(
			slice(arr, 1, len(arr)), pred, concat(part, arr[0]), res
		)
```