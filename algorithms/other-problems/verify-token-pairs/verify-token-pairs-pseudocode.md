# Verify-token-pairs

Verifies whether all token pairs in a string are properly closed or not.

## Input

- A string; the string in which to verify the token pairs
- A character; the opening token character
- A character; the closing token character

## Output

- A boolean value: if all the given token pairs in the given string are properly closed, true; otherwise, false

## The `VERIFY_TOKEN_PAIRS` function

**Parameters:**

- `str` — A string; the string in which to verify the token pairs
- `n` — A helper variable; always 0 (between consecutive recursive invokations of the function, it is a number indicating how many there are opening, and how many closing token characters)

**Output values:**

- A boolean value: if all the given token pairs in `str` are properly closed, true; otherwise, false

```
VERIFY_TOKEN_PAIRS (str, n)
    if empty(str)
    then
        if equal(n, 0)
        then return true
        else return false
    else
        if less(n, 0)
        then return false
        else
            if isOpeningToken(str[0])
            then return VERIFY_TOKEN_PAIRS(
                substr(str, 1, len(str)),
                n + 1
            )
            else
                if isClosingToken(str[0])
                then return VERIFY_TOKEN_PAIRS(
                    substr(str, 1, len(str)),
                    n - 1
                )
                else return VERIFY_TOKEN_PAIRS(
                    substr(str, 1, len(str)),
                    n
                )
```