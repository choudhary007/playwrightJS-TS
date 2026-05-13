let arr = [5, 10, 15, 20];

let doubled = arr.map(n => n * 2);

console.log(doubled);

let nums = [1, 2, 3, 4, 5, 6, 7];
let odd = nums.filter(o => o % 2 !== 0);

console.log(odd);

let browsers = ["Chrome", "Firefox", "Edge"];
let isFirefoxThere = browsers.find(f => f === "Firefox")
console.log(isFirefoxThere);

let browsers1 = ["Chrome", "Firefox", "Edge"];
let isEdgeThere = browsers1.find(e => e === "Edge")
console.log(isEdgeThere);

let numss = [1, 2, 3, 4, 5];
numss.pop();
numss.push(6);

for (let num of numss) {
    console.log(num);
}
