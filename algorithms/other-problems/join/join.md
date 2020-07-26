# Join — pseudocode

Concatenates two arrays.

## Input

- The first array to concatenate
- The second array to concatenate

## Output

- The array being the result of concatenating the given arrays

## The `JOIN` function

**Parameters:**

- `arr1` — An array; the first array to concatenate
- `arr2` — An array; the second array to concatenate

**Output:**

- An array; the array cotaining all the elements of `arr1` and `arr2`, in the order: firstly all of the elements of `arr1` in the same order as in `arr1`, then all of the elements of `arr2` in the same order as in `arr2`

```
JOIN (arr1, arr2)
	if empty(arr2)
	then return arr1
	else return JOIN(concat(arr1, arr2[0]), slice(arr2, 1, len(arr2)))
```