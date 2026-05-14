console.log("A");

setTimeout(() => {
    console.log("B");
}, 1000);

console.log("C");

// output - A --> C --> B

function processOrder(callback) {
    console.log("Order Processing");

    callback();
}

processOrder(function () {
    console.log("Order Processed");
});

let promise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Payment Successfull");
    } else {
        reject("Payment Failed");
    }
});

promise
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });


console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

console.log("3");

// output 1 3 2


function getUser() {

    return new Promise(resolve => {
        setTimeout(() => {
            resolve("User loaded");
        }, 2000);

    });
}

async function fetchUser() {

    console.log("User loading...");
    let result = await getUser();
    console.log(result);
}

fetchUser();


console.log("A");

async function test() {

    console.log("B");

    await Promise.resolve();

    console.log("C");
}

test();

console.log("D");