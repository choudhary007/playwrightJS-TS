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

console.log(Boolean(" "));
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(100));