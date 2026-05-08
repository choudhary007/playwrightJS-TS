// Sample JavaScript file demonstrating variables and constants

// Declaring variables using let
let userName = "Deepak";
let userAge = 30;
let isActive = true;

// Declaring constants using const
const PI = 3.14159;
const MAX_USERS = 100;
const APP_NAME = "Playwright Demo";

// Modifying a variable (allowed with let)
userAge = 31;

// Printing values to console
console.log("===== Variable Values =====");
console.log("User Name:", userName);
console.log("User Age:", userAge);
console.log("Is Active:", isActive);

console.log("\n===== Constant Values =====");
console.log("PI Value:", PI);
console.log("Max Users:", MAX_USERS);
console.log("App Name:", APP_NAME);

// Template literals example
console.log(`\nWelcome ${userName}! You are ${userAge} years old.`);
console.log(`${APP_NAME} supports up to ${MAX_USERS} users.`);
