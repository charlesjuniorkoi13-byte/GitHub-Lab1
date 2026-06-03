// ==========================================
// STEP 1: Array of Numbers (Max/Min)
// ==========================================

// Creating an array of 5 numbers
let scores = [45, 89, 23, 97, 61];

// Finding the maximum and minimum values using the spread operator (...)
let maxScore = Math.max(...scores);
let minScore = Math.min(...scores);

// Printing results
console.log("--- STEP 1: Array Max/Min ---");
console.log("Array Elements:", scores);
console.log("Maximum Value:", maxScore);
console.log("Minimum Value:", minScore);
// ==========================================
// STEP 2: Object Representing a Book
// ==========================================
console.log("\n--- STEP 2: Single Book Object ---");

let singleBook = {
    title: "Introduction to Programming",
    author: "Rodney Naro",
    yearPublished: 2026
};

// Accessing and printing the object property
console.log(`Book Title: ${singleBook.title} by ${singleBook.author}`);


// ==========================================
// STEP 3: List of 3 Book Objects
// ==========================================
console.log("\n--- STEP 3: List of Books ---");

let library = [
    { title: "JavaScript Basics", author: "Alice Smith", pages: 250 },
    { title: "Python Explained", author: "Bob Jones", pages: 320 },
    { title: "Java Foundations", author: "Charlie Brown", pages: 400 }
];

// Accessing and displaying details from the list
console.log("First Book Title:", library[0].title);
console.log("Second Book Author:", library[1].author);

console.log("\nLooping through all books in the list:");
library.forEach((book, index) => {
    console.log(`Book ${index + 1}: "${book.title}" written by ${book.author} (${book.pages} pages)`);
});
// ==========================================
// STEP 4: Checking Data Types
// ==========================================
console.log("\n--- STEP 4: Checking Data Types ---");

// Checking our array from Step 1
console.log("Is 'scores' an Array?:", Array.isArray(scores)); 
console.log("Type of an individual score element:", typeof scores[0]);

// Checking our book object from Step 2
console.log("Type of 'singleBook':", typeof singleBook);
console.log("Type of 'singleBook.title':", typeof singleBook.title);

// Checking our library collection from Step 3
console.log("Type of 'library':", typeof library);
console.log("Is 'library' an Array?:", Array.isArray(library));