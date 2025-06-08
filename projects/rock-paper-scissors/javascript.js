"use strict";

// Choices of the game
const choices = ["rock", "paper", "scissors"];

// Variables to keep track of the score
let humanScore = 0;
let computerScore = 0;

/**
 * Makes a choice for the computer
 * @returns {string} The choice between "rock", "paper", or "scissors".
 */
function getComputerChoice() {
    const randomPosition = Math.floor(Math.random() * choices.length);
    return choices[randomPosition];
}

/** 
 * Obtains a choice from the user and validates it.
 * @returns {string} The user's choice between "rock", "paper", or "scissors".
*/
function getHumanChoice() {
    const yourCall = prompt("Choice between [rock, paper, scissors]: ").toLowerCase();
     // Check if the human entered the available choices
     if (choices.includes(yourCall)) {
        return yourCall;
     } else {
        alert("Please enter a valid choice: rock, paper, or scissors>");
        return getHumanChoice();
     }
}

/**
 * Plays a round of the game.
 * @param {string} human - The user's choice.
 * @param {string} computer - The computer's choice.
 * @returns {string} The winner of the round: "Human", "Computer", or "Both".
 */
function playRound(human, computer) {
    if (human === computer) {
        return "Both";
    } else if (
        ( human === choices[0] && computer === choices[2] ) ||
        (human === choices[1] && computer === choices[0]) ||
        (human === choices[2] && computer === choices[1])
    ) {
        return "Human";
    } else {
        return "Computer";
    }
}

/** 
 * Decides the winner of the game by accumulating the scores 
 * for each round played.
 * @returns {string} The winner based on the scores.
*/
function playGame() {
    let rounds = 5;
    for (let i = 0; i < rounds; i++) {
        const humanPlay = getHumanChoice();
        const computerPlay = getComputerChoice();
        const gameResult = playRound(humanPlay, computerPlay);

        if (gameResult === "Human") {
            humanScore++;
        } else if (gameResult === "Computer") {
            computerScore++;
        }
    }

    // Check for the winner
    if (humanScore === computerScore) {
        return `Interesting game! It's a draw: Your Score: ${humanScore}, Computer Score: ${computerScore}`;
    } else if (humanScore > computerScore) {
        return `You Won! Your Score: ${humanScore}, Computer Score: ${computerScore}`;
    } else {
        return `It's a sad day! You Lost: Your Score: ${humanScore}, Computer Score: ${computerScore}`;
    }
}


console.log(playGame());