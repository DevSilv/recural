# Run-length encoding (RLE)

## TODOs

- ~~[-] Clean up the `rle.js` file~~
- [+] Change the algorithm's name to "run-length-encoding"
- [+] Read more about data compression

## Variant 1

### Function `rleCompress`

**Parameters:**

- `str` — A string of characters; the data to compress
- `cur` — A helper variable; an integer from `0` to the length of `str` (between consecutive recursive invokations of the function, it is the index of the currently processed character in `str`)
- `char` — A helper variable; a character (between consecutive recursive invokations of the function, it is a character in `str` that the character being currently processed in `str` is compared with to check how long is the current pattern of characters)
- `charCount` — A helper variable; an integer from `0` to the length of `str` (between consecutive recursive invokations of the function, it is the length of the current pattern of characters)
- `res` — A helper variable; an array of pairs, where each pair consists of a character and an integer from `0` to the length of `str` (between the consecutive recursive invokations of the function, it is the array of already processed characters from `str` and counts of the patterns of characters that each of these characters forms)

**Output values:**

- An array of pairs, where each pair consists of a character and an integer from `0` to the length of `str`; the array of characters from `str` and counts of the patterns that each of these characters forms

```
rleCompress (str, cur, char, charCount, res)
    if equal(cur, len(str))
    then return concat(res, [char, charCount])
    else
        if not equal(str[cur], char)
        then return rleCompress(
            str,
            cur + 1,
            str[cur],
            1,
            concat(res, [char, charCount])
        )
        else return rleCompress(str, cur + 1, char, charCount + 1, res)
```

### Function `rleDecompress`

**Parameters:**

- `arr` — An array of pairs, where each pair consists of a character and an integer from `0`; the data to decompress (e.g., the resulting array of invoking the `rleCompress` function)
- `cur` — A helper variable; an integer from `0` to the length of `arr` (between consecutive recursive invokations of the function, it is the index of the element of `arr` being currently processed)
- `res` — A helper variable; a string of characters (between consecutive recursive invokations of the function, it is the part of data that has already been decompressed)

**Output values:**

- A string of characters; the decompressed data

```
rleDecompress (arr, cur, res)
    if equal(cur, len(arr))
    then return res
    else return rleDecompress(
        arr,
        cur + 1,
        concat(res, repeat(arr[cur][0], arr[cur][1]))
    )
```

## Credits

1. https://de.wikipedia.org/wiki/Laufl%C3%A4ngenkodierung