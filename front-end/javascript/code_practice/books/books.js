"use strict";
// This file is for practicing to use JavaScript objects

/** */
function Books(title, author, pages, haveRead) {
    if (!new.target) {
        throw new Error("Book objects should be created using the 'new' keyword.");
    }
    // Elements of the book object
    this.title = title;
    this.author = author;
    this.pages =pages;
    this.haveRead = haveRead;

    // Function to display book information
    this.info = function() {
        return `${this.title} by ${this.author} has ${this.pages} pages. Was it read? 
        ${this.haveRead ? "Yes" : "No"}`;
    }
}

const story = new Books("The Hobbit", "J.R.R. Tolkien", 310, true);
console.log(story.info());

/* 
    Using classes, the newer way
    class Books {
    constructor (title, author, genre, haveRead, pages) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.haveRead = haveRead;
        this.pages = pages;
    }
}
*/