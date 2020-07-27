# Sentinel-find-first

Searches in an array with sentinel for the first element that fulfils a predicate.

## Input

- An array such that its last element fulfils the predicate; the array to search in
- A function of one argument of the same type as elements of the given array; the predicate that elements of the given array are to be checked for fulfilling


## Output

- Either of two values: if the given array contains more than one element that fulfils the given predicate, the first of them; otherwise, NIL

## The `SENTINEL_FIND_FIRST` function

**Parameters:**

- `arr` — An array such that its last elemtn fulfils the predicate; the array to search in
- `pred` — A function of one argument of the same type as `arr`'s elements; the predicate that `arr`'s elements are to be checked for fulfilling

**Output values:**

- Either of two values: if `arr` contains more than one element for which `pred` returns true, the first of them; otherwise, NIL

```
SENTINEL_FIND_FIRST (arr, pred)
	if pred(arr[0])
	then
		if greater(len(arr), 1)
		then return arr[0]
		else return nil
	else return SENTINEL_FIND_FIRST(slice(arr, 1, len(arr)), pred)
```