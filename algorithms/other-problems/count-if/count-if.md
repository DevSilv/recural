# Count-if

Counts elements in an array that fulfils a predicate.

## Input

- An array, elements of which to count
- The predicate that an element of the array is to fulfil

## Output

- The number of elements of the array that fulfils the predicate

## The `COUNT_IF` function

**Parameters:**

- `arr` — An array; the array, elements of which to count
- `pred` — A function of one argument, which argument is to be of the same type as the elements of `arr`,  returning a boolean value; the predicate that an element of `arr` is to fulfil
- `res` — A helper variable; an integer; always 0 (between consecutive recursive invokations of the function, it is the number of elements of `arr` that fulfils `pred` so far)

**Output values:**

- An integer from 0 (inclusive) to infinity; the number of elements of `arr` that fulfils `pred`

```
COUNT_IF (arr, pred, res)
	if empty(arr)
	then return res
	else
		if pred(arr[0])
		then return COUNT_IF(slice(arr, 1, len(arr)), pred, res + 1)
		else return COUNT_IF(slice(arr, 1, len(arr)), pred, res)
```