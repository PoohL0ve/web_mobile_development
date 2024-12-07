JavaScript is the most popular web programming language, created by **Brendan Eich**.

Comments can be written in two ways in JavaScript:
```js
// Single ling comment
/*
* Multi-line comment
* This can also be nested
*/
```
Additionally, to avoid common issues with servers and engines, the "js" file can start with the *"use strict";* string. 

You can interact with the user in JS by using *prompt*, *alert*,*window.print* and *console.log*. The prompt and alert methods are pop-ups in the window (broswer), mainly implemented with a **HTML** file, while the other method is disployed in the console.

JavaScript can be written directly in the HTML file or in an external file, but must be placed in the *<script></script> tags in the HTML file. 

Executable code line is JS should be proceeded by a semicolon. Code lines should not be more than 80 characters long. 

Guided Topics
- [Variables and Operators](#variables-and-operators)
-[JS Data Types](#data-types-and-structures)

## Variables and Operators
Variables can be declared using any of the three keywords based on the usecase of a value:
- **var**: the value can be redeclared and reassigned;
- **let**: the value is a block value that can be changed;
- **const**: a block value that should not be changed

JavaScript naming convention foolows the camelCase rule. Names can contain letters, digits, underscores, and dollar signs but can only start with a letter, $, or the _ value, however; for better readability use a letter.

Operator Types
JS has 5 main operator types:
1. **Assingment**: *=, +=, -=, *=, /=, %= **= *
2. **Arithmetic**: +, -, *, **, /, %, ++, --
3. *Logical*: &&, ||, !
4. **Comparison**:
    - "==", "===": equal to, strict equal to (value and type)
    - "!=", "!==": not equal to
    - ">", "<": mosre than and less than
    - ">=", "<=": more than equal to, less than equal to
    - "?": ternary operator
5. **Type**
    - **typeof**: returns the data type of a value or variable - type of "Name"
    - **instanceof**: returns true or false: 123 instanceof Number

## Data Types and Structures