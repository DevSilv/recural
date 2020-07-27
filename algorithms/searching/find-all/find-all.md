# Find-all — pseudocode

Searches an array for all such elements that each of which fulfils a predicate.

## Input

- An array; the array to search in
- A function of one argument of the same type as elements of the given array, returning a boolean value; the predicate that an element of the given array is to be checked to fulfil

## Output

- An array of elements of the same type as elements of the given array; all such elements of the given array that each of them fufils the given predicate

## The `FIND_ALL` function

**Parameters:**

- `arr` — An array; the array to search in
- `pred` — A function of one argument of the same type as `arr`'s elements, returning a boolean value; the predicate that an element of `arr` is to be checked to fulfil
- `res` — A helper variable; always an empty array (between consecutive recursive invokations of the function, it is an array of all such elements of `arr` that each of them fulfils `pred`)

**Output values:**

- An array of elements of the same type as `arr`'s elements; all such elements of `arr` that each of them fulfils `pred`

```
FIND_ALL (arr, pred, res)
	if empty(arr)
	then return res
	else
		if pred(arr[0])
		then return FIND_ALL(slice(arr, 1, len(arr)), pred, concat(res, arr[0]))
		else return FIND_ALL(slice(arr, 1, len(arr)), pred, res)
```