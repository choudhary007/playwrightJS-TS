let str = "madaM";
str = str.toLowerCase();

let start = 0;
let end = str.length - 1;
let isPalindrome = true;

while (start < end) {
    if (str.charAt(start) !== str.charAt(end)) {
        isPalindrome = false
        break;
    }
    start++;
    end--;
}
if (isPalindrome) {
    console.log('Paliondrome');
} else {
    console.log('Not Paliondrome');
}

let str1 = "mada";

if (str1 === str1.split('').reverse().join('')) {
    console.log('Paliondrome');
} else {
    console.log('Not a Paliondrome!!');
}


