# Breadth-first search — pseudocode

Searches for the first vertex in a graph fulfilling a predicate, using the "depth-first" method. For the algorithm to be correct, the graph shall not have loops.

## Input

- A vertex in a graph; the vertex to start searching from; for the algorithm to be correct, the graph shall not have loops

## Output

- Either of two values: if the graph contains any vertices fulfilling the predicate, that one of them that has been found first; otherwise, NIL

## The `BREADTH_FIRST_SEARCH` function

**Parameters:**

- `vt` — A vertex in a graph; the vertex to start searching from; for the algorithm to be correct, the graph shall not have loops
- `vVts` — A helper variable; always an empty array (between consecutive recursive invokations of the function, this is an array of vertices visited so far)
- `unvVts` — A helper variable; always an empty array (between consecutive recursive invokations of the function, this is an array of vertices known so far that are yet UNvisited)

**Output values:**

- Either of two values: if the graph contains any vertices fulfilling the predicate, that one of them that has been found first; otherwise, NIL

```
BREADTH_FIRST_SEARCH (vt, vVts, unvVts)
	if isGoal(vt)
	then return vt
	else
		newUnvVts <- concat(
			relativeComplement(
				relativeComplement(
					nbVts(vt),
					unvVts
				),
				vVts
			),
			unvVts
		)

		if empty(newUnvVts)
		then return nil
		else return BREADTH_FIRST_SEARCH(
			last(newUnvVts),
			concat(vt, vVts),
			subarr(
				newUnvVts,
				0,
				len(newUnvVts) - 1 - 1
			)
		)
```