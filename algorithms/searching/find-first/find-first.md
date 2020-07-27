# Find-first — pseudocode

Searches for the first element that fulfils a predicate.

## Input

- An array; the array to search in
- A function of one argument of the same type as elements of the given array, returning a boolean value; the predicate that elements of the given array are to be checked for fulfilling

## Output

- Either of two values: if the given array contains any elements that fulfil the predicate, the first of them; otherwise, NIL

## The `FIND_FIRST` function

**Parameters:**

- `arr` — An array; the array to search in
- `pred` — A function of one argument of the same type as `arr`'s elements, returning a boolean value; the predicate that `arr`'s elements are to be checked for fulfilling

**Output values:**

- Either of two values: if `arr` contains any elements for which `pred` returns true, the first of them; otherwise, NIL

```
FIND_FIRST (arr, pred)
	if empty(arr)
	then return nil
	else
		if pred(arr[0])
		then return arr[0]
		else return FIND_FIRST(slice(arr, 1, len(arr)), pred)
```