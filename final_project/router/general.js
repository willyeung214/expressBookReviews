const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
  // Task 2: User Registration
  // Write your code here
  const newUser = req.body;
  users.push(newUser);
  res.status(200).json({ message: "User registered successfully" });
});

// Task 1: Get the book list available in the shop
public_users.get('/',function (req, res) {
  // Write your code here
  res.status(200).json(books);
});

// Task 3: Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
  // Write your code here
  const isbn = req.params.isbn;
  const book = books.find(book => book.isbn === isbn);
  if (book) {
    res.status(200).json(book);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});
  
// Task 4: Get book details based on author
public_users.get('/author/:author',function (req, res) {
  // Write your code here
  const author = req.params.author;
  const filteredBooks = books.filter(book => book.author === author);
  if (filteredBooks.length > 0) {
    res.status(200).json(filteredBooks);
  } else {
    res.status(404).json({ message: "No books found for the author" });
  }
});

// Task 5: Get all books based on title
public_users.get('/title/:title',function (req, res) {
  // Write your code here
  const title = req.params.title;
  const filteredBooks = books.filter(book => book.title === title);
  if (filteredBooks.length > 0) {
    res.status(200).json(filteredBooks);
  } else {
    res.status(404).json({ message: "No books found with the title" });
  }
});

// Task 6: Get book review
public_users.get('/review/:isbn',function (req, res) {
  // Write your code here
  const isbn = req.params.isbn;
  // Code to retrieve book reviews based on ISBN from your data source
  res.status(200).json({ message: "Book reviews retrieved successfully" });
});

module.exports.general = public_users;
