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

JavaScript naming convention follows the camelCase rule. Names can contain letters, digits, underscores, and dollar signs but can only start with a letter, $, or the _ value, however; for better readability use a letter.

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
**String** is a very common data type that has several methods that can be used:
```js
let text = "Going with the wind";
text.length

// methods to extract positions
let letter = text[3];
let letter2 = text.at(3); // can use negative numbers
let letter3 = text.charAt(2);
let codeValue = text.charCodeAt(5); 

// Extracting substrings
let clothes = "Jacket, Pants, Socks";
let jacket = clothes.slice(0, 6);
let lower = clothes.substring(8);

// Change lower and upper using toUpperCase and toLowerCase

// String can be padded
let startFront = clothes.padStart(5, "$");
let endBack = clothes.padEnd(5, "$");
```
To remove white space use:
- **trim()**: removes on both sides
- **trimStart, trimEnd**: removes from the start and the end of the string respectively

A string can be repeated:
- **repeat()**: string.repeat(4)

Strings can be replaced using two methods: replace and replaceAll; however, the second method requires the *g* flag as its a regular expression method:
```js
let sport = "Soccer is fun";
let newSport = sport.replaceAll(/Soccer/g, "Football");

// Convert to an array
let arr = newSport.split(" "); // takes delimiter in quotes
```

## Conditionals
There are ways in which decisions can be made:
```js
if (20 % 3 == 0) {
    result = "It's positive";
} else if (20 % 3 !== 0) {
    result = "It's negative";
} else {
    result = "Something is wrong";
}

// Switch statement
switch (semester_month) {
    case 1:
        result = "April";
        break;
    case 2:
        result = "June":
        break;
    case 3:
        result = "August";
        break;
    case 4:
        result = "November";
        break;
    default:
        result = "A long break";
}
```