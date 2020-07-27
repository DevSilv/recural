# Depth-first search — pseudocode

Searches for the first vertex in a graph fulfilling a predicate, using the "depth-first" method. For the algorithm to be correct, the graph shall not have loops.

## Input

- A vertex in a graph; the vertex to start searching from; for the algorithm to be correct, the graph shall not have loops

## Output

- Either of two values: if the graph contains any vertices fulfilling the predicate, that one of them that has been found first; otherwise, NIL

## Plain-English version (the same logic as in the "code version" below)

1. Check whether the current vertex is the goal.
	1.1. If true:
		1.1.1. Return the current vertex.
	1.2. If false:
		1.2.1. Add the current vertex to the list of visited vertices.
		1.2.2. Get the list of neighbor vertices of the current vertex.
		1.2.3. Exclude already existing unvisited vertices from the list
			of neighbor vertices of the current vertex.
		1.2.4. Exclude already visited vertices from the list of neighbor
			vertices of the current vertex.
		1.2.5. Add the list of neighbor vertices of the current vertex
			to the list of unvisited vertices.
		1.2.6. Check whether the list of unvisited vertices is empty.
			1.2.6.1. If true:
				1.2.6.1.1. Exit unsuccessfully.
			1.2.6.2. If false:
				1.2.6.2.1. Set the first unvisited vertex as the new one
					to visit.
				1.2.6.2.2. Remove the first vertex from the list of unvisited
					vertices.
				1.2.6.2.3. Repeat from the point 1.

## "Code version" (the same logic as in the plain-English version above)

### The `DEPTH_FIRST_SEARCH` function

**Parameters:**

- `vt` — A vertex in a graph; the vertex to start searching from; for the algorithm to be correct, the graph shall not have loops
- `vVts` — A helper variable; always an empty array (between consecutive recursive invokations of the function, this is an array of vertices visited so far)
- `unvVts` — A helper variable; always an empty array (between consecutive recursive invokations of the function, this is an array of vertices known so far that are yet UNvisited)

**Output values:**

- Either of two values: if the graph contains any vertices fulfilling the predicate, that one of them that has been found first; otherwise, NIL

```
DEPTH_FIRST_SEARCH (vt, vVts, unvVts)
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
		else return DEPTH_FIRST_SEARCH(
			first(newUnvVts),
			concat(vt, vVts),
			subarr(
				newUnvVts,
				1,
				len(newUnvVts) - 1
			)
		)
```