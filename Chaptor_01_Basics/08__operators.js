let num1 = 20;
let num2 = "20";

console.log(num1 == num2); // true
console.log(num1 === num2); // false
console.log(num1 != num2); // false
console.log(num1 !== num2); // true


let marks = 76;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 70) {
    console.log("Grade B");
} else {
    console.log("Grade C");
}

let username = "";

if (username.length <= 0) {
    console.log("Username required");
} else {
    console.log("Valid Username");
}

let browser = "chrome";

switch (browser) {
    case "chrome":
        console.log("Chrome");
        break;

    case "firefox":
        console.log("Firefox");
        break;

    case "edge":
        console.log("Edge");
        break;

    default:
        console.log("Unknown browser");
        break;
}

console.log(Boolean(" ")); //true
console.log(Boolean("")); // false
console.log(Boolean(0)); // false
console.log(Boolean(2)); //true

console.log(typeof (NaN));

let score = 90; score = "pass";
console.log(typeof (score));

console.log(a);
let a = 10;

greet();
function greet() { console.log("Hi"); }

sayHi();
const sayHi = function () { console.log("Hi"); };

let count = count + 1;


console.log(a); // reference error because of temporal dead zone
var a = 10;
console.log(a);