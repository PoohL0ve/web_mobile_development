JavaScript is the most popular web programming language, created by **Brendan Eich**.
Run commands in the broswer using:
- **MAC**: Cmd+Option+I/J
- **Windows/Linux**: CTRL+SHIFT+I/J

The **parseInt()** is used to convert a string to an integer.

Comments are used to explain the *why and what* and can be written in three ways in JavaScript:
```js
// Single ling comment
/*
* Multi-line comment
* This can also be nested
*/

/** 
 * Adds more details
*/
```
The **typeof** operator can be used with or without parentheses:
```js
console.log(typeof(8));
console.log(typeof 8);
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

The multiplication operator turns a string to a number but combines strings for addition:
```js
var a = "5";
var b = 2;
var c = "3";
console.log((a * b) + (b * c)); // 16
console.log(b + c); // "23"
console.log(a + b); // "52"
```
Priority goes: 
- Parentheses -> Unary -> Multiplication/Division -> +/-

**Increment** and **Decrement** increases and decreases values respectively:
- *prefix*: increases or decreases the value before use: --a;
- *postfix*: increases or decreases the value after use: a++;
```js
let a = 5;
let b = ++a;
console.log(a); // 6 b is also 6

let c = 4
let d = c++
console.log(c); // 5 d is 4
```
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
**To run tests use npx jest filename** (ODIN)

Switch statements can use the **break** or **return** keywords once a case is found:
```js
let city = "Paris";
switch (city) {
  case "London":
    console.log("The price is $240");
    break;
  case "Paris":
    console.log("The price is $150"); 
    break;
  default:
    console.log("City not available");
    default;   
}
```

## Regular Expressions
Regex allows one to search through a string of text.
```js
let finality = " You are annoying and confusing. We cannot be friends";

// Simple regex
/an/gi // finds all an strings and case-insensitive
/e+/g // match one or more e's
/e+a?/g // a is optional
/re*/g // matches all r's but re is optional

/.s/g // matches one character before the s
/\./g // matches all periods
```
More simple matches:
- *\w*: all words
- *\s*: white space or not a character
- *\S*: not a whitespace
- *\W*: not a character

```js
// Match a specific number of characters
/\w{3}/g // 3 and more characters
/\w{3, 6}/g // 3-6 characters long

// Ranges
/[a-zA-Z]at/g // any string that ends with at

// Grouping with or
/(S|s)he/g // S or s and ends with he

// Test the beginning and end
/^A/g // Test the entire statement to see if it starts with A
/^A/gm // locates each line that starts with A
/\.$/gm 

// Locate things before and behind
/(?<=[tT]he)./g // locates what comes after The or the
/(?<![tT]he).//g // invert
/.(?=an)/g // all characters followed by an

// Match for numbers
/\d{8}/gm // matches eight numbers in a row
/\d{3}[ -]?\d{3}[ -]?\d{4}/gm
// Groups can be named
/(?<areacode>\d{3})[ -]?(\d{3})[ -]?(\d{4})/gm
```

## Functions
They are used to make code simpler as they are reusable
```js
function findIt(item) {
    return "The " + item + " was found.";
}

// Default unknown value
function findNumber(number) {
    return (number ?? "Number not found");
}

// Function expression
const bye = function() {
    console.log("Bye");
}

// Arrow function
const bye = () => console.log("Bye");
const simple = text => { return text}; // one parameter = no ()
const simeple2 = (t) => t; // no {}
```
An **anonymous** function doesn't have a name and can be created the traditional way or using a function expression. It is normally used immediately. **Hoisting** occurs when function declarations are moved to the top of where they were created and can be executed.
```js
// Using grouping operator
(function () { // Call immediately
  console.log('Hello world!');
})(); // Any argument can be placed

(function (text) {
  console.log(text);
})("Hello world!");

```

Common built-in functions:
- **isNaN()**
- **isFinite()**
- **parseFloat(), parseInt()**

## Loops
Loops are useful for dealing with repetition. There are several types of loops in JS:
```js
while (condition) {
    // code
    // variable that increments or decrements
}

do {
  // loop body
} while (condition);

for (begin; condition; step) {
  // ... loop body ...
}

// Works with objects and Arrays
for (key in object) {}
  // executes the body for each key among object properties
let fruits = ["apple","orange", "banana"];
for (fruit in fruits) {
  console.log(fruits[fruit]);
}


// Works with arrays
for (let fruit of fruits) {
  alert( fruit );
}
```

## Arrays
Arrays are lists objects and have several methods:
```js
const values = [3, 5, 6, 7];
const words = ["JavaScript", "is", "truly", "interesting"];
values.push(9)
words.join(" "); // A string
const someValue = values.join("-");
// toString() convert the elements to a string
// The map method applies a function to each element
const squaredNumbers = values.map((value) => {
    return Math.pow(value, 2)
})

// The filter method filters
const filteredValues = values.filter((value) => {
    return value % 2 === 0
})

// The reduce simplifies the values to a single one
const total = values.reduce((runningTotal, value) => {
    return runningTotal + value
}, 0)
// Other common methods: find, some, every, includes

Array.isArray(obj); // true or false
const lastItem = colors[colors.length - 1]; // last item
```
Arrays can have different types of elements.
Other Array Methods include:
```js
// Fill with anything: optional start and end
const numbers = new Array(5).fill(2, 0, 3) // last exclusive

// From converts an iterable to an array
// Array.from(object, MapFunction, thisValue)
Array.from([3, 5, 7], x => x * x); // [9, 25, 49]
```
The **Array.of()** method can be used to create an array. It is different from using the constructor for integers, in that if one integer is passed it will create an array of a single integer and not undefined elements.

The **forEach()** method has two arguments in callback and a placeholder for the *this* keyword to the callback.:
```js
const arrayFruit = ["pineapples", "oranges", "apples"];
arrayFruit.forEach(function(value) {
  console.log("Today I ate " + value);
});

// Using other arguments of the callback
function showItem(item, index, array) {
  console.log("My value is " + item + ". I’m the " + index + " element of array " + array);
}
arrayFruit.forEach(showItem);
```
Searching an array:
- **includes()**: arr.includes(value, opt), optional tells where to search - true or false;
- **find()**: returns the first matching element: arr.find(s => s.lang === 'English');
- **findIndex()**: returns the index
- **indexOf()/lastIndexOf()**: takes an optional value to start searching, finds the first index of an element.

```js
function search(objects) {
// Write your code here 
  const name = objects.find(n => {
    return n.name === "John" && n.age === 30;
  })
  return name ? objects.indexOf(name) : -1;
}
```

## Document Object Model
The DOM is a tree like structure that respresents the elements of a webpage in the form of nodes. It has a parent child relationship with the elements.
```js
// Get elements by class, id, property
const header = document.getElementById("header");
// Returns an HTMLCollection list
const showSome = document.getElementsByClassName("show-some");
const listElements = document.getElementsByTag("li");

// Use selectors to target elements: querySelector, querySelectorAll
const container = document.querySelector("#container"); // first element match
// Returns a NodeList which can use forEach method
const para = document.getSelectorAll(".container p");

// selects the first child of #container => .display
const display = container.firstElementChild;
const controls = document.querySelector(".controls");
// selects the prior sibling => .display
const display = controls.previousElementSibling;
// firstElementChild lastElementChild
```
The node list returned from the querySelectorAll method can be converted to an array using **Array.from()**. Simple operations:

Modification methods include:
- **innerHTML**: returns a HTML string, can also be used to delete in content by setting it to an empty string
- **textContent**: used for plain text; do not use tags with it
- **createElement, createTextNode**: elements and texts
- **appendChild**: accepts a node and places it last to an element
- **remove**: deletes an element
```js
// Create an element
const para = document.createElement("p");
// Append Nodes
parentNode.appendChild();
parentNode.insertBefore(newNode, referenceNode);

// Remove Nodes
parentNode.removeChild();
```
Events are actions that occur on the webpage through:
- functions on HTML elements
- using methods like onclick
- using event listeners

Event listeners allows you to respond to various user interactions by attaching event handlers to specific targets. It takes two main parameters, the event to listen for, the function to add to it, and an optional third argument - specify options.
```js
// Using event listeners
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  alert("Hello World");
});
```
There are numerous events and some can be can be categorised as:
- **mouse**: click, dblclick, contextmenu (right-mouse), mouseenter (mouse moves towards the element), mouseleave, mousemove
- **keyboard**: keydown (any key), keyup (key released), keypress (except Shift, Fn, or CapsLock)
- **focus**: focus, blur (looses focus)
- **form**: submit, focus, blur, change
- **window**: load, resize, scroll

Sometimes an event may need to be removed after a condition has been met. The method uses the same parameters as the add event:
```js
btn.removeEventListener( "click", () => {alert( "Hello World" ); });
```

### Window Objects
It is an object that represents a browser window. It is a global object where the properties can be accessed from anywhere in the code. It has properties like closed and innHeight/Width. It has methods like alert(), confirm(), close() - can only be used if the open() was used in JS, and prompt(). 

The **Web Storage API** allows browsers to store data through the use of key value pairs. The **localStorage** keeps saved data in the browser even when it is closed and re-opened.
```js
window.localStorage // Access the object
window.localStorage.setItem(key, value); // only strings
window.localStorage.getItem(key)
window.localStorage.removeItem(key)
window.localStorage.clear()
window.localStorage.lenght
// Session storage can only be accessible when server are used
window.sessionStorage
```

## Organising JS Code
### Object and Object Constructors
An object can be defined using the object literal and data can be retrieved by using the **dot notation** or the **bracket notation**.
```js
/* Create and Access data from an object */
const player = {
    name = "Palmer",
    age = 22,
    "main style": function() {
        return "Assist a goal!";
    }
};

player.name // Cole
player["main style"] // Assist a goal!

delete player.age;  // deletes a property
```
An **object constructor** is a function that starts with a capital letter and uses the **this** keyword. To create new objects using the constructor the **new** keyword must be used.
```js
function Player(name, age) {
    // Property to ensure the new keyword is used
    if (!new.target) {
        throw Error("You must use the new keyword");
    }
    this.name = name;
    this.age = age;
    this.favouriteFoot = function() {
        console.log("Left Foot");
    };
}

const noni = new Player("Noni", 23);
noni.favouriteFoot() // Left Foot

// Can remove the function word
let person = {
  greetings() {
    console.log("Hello");
  }
};
```
#### Prototypes
All objects in JS has a prototype. A **Prototype** is an orginal object that all objects inherits from. Properties and methods can be attached to objects by using the prototype:
```js
Player.prototype.sayHello = function(){
    return "Hello, I'm a footballer";
}
```
The **Object.getPrototype()** method can be used to get an object's prototype. The **valueOf()** methods allows us to know the values of an object. The **hasOwnProperty()** states whether an object has its own property.
```js
noni.valueOf();
noni.hasOwnProperty("valueOf"); // false
Object.prototype.hasOwnProperty("valueOf"); // true
```
The **Object.setPrototypeOf()** takes two arguments where the first one is the object that inherits and the second is the object that has to be inherited from.

**Functional mixins** are functions created for extending existing objects. It allows you to use closures. The **Object.assign()** method allows us to add the mixing to an object.
```js
class Date {
    consturctor(name) {
        this.name = name;
    }
};
// Date Functionality
const dateFunctionality = {
    showUp: () => return `Go to the meeting place`;
    talk: () => return `Hello, thank you for coming.`;
};

Object.assign(Date.prototype, dataFunctionality); // Instances will have all the functionalities
```
Mixins can also inherit from other mixins.

### Classes
**Getters** and **setters** are used to access values in an object.
```js
let user = {
    name: "Mary",
    surname: "Gook",

    get fullName() {
        return `${this.name} ${this.surname}`;
    },

    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    }
}
```
### ES6 Modules
ESM allows each module to have its own private scope where we import and export them to communicate between files.
```js
// File that exports methods
const greeting = "Hello world!";
const farewell = "Goodbye world!";
// Could also use: export const greetting = "Hellow world!"
export {greeting, farewell};

// File that imports
import {greeting, farewell} from "./exportingFile.js";
```
When exporting using the default syntax the object does not have aname assigned to it; therefore, it can be named anything in the importing file:
```js
// Exporting file
const greeting = "Hello world!";
export default greeting; // no name attached when imported

// Importing file
import helloWorld from "./exportingFile";
```
### npm
It is a package manager that provides libraries and other tools that can be used it project. The package manager provides a command line tool that we can use. Additionally, it allows us to add our own packages to it.

The package manager revolves around a **package.json** file which contains things like version, scripts, and dependencies for a project. npm can read the file and install dependencies etc. A package can be installed locally by using **nodes require** syntax. However to globally install a package:
```bash
npm install lodash

# Creating a package.json from the command line
npm init # Asks questions to build the file
npm init --yes # creates a default file from your project
# Config others
npm set init-author-email "example-user@example.com"
npm set init-author-name "example_user"
npm set init-license "MIT"
```
Any package installed are dependecies. Developer dependencies are packages that user-facing app does not use.
### Webpack
Webpack bundling is is the process of taking all the individual pieces of your website's code and assets, optimizing them, and then combining them into a smaller, more efficient set of files that browsers can download and run much faster.
When the package.json file is created remove the *type* property before installing webpack. To install the two packages for development, not for the web browser use *save-dev* or *-D*.
```bash
npm install --save-dev webpack webpack-cli
```
The package would create a **node_modules** directory and a **package-lock.json** file. The node_modules is where webpack's code and many other stuff is stored and the package-lock.json file is a file npm uses to track specific package information. The work inside the **src** builds into the **dist** directory, where it can be deployed.
```bash
mkdir src && touch src/index.js src/greeting.js
```
The webpack config file **webpack.config.js** will contain things like the entry point, the destination, and pluging and loaders. This file should be in the project root. To run webpack use: **npx webpack**. This will create a dist directory that contains a **main.js** file.
```bash
# Install the HTMLWebpackPlugin
npm install --save-dev html-webpack-plugin
```
Add a html file like *template.html* in the src folder and do not include the *script* tag as the bundle tool (HTMLPlugin) will handle it.
```js
// webpack.config.js
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Add to exports
plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
```
For CSS there are two files:
- **css-loader**: stores the css that are imported to a js file in a string.
- **style-loader**: takes the string and adds the js that would apply the code
```bash
npm install --save-dev style-loader css-loader
```
Add the following after the plugins:
```js
module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
```
Import the css to the js files.

Local images has to be configured. If the image is in the CSS where a url() is used then there is nothing to do as css-loader handles it. If the image is in the HTML then the **html-loader** has to be imported:
```bash
npm install --save-dev html-loader
```
The modules array then has to include:
```js
{
  test: /\.html$/i,
  loader: "html-loader",
}

// For images used with JS
{
  test: /\.(png|svg|jpg|jpeg|gif)$/i,
  type: "asset/resource",
} // then import to the JS module
```

To avoid running npx webpack each time a change is made, download **webpack-dev-server** which automatically reloads. To ensure it works add: 
```js
devtool: "eval-source-map",

devServer: {
    watchFiles: ["./src/template.html"],
  },
```
To run the server use **npx webpack serve**. Any changes made would not be reflected, thus, use **CTRL + C** to stop the server to add changes to the config file.

Instead of running the webpack command line commands for building, deploying, and developing, we can use the **npm run <tool>** instead. This is done by adding a **scripts** object to the package.json file:
```js
{
  // ... other package.json stuff
  "scripts": {
    "build": "webpack",
    "dev": "webpack serve",
    "deploy": "git subtree push --prefix dist origin gh-pages"
  },
  // ... other package.json stuff
}
```

### JSON
JavaScript Object Notation is a string based data format that's like JS Objects that is used to transmit data across networks. **Deserialisation** is converting a string to native object, and **serialisation** is converting a native object to a string. The **parse()** method is used to read JSON objects by converting them to a JS object. The **stringify()** method converts a JS object to a JSON object.
### OOP Principles
**Tightly coupled** objects means that an object is highly dependent on another and altering one requires altering the other. Aim to build loosely coupled objects. 

The **SOLID** standard is made up of several principles:
|Principle           | Description                                |
|:------------------:|:-------------------------------------------|
|`Single Responsibility`| All classes, methods, functions etc should only have one single responsibility, that is, one reason to change.|
|`Open/Closed`| Open for extension, meaning new functionalities and behaviour can be added, while closed for modification means that the source code should not have to be altered to add new features.|
|`Liskov Substitution`| If a class is inheriting or created by using another, it should be able to swap out the other without breaking the program.|
|`Interface Segregation`| No client should be forced to dependend on interfaces they do not use.|
|`Dependency Inversion`| high-level modules should not depend on low-level modules; both should depend on abstractions. Additionally, abstractions should not depend on details; details should depend on abstractions. The principles removes the need for parts of a code to communicate directly.|


## Working with Time and Data
**Scheduling a Call** is simply providing the time when something should occur. The **setTimeout()** function is used for that. The method can be in the form of function, time, and argument for a method like *setTimeout(call, 2000, "you")*.
```js
// Schedule a call for 5 seconds after
setTimeout(function() {
    console.log("Miss Me");
}, 10000); // ten seconds delay

clearTimeout(missMe) // clear resources
```
The **setInterval()** function is used to repeat a function:
```js
function alarm(time) {return `It's ${time}! Wake Up Sleepy Head!`;}
let wakeup = setInterval(alarm, 5000, 8); // Every 5 seconds for 8 o'clock

// Stop interval
clearInterval(wakeup) // saves resources
```
Always use both functions with a variable so that the functions can be cleared.

The time value for the **Date()** object starts from **January 1970**. The *ISO Standard* is used for dates in the form *(YYYYMMDD)*. You can also use:
- *short-format*: 07/09/2025
- *long-format*: Jul 09 2025

The parameters are year, month, day, hour, minute, second, and millisecond, where the month starts at 0; thus, January is 0.
```js
let newDate = new Date(2025, 07, 09, 12, 46, 10, 5);
let march = new Date(2025, 2); // March 1st
```
|Date Methods                   |
|:-----------------------------:|
|`getFullYear` - retrieves the year|
|`getMonth`|
|`getDate` - retrieves the day|
|`getHours`|
|`getMinutes`|
|`getSeconds`|
|`getMiliiseconds`|

## Dealing with Randomness
The **Math.random()** method is used to generate random numbers. It returns a float between 0 (inclusive) and 1 (exclusive). To get larger numbers it can be multiplied by the maximum value for the range of numbers.
```js
Math.random() * 10; // random float from 0 - 10

// Return an integer by rounding down
Math.floor(Math.random() * 10);
// Using ranges
Math.floor(Math.random() * (maxValue - minValue)) + minValue;
// Include the numbers
Math.floor(Math.random() * (+maxValue +1 - +minValue)) + minValue;
```

## Closures
A **closure** is the ability to access a parent scope's data even after the function has been terminated. The potential parent variable may not be cleaned up or garbage collected. In others words a closure is a function with preserved data from the parent function. When called twice you can add the argument for the second function if the first call is stored in a variable:
```js
function createGreeting(greeting = "") {
  const myGreet = greeting.toUpperCase();

  return function(name) {
    return `${myGreet} ${name}`;
  };
}
// Store in a varibale
const sayHello = createGreeting('hello');
console.log(sayHello('wes'));
```
The variable in the outer function is accessed at a lower scope. Another way is with private variables which cannot be accessed from outside. In the following example each time the game is ran the score will increment:
```js
function createGame(gameName){
  let score = 0;

  return function win(){
    score ++;
    return `Your name ${gameName} score is ${score}`
  }
}

const hockeyGame = createGame('Hockey');
```

## JS in The Real World
### Linting
Linters are tools that would scan your code to valid the style based on a set of rules. The most common linter is ESLint. To use ensure there is a package.json file and install locally not globally using:
```bash
npm init @eslint/config@latest
```
Formatters are similiar to linters but they do not look for style errors, but things like spacing, indentation etc. The most common and free is Prettier. Both are installed as dev dependencies.
### Dynamic User Interface Interactions
It involves things like drop-down menus and image carousels.
### Form Validation With JS
The **Constraint Validation API** is a set of methods that can be used on textarea, select, button, fieldset, input, and output.
### ES6

## Asynchronous JS and APIs
Asynchronous events occur at different times independent of each other, that is tasks that run in the background. A **thread** is a unit of execution within a process. Threads are run concurrently in asynchronous programming. This type of programming often involves async/await, promises, and callbacks, where a process may take time such as fetching data from an API.

When the script tag uses the async attribute the browser will download the HTML until the script is downloaded, where it executes the JS code and then continue to download the HTML. The **defer** scripts wait until the HTML parsing is complete. Use async when the order of execution does not matter, and defer when they do.
```js
<srcipt src="testing.js" async></script>
<srcipt src="testing.js" defer></script>
```

A **promise** in JS is an object that represents the eventual completion or failure of a process in asynchronous programming.
```js
let p = Promise((resolve, reject) +> {
  let a = 4;
  if (a % 2 === 0) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});
// Now we use the .then and .catch to run what was in the promise
p.then((message) => {
  console.log(`This was the message: ${message}`);
}).catch((message) => { 
  console.log(`Error caused by: ${message}`);
})
```
Promises a good to run background code that doesn't make the program stop and wait for it. It also allows multiple chaining using the *then* method.

Servers that are created for serving data for external use are reffered to as *Application Programming Interfaces*. APIs are generally urls that may be provided to you with your own special key which you can store to use the service. The **fetch API** allows web apps to make requests to and from a server through the *fetch()* method, which returns JSON data. 
```js
fetch("someURL").then(function(response) {
  // Something
}).catch(function(err) {
  // Something
})
// Cross Origin Resource Sharing: allows access from requests
fetch('url.url.com/api', {
  mode: 'cors' // Set mode property
});
```
If the fetch API is used without a HTTP method, it defaults to *GET*.
```js
fetch("https://api.example.com/data")
  .then(response => response.json()) // Must convert to JSON
  .then(data => console.log(data));
```
To send data to the server use the *POST* method:
```js
fetch("https://api.example.com/data", {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: json.stringify({
    name: "Jane Doe",
    address: "123 Apple Street, Wonderland"
  })
})
```
The *PUT* method is used to update data, while the *DELETE* is used to remove data. Both method require the id in the url:
```js
fetch("https://api.example.com/data/54", {
  method: 'DELETE'
})
```

The **async** informs the JS engine that the function is an asynchronous one which allows you to use the await keyword. It is similiar to a Promise in that if it's successful then the response will be like the then and so on. The **await** keyword pause the program until a value is returned. Note async can be used **ANYWHERE** a function can be used.
```js
const findPeople = async () => {
  const people = await server.getPeople();
  const person = people.find(person => { return person.name === name });
  return person;
}
```
Add the try/catch block for handling errors.

The **JS Engine** reads, understands, and executes the code written. The most popular JS Engine is *V8* developed by Google and also used in Nodejs. It first parses the code to look for syntax error, then compile it to byte code, where the engine executes it. The JS runtime is the environment where the code is executed. It includes the JS Engine and it allows JS to do more than just write code.

The **Geolocation API** provides a way to know a user's location; ensure the user gives their permission for the website to request their location. It uses the *getCurrentPosition* method to do so:
```js
navigation.geolocation.getCurrentPosition(
  (position) => {
    console.log(`Latitude: ${position.coords.latitude}`);
    console.log(`Longitude: ${position.coords.longtitude}`);
  },
  (error) => {
    console.log(`Error: ${error.message}`);
  }
);
```

## Computer Science Re-cap
An **algorithm** is a step by step instruction to complete or do something. **Psuedo-code** is an Enlgish like way to write an algorithm.

**Recursion** is a type of algorithm in which a function calls itself to break a large problem into smaller pieces; a process known as *Divide and Conquer*. The **base** case or base or recursion is when the recursion should stop.
```js
function pow(x, n) {
  // Base case is where n == 1
  return (n === 1) ? x : x * pow(x, n - 1);
}
/* What's happening, let's say x = 2, n = 3 
  2 * pow(3 - 1)                          | 2 * 2 = 4 * 2
    2 * pow(2 - 1)                        | 2 * 1 = 2
      2 * pow(1 - 1) n == 1, thus stop    | 
      The steps go up, as the result of the nested calculation is multiplied to the result of the calculation above it
*/
```
The recursion depth is the amount of times the function is called and in most JS engines the maximal recursion depth is 10,000. The **call stack** is what allows the program to track and resolve function calls.
## Resources
- [Public APIs](https://github.com/n0shake/Public-APIs)