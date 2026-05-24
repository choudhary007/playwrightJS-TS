let nums = [10, 20, 30, 40];
let result = 0;

for (let num of nums) {
    result += num;
}
console.log(`Result: ${result}`);

console.log("Average : " + result / nums.length);

function normalizeJsBasicsLabel(label) {
    return ("js-basic-" +
        label.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-")
    );
}

console.log(normalizeJsBasicsLabel(" Hello Deepak!! "));