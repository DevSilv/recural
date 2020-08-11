# Dev doc

## Formatting

### Pseudocode

- There is to be less than three consecutive opening parenthesis/brackets/braces of the same type in one line
- A line is to have less than or equal to 80 characters
- The if-then-else statement is to be written with both the `then` and the `else` clauses starting from new lines; for example:

    ```
    if something()
    then something2
    else something3
    ```

    Nested clauses are to be indented by 4 spaces, like this:

    ```
    if something()
    then something2
    else
        if something3()
        then
            if something4()
            then something5
            else something6
        else
            if something7()
            then something8
            else something9
    ```

### JavaScript

- There is to be less than two consecutive opening parenthesis/brackets/braces of the same type in one line
- A line is to have less than or equal to 80 characters
- The ternary operator (i.e., `?:`) is to be written with both its parts starting from new lines; for example, instead of writing it like this:

    ```
    isSomething() ? something2 : something3
    ```

    it is to be written like this:

    ```
    isSomething()
        ? something2
        : something3
    ```

### Bash

- In AND lists and OR lists, every element with appropriate operator (i.e., `&&` and `||`, respectively) is to be written in a separate line; for example:
    - An AND list is to be written:
    
        ```
        something \
            && something2 \
            && something3 \
            && ...
        ```

    - An OR list is to be written:
        
        ```
        something \
            || something2 \
            || something3 \
            || ...
        ```

## Coding conventions

### JavaScript

- If an imported module is crucial for the module that it is imported to, then import it like:

    ```JavaScript
    const { memberName } = require(...);
    ```

    If it is not, then import it like:

    ```JavaScript
    const moduleName = require(...);
    ```

    In that, maybe, it will be easier to differentiate the importance of imported module members. Consequently, it is expected that the clarity of the code will increase.

### Bash

- Always put at least one pair of quotation marks (`""`) within a piece of code. Particularly, if a piece of code does not require quotation marks at all, put them "outside-most" (i.e., around this whole piece of code).

    A piece of code is to be understood differently, based on what code it is. I suspect that most often it will be the right hand side of an assignment, a line, the "inside" of an `if` clause, and the like.

    For example, instead of this:

    ```bash
    someVariable1="X"
    someVariable2=$(echo "${someVariable1}")
    ```

    do this:

    ```bash
    someVariable1="X"
    someVariable2="$(echo ${someVariable1})"
    ```