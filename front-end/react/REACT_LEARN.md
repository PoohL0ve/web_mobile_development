# What is React?
React is a front-end JavaScript library used for building interactive user interfaces. The library provides numerous APIs (functions) for building UIs. React allows programmers to take a declarative approach to programming. In other words, the developer tells React the *what* and the library figures out the *how*.

To use React directly in an HTML file, two scripts will have to be loaded from **UNPKG**: the core react library and the react-dom. For the code to work it has to be written in JSX and the Babel compiler has to be added to the file.

Comments in React are written with:
```jsx
{/* This is a React Comment */}
```

React has three core concepts:
1. Components: different JS functions that are reusable;
2. Props: Changes the behaviour of a component.
3. States:

Use **vite** to create a react app.
```bash
npm create vite@latest .  #"." if you are in the folders
nom run dev
```

Concepts to Understand:
- [**What are Components?**](#react-components)
- [**How To Render Lists in React?**](#render-lists-in-react)
- [**What are Props?**](#props-in-react)

## 🧩 React Components
Components are reusable pieces of code that combines the functionalities of JavaScript (functions), HTML, and CSS. A component must start with a capital letter and have the *export default* statement either at the end of the file followed by the main function to export or at the main function's header declaration:
```jsx
// One way to create and export
export default function App(){return ();};
// Another way
function App(){
    return ();
}
export default App;
```
If the markup is not on the same line as the return statement use parentheses.
Create a separate folder in the *src (source)* folder for the compoentns of an app. The convention is to call the folder *components*. The main App.jsx (for JS-React) is the one that will be rendered in the main.jsx file, so import the components to the App file.

In the App file the component needs to be imported and returned in the function's body:
```jsx
import Hello from './components.Hello.jsx'

export default function App() {
    return <Hello />
}
```
The components folder is really just a folder for reusuable components for pages.
JSX stands for **JavaScript XML** which allows you to write HTML and JS together in a file. JSX file must:
- Return a single element
- Elements must be closed
- Attributes must be written using camelCase: *className=*

Expression are JavaScript expressions which can be variable, simple calculations or anything. In JSX, they must be written in curly brackets.
```jsx
{/* The expression will execute and show the result */}
<p>{3 * 2}</p>
```
This functionality gives us a way to provide dynamic content. That is, only change in one place of the code when needed and it automatically updates.

## Render Lists in React
Array elements (can be objects) can be rendered to the DOM using JS array functions in *map()* and *filter()*. A simple way to use the map() for a list of items is:
```jsx
const places = ["USA", "France", "UK", "Portugal", "Canada"];
const countryItems = places.map(place => <li>{place}</li>);
return <ul>{countryItems}</ul>;
```
Create id elements to use for the key argument (key={id}) in react. A better way for structured data is to have an external *.js* file containing the array content and import it to the file that needs it. Don't forget to acess that data using dot notation.
Elemenst can be filtered before being mapped to the DOM.

Another way to use the map() method is to destructure the attributes so that you don't have to continuously use the dot notation:
```jsx
<main>
    {lovers.map(({name, age, location, id}) => (
        <ul key={id}>
            <li>{name}</li>
            <li>{age}</li>
            <li>{location}</li>
        </ul>
    ))}
</main>
```

## Props in React
Properties allow values and attributes (properties) from parent components to be passed to the child components. Props can be any JavaScript attribute like functions, objects, and arrays. Props are **read-only** values. The child component must accept the props argument and it can access any of the parent's attributes.
```jsx
// Parent Component 
function App() {
  const name = "Alice";
  const age = 30;

  return (
    <div>
      <ChildComponent name={name} age={age} />
    </div>
  );
}

// Child Component 
function ChildComponent({ name, age }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}
```
It's a one way flow of data sharing. Props are immutable and if they need to be changed, then *set state* functionality will have to be used. A good practice is to use proptypes when using Props in React. Proptypes lets the developer explicitly define the data types used by the properties. It helps with code quality and potential prevention of errors.
```jsx
import PropTypes from "prop-types"

export default Products({name, price, inStock}) {
    return (
        <div>
            <h2>Product Name: {name}</h2>
            <p>Price: ${price}</p>
            <p>Available: {inStock ? "Yes" : "No"}</p>
        </div>
    )
}

Products.propTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
    inStock: PropTypes.bool
}

Products.defaultProps = {
    name: "Unavailable",
    price: 0,
    inStock: false
}
```
React do not directly show Boolean values (true/false). The prop-types functionality is used in the child component. The values can be changed in the parent component, where all values except string need the {} braces: price={22}.