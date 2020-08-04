# Wrap — pseudocode

Wraps a string represented by an array of strings in a border of characters.

## Input

- An array of strings; the array to wrap
- A character; the border character
- An integer; the size of the border

## Output

- An array; the given array wrapped in a border of the given size, consisting of copies of the given character

## The `WRAP` function

**Parameters:**

- `arr` — An array of strings; the array to wrap
- `char` — A zero-or-one-length character; the border character
- `size` — An integer greater than or equal to 0; the size of the border
- `cur` — A helper variable; an integer; always 0 (between consecutive recursive invokations of the function, it represents, among others, the index of the line currently to be wrapped)
- `res` — A helper variable; an array; always an empty array (between consecutive recursive invokations of the function, it represents the current state of the result array)

**Output values:**

- An array; `arr` wrapped in a border of size `size`, consisting of copies of `char`

```
WRAP (arr, char, size, cur, res)
    if equal(len(arr), 0) or equal(size, 0)
    then return arr
    else
        if equal(cur, 0) and equal(len(res), 0)
        then return WRAP(
            arr,
            char,
            size,
            cur,
            repeat(
                repeat(char, 2 * size + len(arr[0])),
                size
            )
        )
        else
            if equal(cur, len(arr))
            then return concat(
                res,
                repeat(
                    repeat(char, 2 * size + len(arr[0])),
                    size
                )
            )
            else return WRAP(
                arr,
                char,
                size,
                cur + 1,
                concat(
                    res,
                    concat(
                        repeat(char, size),
                        arr[cur],
                        repeat(char, size)
                    )
                )
            )
```