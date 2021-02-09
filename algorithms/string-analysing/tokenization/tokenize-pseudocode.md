# Tokenize — pseudocode

Tokenizes a string.

## Input

- A string; the string to tokenize
- An array of strings; the patterns for particular tokens

## Output

- If the given string **does not** contain a sequence of characters that cannot be matched by any pattern, an array containing elements that represent tokens — the tokens found in the given string; otherwise, a value representing an error

## The `TOKENIZE` function

### Parameters

- `str` — A string; the string to tokenize
- `cur` — A helper variable; an integer; always 0 (between consecutive recursive invokations of the function, it is the index of the character of `str` to be added to `part` if the actual value of `part` is not matched by any pattern)
- `part` — A helper variable; a string; always an empty string (between consecutive recursive invokations of the function, it is a substring of `str` that is being matched)
- `res` — A helper variable; an array; always an empty array (between consecutive recursive invokations of the funtion, it is the array that contains tokens indentified so far)

### Output values

- If `str` **does not** contain a sequence of characters that cannot be matched by any pattern, an array containing elements that represent tokens — the tokens found in `str`; otherwise, NIL

```
TOKENIZE (str, cur, part, res)
    if equal(cur, len(str))
    then
        if greater(len(part), 0)
        then return NIL // At least one character is not matched by any pattern
        else return res
    else
        if isToken(part)
        then return TOKENIZE(
            str,
            cur + 1,
            "",
            concat(
                res,
                (tokenName(part), part)
            )
        )
        else return TOKENIZE(str, cur + 1, concat(part, str[cur]), res)
```