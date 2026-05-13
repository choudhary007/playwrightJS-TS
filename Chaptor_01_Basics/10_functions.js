function sayHello() {
    console.log("Hello Automation!!");
}

sayHello();

function multiply(a, b) {
    return a * b;
}

let result = multiply(10, 5);
console.log("Result " + result);

const multiply1 = (a, b) => {
    return a * b;
}

console.log(multiply1(9, 4));

function checkEven(num) {
    if (num % 2 == 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}

checkEven(44);

function printArray(browsers) {
    for (let browser of browsers) {
        console.log(browser);
    }
}

printArray(["Chrome", "Firefox", "Edge"]);


function test() {

    console.log(a);

    var a = 10;

    console.log(a);
}

test();