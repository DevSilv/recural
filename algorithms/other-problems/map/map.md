# Map — pseudocode

Maps each element of an array to a value, creating a new array.

## Input

- The array, elements of which to map
- The mapping function

## Output

- A new array, each element of which results from mapping a given array's element

## The `MAP` function

**Parameters:**

- `arr` — An array; the array, elements of which to map
- `fn` — A function of one argument of the same type as `arr`'s elements, returning a value of the same or another type; the funtion used to map elements of `arr` to new values
- `res` — A helper variable; always an empty array (between consecutive recursive invokations of the function, it is the array that holds the values resulting from mapping)

**Output values:**

- An array; the array, in which the element on a given index is the resulting value of mapping the element of `arr` on the same index

```
MAP (arr, fn, res)
	if empty(arr)
	then return res
	else return MAP(slice(arr, 1, len(arr)), fn, concat(res, fn(arr[0])))
```