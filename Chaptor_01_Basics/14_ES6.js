let name1 = "Deepak";
let company = "Oracle";

console.log(`My name is ${name1} and I work at ${company}`);

let employee = {
    name: "Deepak",
    role: "QA Lead"
}

let { name, role } = employee;

console.log(name);
console.log(role);

let browsers = ["Chrome", "Firefox"];

let [b1, b2] = browsers;

console.log(b1);
console.log(b2);


let ar1 = [1, 2];
let ar2 = [...ar1, 3, 4]

console.log(ar2);

// for (let a of ar2) {
//     console.log(a);
// }


function add(...num) {
    console.log(num);
}

add(1, 2, 3, 4, 5, 5);