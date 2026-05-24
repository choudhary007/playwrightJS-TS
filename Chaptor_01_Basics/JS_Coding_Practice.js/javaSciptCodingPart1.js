function classifyJsBasicsScore(score) {
    if (score >= 90) {
        console.log("Excellent");
    } else if (score > 75) (score < 89){

    }
}

const obj1 = {
    name: "Deepak",
    address: {
        city: "Delhi"
    }
};

const obj2 = { ...obj1 };

obj2.address.city = "Mumbai";

console.log(obj1.address.city);



function normalizeJsBasicsLabel(label) {
    return ("js-basic-" +
        label.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-")
    );
}


console.log(normalizeJsBasicsLabel("User Profile: Edit!"));