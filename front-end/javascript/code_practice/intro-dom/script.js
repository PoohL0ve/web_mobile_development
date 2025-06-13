"use strict";

// Access the main container
const div = document.querySelector("#container");

// Create an element and add it to the container
const content = document.createElement("div");
content.classList.add("content");  // Add a class attribute
content.textContent = "This is the glorious text-content!";
div.appendChild(content);

// Add a paragragh with red text
const para = document.createElement("p");
para.classList.add("red");
para.textContent = "Hey I'm red!";
para.style.color = "red";
div.appendChild(para);

// Add blue h3 text
const heading3 = document.createElement("h3");
heading3.classList.add("blue");
heading3.textContent = "Hey I'm blue h3!";
heading3.style.color = "blue";
div.appendChild(heading3);

// Add a div with a black border and pink background
const pinkDiv = document.createElement("div");
pinkDiv.classList.add("pink");
pinkDiv.setAttribute("style", "border: 3px solid black; background-color: pink; padding: 20px;");
const pinkHeading = document.createElement("h1");
pinkHeading.textContent = "I'm a div";
const pinkPara = document.createElement("p");
pinkPara.textContent = "ME TOO!";
pinkDiv.appendChild(pinkHeading);
pinkDiv.appendChild(pinkPara);
div.appendChild(pinkDiv);

// Add event listeners
const buttonDiv = document.createElement("div");
buttonDiv.setAttribute("style", "border: 3px solid purple; padding: 20px; background-colour: grey; margin: 20px;");
const buttonOne = document.createElement("button");
const buttonTwo = document.createElement("button");
const buttonThree = document.createElement("button");
buttonOne.textContent = "Click ME!";
buttonTwo.textContent = "Click ME!";
buttonThree.textContent = "Click ME!";
buttonOne.classList.add("one");
buttonTwo.classList.add("two");
buttonThree.classList.add("three");


buttonOne.addEventListener("click", () => {
    alert("I'm a button!");
})
buttonDiv.appendChild(buttonOne);
buttonDiv.appendChild(buttonTwo);
buttonDiv.appendChild(buttonThree);
div.appendChild(buttonDiv);