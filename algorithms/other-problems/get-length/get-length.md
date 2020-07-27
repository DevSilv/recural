# Get-length — pseudocode

Measure the length of an array.

## Input

- The array, of which to measure the length

## Output

- The length of the given array

## The `GET_LENGTH` function

**Parameters:**

- `arr` — An array; the array, of which to get the length
- `res` — A helper variable; an integer; always 0 (between consecutive recursive invokations of the function, it is the length of `arr` measured so far)

**Output values:**

- The length of the given array

```
GET_LENGTH (arr, res)
	if equal(arr[res - 1], NIL)
	then return res
	else return GET_LENGTH(arr, res + 1)
```