# Reduce — pseudocode

Reduces the array to a single value, using the provided function.

## Input

- The array to reduce
- A function to reduce each two elements of the given array to a single value

## Output

- A value being the result of reducing the array

## The `REDUCE` function

**Parameters:**

- `arr` — An array; the array to reduce
- `fn` — A function of two arguments of the same type, and one return value of the same type as the arguments; the function to reduce each two elements of the given array to a single value
- `res` — A helper variable; a value of the same type as `arr`'s elements; always an "identity element" for the type of `arr`'s elements with respect to the function `fn` (between consecutive recursive invokations of the function, it is the result value of reducing the array)

**Output values:**

- A value of the type of `arr`'s elements; the result value of reducing the array

```
REDUCE (arr, fn, res)
	if empty(arr)
	then return res
	else return REDUCE(slice(arr, 1, len(arr)), fn, fn(res, arr[0]))

REDUCE([1, 2, 3], (res, cur) -> res + cur, [])
```