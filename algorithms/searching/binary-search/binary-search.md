# Binary-search — pseudocode

Search for an element in an array.

## Input

- The array to search in
- The value of the same type as elements of the given array; the element to search for

## Output

- If the given array contains the given element, an integer from 0 (inclusive) to the value of the last index within the array (inclusive): the index of the given element; otherwise, NIL

## The `BINARY_SEARCH` function

**Parameters:**

- `arr` — An array; the array to search in
- `elem` — A value of the same type as `arr`'s elements; the element to search for
- `start` — A helper variable; an integer; always 0 (between consecutive recursive invokations of the function, it is the index of the first element of the currently processed part of the array to restrict searching to)
- `end` — A helper variable; an integer; always `len(arr) - 1` (between consecutive recursive invokations of the function, it is the index of the last element of the currently processed part of the array to restrict searching to)

**Output values:**

- If the given array contains the given element, an integer from 0 (inclusive) to the value of the last index within the array (inclusive): the index of the given element; otherwise, NIL

```
BINARY_SEARCH (arr, elem, start, end)
	if end < start
	then return undefined
	else
		if equal(elem, arr[floor((start + end) / 2)])
		then return floor((start + end) / 2)
		else
			if less(elem, arr[floor((start + end) / 2)])
			then BINARY_SEARCH(
				arr, elem, start, floor((start + end) / 2) - 1
			)
			else BINARY_SEARCH(
				arr, elem, floor((start + end) / 2) + 1, end
			)
```

## Notes

- It is yet not clear to me which index this algorithm returns in case the element to find occurs multiple times in the array (is duplicated). For details, see e.g. this section of the Wikipedia article about binary search: https://en.wikipedia.org/wiki/Binary_search_algorithm#Duplicate_elements