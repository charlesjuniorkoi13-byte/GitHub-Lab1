// ==========================================
// STEP 1: Positive, Negative, or Zero
// ==========================================
console.log("--- STEP 1: Number Check ---");

let testNumber = -15; // You can change this number to test different cases!

if (testNumber > 0) {
    console.log(`The number ${testNumber} is POSITIVE.`);
} else if (testNumber < 0) {
    console.log(`The number ${testNumber} is NEGATIVE.`);
} else {
   console.log(`The number is ZERO.`);

}```javascript
// ==========================================
// STEP 2: Multiplication Table (Nested Loops)
// ==========================================
console.log("\n--- STEP 2: Multiplication Table ---");

// Outer loop for rows (1 to 5)
for (let i = 1; i <= 5; i++) {
    let rowString = ""; // Temporary string to collect numbers on the same line
    
    // Inner loop for columns (1 to 5)
    for (let j = 1; j <= 5; j++) {
        // Multiply row index by column index and add spacing
        rowString += (i * j) + "\t"; 
    }
    
    // Print the completed row
    
}```javascript
// ==========================================
// STEP 3: Prime Number Checker
// ==========================================
console.log("\n--- STEP 3: Prime Number Checker ---");

let numToCheck = 17; // Change this to test other numbers
let isPrime = true;

if (numToCheck <= 1) {
    isPrime = false;
} else {
    // Check divisors from 2 up to the square root of the number
    for (let i = 2; i <= Math.sqrt(numToCheck); i++) {
        if (numToCheck % i === 0) {
            isPrime = false;
            break; // Exit loop early if a divisor is found
        }
    }
}

if (isPrime) {
    console.log(`${numToCheck} is a PRIME number.`);
} else {
    console.log(`${numToCheck} is NOT a prime number.`);
}