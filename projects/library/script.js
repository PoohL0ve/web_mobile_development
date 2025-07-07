"use-strict";

// Array to store the book objects, also display them with the map function
const books = [];

let bookId = 0;

// Constructor for objects
class Book {
    constructor (id, title, author, genre, haveRead, pages) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.haveRead = haveRead;
        this.pages = pages;
    }
}

// Open the Dialog
function openBookDialog() {
    const dialog = document.getElementById("booksDialog");
    const title = document.getElementById("bookTitle");
    const author = document.getElementById("bookAuthor");
    const genre = document.getElementById("bookGenre");
    const haveRead = document.getElementById("haveRead");
    const pages = document.getElementById("pages");

    dialog.showModal();
    title.focus();
}

// Close the Dialog
function closeBookDialog() {
    const dialogClose = document.getElementById("booksDialog");
    dialogClose.close();
}

// Hide the Label
function hideLabel(labelId) {
    const label = document.getElementById(labelId);
    // Ensure the input and label are connected
    const input = document.getElementById(label.htmlFor);

    if (input.value.length > 0) {
        label.style.display = 'none';
    }

    else {
        label.style.display = 'block';
    }
}

// Add a new book to the book array/library
function addNewBook() {
    const title = document.getElementById('bookTitle').value.trim();
    const author = document.getElementById('bookAuthor').value.trim();
    const genre = document.getElementById('bookGenre').value.trim();
    const haveRead = document.getElementById('haveRead').value.trim();
    const pages = document.getElementById('pages').value.trim();

    // Check if the book already exists
    const alreadyExists = books.some(book =>
        book.title.toLowerCase() === title.toLowerCase() &&
        book.author.toLowerCase() === author.toLowerCase()
    );

    if (alreadyExists) {
        alert("This book cannot be added as it already exists");
        closeBookDialog();
        return;
    }

    // Create a new book with the constructor
    const newBookId = bookId++;
    const newBook = new Book(newBookId, title, author, genre, haveRead, parseInt(pages));
    books.push(newBook);

    // Refresh and close the dialog
    displayBooks();
    document.getElementById("bookForm").reset();
    closeBookDialog();
}

// Display the books using innerHTML
function displayBooks() {
    const booksContainer = document.getElementById('booksContainer');
    // Clear existing books before re-displaying
    booksContainer.innerHTML = '';

    // Loop through the books array
    books.forEach((book) => {
        const card = document.createElement('div');
        card.classList.add('book-card');
        card.dataset.id = book.id;

        // Create the HTML element
        card.innerHTML = `
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Genre: ${book.genre}</p>
            <p>Number of pages: ${book.pages}</p>
            <p>Read Status: ${book.haveRead}</p>
            <button class="remove-btn" onclick="removeBook('${book.id}')">Remove</button>
            <button class="read-status" onclick="toggleReadStatus('${book.id}')">Read Status</button>
        `;
        booksContainer.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const bookForm = document.getElementById("bookForm");
    bookForm.addEventListener('submit', function(event) {
        event.preventDefault();
        addNewBook();
    });
});

// Remove Book from List
function removeBook(bookId) {
    if (confirm("Do you really want to remove this book?")) {
        const bookIndex = books.findIndex(book => book.id === bookId);
        if (index !== -1) {
            books.splice(indexToRemove, 1);
            displayBooks();
        }
    }
}

// Change the read status
function toggleReadStatus(bookId) {
    const bookToToggle = books.find(book => book.id == bookId);
    if (bookToToggle) {
        bookToToggle.haveRead = (bookToToggle.haveRead.toLowerCase() === 'yes') ? 'No' : 'Yes';
        displayBooks();
    }
}

// Test the display function
books.push(new Book(bookId++, "The Hobbit", "J.R.R. Tolkien", "Fantasy", "Yes", 310));
books.push(new Book(bookId++, "Composing Programs", "John Denero", "Computer Science", "No", 210));
books.push(new Book(bookId++, "Patience and Sarah", "Isabel Miller & Emma Donoghue", "Romance", "No", 150));
displayBooks();