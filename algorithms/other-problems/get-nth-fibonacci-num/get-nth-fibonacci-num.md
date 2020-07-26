# Get-nth-Fibonacci-num — pseudocode

Calculates the n-th Fibonacci number.

## Input

- The number, `n`, of the Fibonacci number to calculate

## Output

- The `n`-th Fibonacci number

## The `GET_NTH_FIBONACCI_NUM` function

**Parameters:**

- `n` — An integer from 0 (inclusive) to infinity; the number of the Fibonacci number to calculate

**Output values:**

- An integer from 0 (inclusive) to infinity; the `n`-th Fibonacci number

```
GET_NTH_FIBONACCI_NUM (n)
	if equal(n, 0)
	then return 0
 	else
		if equal(n, 1)
		then return 1
		else return add(
			GET_NTH_FIBONACCI_NUM(subtract(n, 1)),
			GET_NTH_FIBONACCI_NUM(subtract(n, 2))
		)
```