# Reverse — pseudocode

Reverses the order of elements of an array.

## Input

- An array; the array, elements of which to reverse the order

## Output

- An array with the same elements as the given array, in the reverse order

## Variant 1

**Parameters:**

- `arr` — An array; the array, elements of which to reverse the order
- `n` — A helper variable; always the first index of `arr` (between consecutive recursive invokations of the function, it is the index of the element to move to the beginning of `arr`)

**Output values:**

- An array with the same elements as `arr`, in the reverse order

```
REVERSE (arr, n)
	if less(len(arr), 2)
	then return arr
	else
		if greater(n, len(arr) - 3)
		then return concat(
			arr[n + 1],
			slice(arr, 0, n),
			slice(arr, n + 2, len(arr) - 1)
		)
		else return REVERSE(
			concat(
				arr[n + 1],
				slice(arr, 0, n),
				slice(arr, n + 2, len(arr) - 1)
			),
			n + 1
		)
```

## Variant 2

**Parameters:**

- `arr` — An array; the array, elements of which to reverse the order
- `res` — A helper variable; always an empty array (between consecutive recursive invokations of the function, it is an array with elements reordered so far)

**Output values:**

- An array with the same elements as `arr`, in the reverse order

```
REVERSE (arr, res)
	if empty(arr)
	then return res
	else return REVERSE(slice(arr, 1, len(arr) - 1), concat(arr[0], res))
```