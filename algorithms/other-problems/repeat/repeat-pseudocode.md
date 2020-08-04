# Repeat

Returns multiple copies of an array.

## Input

- An array; the array of which to return multiple copies
- An integer greater than or equal to 0; the number of times to repeat copying the array

## Output

- An array of arrays of elements of the same type as elements of the given array; the given number of copies of the given array

## The `REPEAT` function

**Parameters:**

- `arr` — An array; the array of which to return multiple copies
- `count` — An integer greater than or equal to 0; the number of times to repeat copying the array
- `res` — A helper variable; always an empty array (between consecutive recursive invokations of the function, it is an array containing copies of `arr` made so far)

**Output values:**

- An array of arrays of elements of the same type as `arr`'s elements; `count` number of copies of `arr`

```
REPEAT (arr, count, res)
    if equal(count, 0)
    then return res
    else return REPEAT(arr, count - 1, concat(res, arr))
```