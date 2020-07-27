# Generate-random-permutation — pseudocode

Generates a random permutation of the elements of an array.

## Input

- An array; the array, of elements of which to generate a random permutation

## Output

- An array, containing the same elements as the given array, in random order (which does not mean: different order)

## The `GENERATE_RANDOM_PERMUTATION` function

**Parameters:**

- `arr` The array, of elements of which to generate the random permutation
- `res` A helper variable; always an empty array (between consecutive recursive invokations of the function, it is an array containing those `arr`'s elements that have been processed so far)

**Output values:**

- The array `arr` with its elements in a random permutation

```
GENERATE_RANDOM_PERMUTATION (arr, res)
	if equal(len(arr), 0)
	then return res
	else
		if less(len(arr), 2)
		then maxProperElemIndex <- 0
		else maxProperElemIndex <- len(arr) - 1 - 1

		split <- random(0, maxProperElemIndex)

		return GENERATE_RANDOM_PERMUTATION(
			concat(
				subarr(arr, 0, split),
				slice(arr, split + 1, len(arr))
			),
			concat(res, arr[split])
		)
```