# Trial division

Performs the integer factorization of an integer.

## Input

- An integer greater than or equal to zero; the integer to find the factors of

## Output

- An array of integers, each of them greater than or equal to zero; an array of the factors of the given integer

## The `TRIAL_DIVISION` function

**Parameters:**

- `num` — An integer greater than or equal to zero; the integer to find the factors of
- `cur` — A helper variable; an integer; always 2 (between consecutive recursive invokations of the function, it is the current integer that is to be checked to be a factor of `num`)
- `res` — A helper variable; always an empty array (between consecutive recursive invokations of the function, it is an array, elements of which are factors of `num` calculated so far)
- `notApplying` — A helper variable; always an empty array (between consecutive recursive invokations of the function, it is an array, elements of which are all integers known so far of not being factors of `num`)

**Output values:**

- An array of integers, each of them greater than or equal to zero; an array of the factors of `num`

```
TRIAL_DIVISION (num, cur, res, notApplying)
	if less(num, 2)
	then return res
	else
		if (
			contains(res, elem -> isMultiple(cur, elem) and not equal(cur, elem))
		) or contains(notApplying, elem -> isMultiple(cur, elem))
		then return TRIAL_DIVISION(num, cur + 1, res, notApplying)
		else
			if equal(remainder(num, cur), 0)
			then return TRIAL_DIVISION(
				num / cur,
				cur,
				concat(res, cur),
				notApplying
			)
			else return TRIAL_DIVISION(
				num,
				cur + 1,
				res,
				concat(notApplying, cur)
			)
```