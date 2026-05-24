let str = "Deepak Choudhary";
let reversedStr = "";
console.log(str.length - 1);

for (let i = str.length; i >= 0; i--) {
    reversedStr += str.charAt(i);
    // console.log(reversedStr);
}
console.log(reversedStr);


let str = "Madam";
str = str.toLowerCase();

let isPalindrome = true;

let i = 0;
let j = str.length - 1;

while (i < j) {
    if (str.charAt(i) !== str.charAt(j)) {
        isPalindrome = false;
        break;
    }
    i++;
    j--;
}

if (isPalindrome) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}


function isPrime(userInput) {
    if (userInput <= 1) {
        return 'Invalid number';

    }

    for (let i = 2; i < userInput; i++) {
        if (userInput % i === 0) {
            return "Not a Prime number";
        }
    }
    // console.log('Prime');
    return "Prime";
}

console.log(isPrime(70));


// Fibonacci Series

function fibonacci(num) {
    let a = 0;
    let b = 1;

    console.log(a);
    console.log(b);

    for (let i = 2; i < num; i++) {
        let c = a + b;
        console.log(c)
        a = b;
        b = c;
    }
}

console.log(fibonacci(5));

const arr = [1, 3, 3, 4, 2, 4, 5, 5];

const unique = [...new Set(arr)];
console.log(unique);


function maxArr(arr) {
    // const arr = [10, 30, 40];

    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}


console.log(maxArr([10, 32, 67]))


const arr = [10, 30, 40, 20, 12];

arr.sort((a, b) => a - b);
console.log(arr);

const arr = [10, 30, 40, 20, 12];

arr.sort((a, b) => b - a);
console.log(arr);