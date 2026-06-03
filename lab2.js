// ==========================================
// STEP 1: Variables of Different Types
// ==========================================

// 1. Primitive Types
let age = 21;                 // Number
let name = "Nigel";           // String
let isStudent = true;         // Boolean
let unknownData = null;       // Null

// 2. Reference Types
let skills = ["Git", "VS Code", "JS"]; // Array
let studentProfile = {                 // Object
    major: "Business IT",
    semester: 1
};

// Printing them to the console
console.log("--- STEP 1: Variable Types ---");
console.log("Age (Number):", age, typeof age);
console.log("Name (String):", name, typeof name);
console.log("Is Student (Boolean):", isStudent, typeof isStudent);
console.log("Unknown Data (Null):", unknownData, typeof unknownData);
console.log("Skills (Array):", skills, typeof skills);
console.log("Profile (Object):", studentProfile, typeof studentProfile);
// ==========================================
// STEP 2: Value vs Reference Behavior
// ==========================================
console.log("\n--- STEP 2: Value vs Reference ---");

// 1. Value Type Demonstration (Primitives)
let originalNumber = 10;
let copiedNumber = originalNumber; // Copies the actual value 10

copiedNumber = 99; // Changing the copy

console.log("Original Number (Should stay 10):", originalNumber);
console.log("Copied Number (Should be 99):", copiedNumber);


// 2. Reference Type Demonstration (Objects)
let originalArray = ["Apple", "Banana"];
let copiedArray = originalArray; // Copies the memory pointer address, NOT the data

copiedArray.push("Cherry"); // Modifying the copy modifies the original shared space!

console.log("Original Array (Notice 'Cherry' added!):", originalArray);
console.log("Copied Array:", copiedArray);
// ==========================================
// STEP 3: Modifying Constants
// ==========================================
console.log("\n--- STEP 3: Constants ---");

const DAYS_IN_WEEK = 7;
console.log("Days in a week:", DAYS_IN_WEEK);

// Force an error by trying to reassign a constant
try {
    DAYS_IN_WEEK = 8; // This line will trigger a crash!
} catch (error) {
    console.log("Successfully caught the error!");
    console.log("Error Name:", error.name);
    console.log("Error Message:", error.message);
    // ==========================================
// STEP 4: Scope Differences
// ==========================================
console.log("\n--- STEP 4: Scope Differences ---");

if (true) {
    var leakedVar = "I am a var, and I leak out of my block!";
    let hiddenLet = "I am a let, and I stay hidden inside!";
    const hiddenConst = "I am a const, and I also stay hidden inside!";
    
    console.log("Inside the block:", leakedVar);
    console.log("Inside the block:", hiddenLet);
}

console.log("\nOutside the block (var status):", leakedVar); // Works!

// Test the block scope rules for let and const using try...catch
try {
    console.log(hiddenLet); // This will fail!
} catch (error) {
    console.log("hiddenLet status outside block:", error.message);
}

try {
    console.log(hiddenConst); // This will also fail!
} catch (error) {
    console.log("hiddenConst status outside block:", error.message);
}
}