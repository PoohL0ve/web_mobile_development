"use strict";
// Get HTML elements
const rgbColor = document.getElementById("rgb-color");
const colorBlocks = document.getElementsByClassName("color-block");
const statusDisplay = document.getElementById("status");

function changeColor() {
    return Math.floor(Math.random() * 256);
}

let colorR = changeColor();
let colorG = changeColor();
let colorB = changeColor();

// Convert HTMLCollection to an Array
let colorArray = Array.from(colorBlocks);

rgbColor.textContent = `RGB(${colorR}, ${colorG}, ${colorB})`;  // Correct Color in Caps
let correctColor = `rgb(${colorR}, ${colorG}, ${colorB})`;

function generateRgb() {
    let red = changeColor();
    let blue = changeColor();
    let green = changeColor();

    return `rgb(${red}, ${green}, ${blue})`;
}

function updateBackground() {

    // Iterate the Array and change the color
    colorArray.forEach(element => {
        let newColor = generateRgb();
        element.style.backgroundColor = newColor;
        console.log(`New Color: ${element.style.backgroundColor}`);
    });
    
    //let complete = getMatchedColorArray(colorArray);
    // return complete;
    return colorArray;
}

function getMatchedColorArray(arr) {
    let foundIt = false; // Confirm if color is in Array

   // Search for the correct color in the arr
   for (const value of arr) {
        let checkValue = value.style.backgroundColor;
        if (checkValue === correctColor) {
            foundIt = true;
            break; // This works!
        }
    }

    if (!foundIt) {
        let index = Math.floor(Math.random() * arr.length); // random index;
        arr[index].style.backgroundColor = correctColor;
        console.log(index);
        return arr;
    }

    return arr;
}

let changedBackground = updateBackground();
let makeMatch = getMatchedColorArray(changedBackground);  // Fully changed and validated array

console.log(makeMatch);

// Add EventListeners to each element and change display message
function handleClick() {
    const clickedColor = this.style.backgroundColor;

    if (clickedColor === correctColor) {
        statusDisplay.textContent = 'Correct!';

        // Set All blocks to display the correct color
        makeMatch.forEach(value => {
            value.style.backgroundColor = correctColor;
        });

        console.log(`Correct Color Clicked: ${correctColor}`);

    } else {
                statusDisplay.textContent = 'Try Again!';
                // Grey out the element or remove it
                this.style.display = 'none';
                console.log(`Wrong Color guessed`);
    }
        
}

function changeDisplay(eventArr) {
    eventArr.forEach(e => {
        e.addEventListener('click', handleClick);
    });
}

function removeDisplayListeners(eventArr) {
    eventArr.forEach(element => {
        // Remove the exact same named function as the listener
        element.removeEventListener('click', handleClick);
    });
}

console.log('');
makeMatch.forEach(m => {
    console.log(`Clicked Color: ${m.style.backgroundColor}`);
});
changeDisplay(makeMatch);

// Restart The Game
function restartGame() {
    // Add New Values for Everything
    statusDisplay.textContent = 'Start Guessing!';
    colorR = changeColor();
    colorG = changeColor();
    colorB = changeColor();

    correctColor = `rgb(${colorR}, ${colorG}, ${colorB})`;
    rgbColor.textContent = `RGB(${colorR}, ${colorG}, ${colorB})`;

    // Add the display to the array
    colorArray.forEach(e => {
        e.style.display = 'inline-block';
    });
    console.log('');
    console.log(colorArray.length);

    let newArray = updateBackground();
    let newMatchedArr = getMatchedColorArray(newArray);
    removeDisplayListeners(newMatchedArr);
    changeDisplay(newMatchedArr);
}
