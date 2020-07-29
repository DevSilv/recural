# TOH — pseudocode

Solves the Towers of Hanoi problem.

## Input

- A stack; the initial rod
- An empty stack; the helper rod
- An empty stack; the final rod

## Output

- An empty stack; the initial rod
- An empty stack; the helper rod
- A stack containing the same elements in the same order as the initial rod initially has contained; the final rod

## The `TOH` function

**Parameters:**

- `count` — A helper variable; an integer; always the number of disks to move

**Output values:**

(No output values)

```
TOH (count)
	if equal(count, 0)
	then return
	else
		if equal(count, 1)
		then push(finalRod, pop(initialRod))
		else
			TOH(count - 1, initialRod, finalRod, helperRod)
			TOH(1, initialRod, helperRod, finalRod)
			TOH(count - 1, helperRod, initialRod, finalRod)
```