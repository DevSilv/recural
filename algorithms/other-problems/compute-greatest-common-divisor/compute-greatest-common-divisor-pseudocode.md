# Euclidean algorithm

Computes the greatest common divisor of two integers, both greater than 0.

## Input

- An integer greater than 0
- An integer greater than 0

## Output

- An integer greater than 0; the greatest common divisor of the given two integers

## Variant 1

**Parameters:**

- `a` — An integer greater than 0
- `b` — An integer greater than 0

**Output values:**

- An integer greater than 0; the greatest common divisor of `a` and `b`

```
EUCLIDEAN_ALGORITHM (a, b)
	if equal(b, 0)
	then return a
	else return EUCLIDEAN_ALGORITHM(
		b,
		remainder(a, b)
	)
```

## Variant 2

**Parameters:**

- `a` — An integer greater than 0
- `b` — An integer greater than 0

**Output values:**

- An integer greater than 0; the greatest common divisor of `a` and `b`

```
EUCLIDEAN_ALGORITHM (a, b)
	if equal(a, b)
	then return a
	else
		if greater(a, b)
		then return EUCLIDEAN_ALGORITHM(a - b, b)
		else return EUCLIDEAN_ALGORITHM(a, b - a)
```