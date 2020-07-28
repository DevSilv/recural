# Is-sorted-asc — pseudocode

Determines whether elements of an array are sorted in ascending order or not.

## Input

- An array, elements of which are of a comparable type; the array, elements of which to determine the order of

## Output

- A boolean value: if all elements of the given array are sorted in ascending order, true; otherwise, false

## The `IS_SORTED_ASC` function

**Parameters:**

- `arr` — An array, elements of which are of a comparable type; the array, elements of which to determine the order of
- `cur` — A helper variable; an integer; always the first index of `arr` (between consecutive recursive invokations of the function, it is the lower index of the two of the elements being currently compared)

**Output values:**

- A boolean value: if all of `arr`'s elements are sorted in ascending order, true; otherwise, false

```
IS_SORTED_ASC (arr, cur)
	if less(len(arr), 2) or greater(cur, len(arr) - 1 - 1)	// The relation
															//	"greater"
															//	handles
															//	an empty array,
															//	while
															//	the relation
															//	"equal"
															//	would not
	then return true
	else
		if greater(arr[cur], arr[cur + 1])
		then return false
		else return IS_SORTED_ASC(arr, cur + 1)
```