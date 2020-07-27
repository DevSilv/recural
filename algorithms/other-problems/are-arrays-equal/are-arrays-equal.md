# Are-arrays-equal

Checks whether two arrays are equal.

## Input

- The first array to compare
- The second array to compare

## Output

- A value indicating whether the given arrays are equal or not

### The `ARE_ARRAYS_EQUAL` function

**Parameters:**

- `arr1` — An array of comparable elements; the first array to compare
- `arr2` — An array of comparable elements; the second array to compare

**Output values:**

- A boolean value: true if `arr1` and `arr2` contains the same elements in the same order; false otherwise

```
ARE_ARRAYS_EQUAL (arr1, arr2)
	if empty(arr1) and empty(arr2)
	then return true
	else
		if equal(arr1[0], arr2[0])
		then return ARE_ARRAYS_EQUAL(
			slice(arr1, 1, len(arr1)),
			slice(arr2, 1, len(arr2))
		)
		else return false
```