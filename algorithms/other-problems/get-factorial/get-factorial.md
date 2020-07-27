# Get-factorial — pseudocode

Calculates the factorial of an integer.

## Input

- The integer, of which to calculate the factorial

## Output

- The factorial of the given integer

## The `GET_FACTORIAL` function

**Parameters:**

- `num` — An integer from 0 (inclusive) to infinity; the integer, of which to calculate the factorial

**Output values:**

- The factorial of the given integer

```
GET_FACTORIAL (num)
	if equal(num, 0)
	then return 1
	else return multiply(num, GET_FACTORIAL(subtract(num, 1)))
```