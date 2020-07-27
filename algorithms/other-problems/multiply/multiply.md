# Multiply — pseudocode

Multiplies a real number by an integer.

## Input

- A real number
- An integer from 0 (inclusive) to infinity

## Output

- The product of the given real number and integer

## The `MULTIPLY` function

**Parameters:**

- `num1` — A real number
- `num2` — An integer from 0 (inclusive) to infinity

**Output values:**

- The product of `num1` and `num2`

```
MULTIPLY (num1, num2)
	if equal(num2, 0)
	then return 0
	else return num1 + MULTIPLY(num1, subtract(num2, 1))
```