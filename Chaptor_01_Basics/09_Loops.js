for (let i = 1; i <= 10; i++) {
    console.log(i);
}

for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

let browsers = ["Chrome", "Firefox", "Edge", "Safari"];

for (let i = 0; i < browsers.length; i++) {
    console.log(browsers[i]);
}

for (let browser of browsers) {
    console.log(browser);
}

for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        break;
    }
    console.log(i);
}

for (let i = 1; i <= 10; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}


let i = 0;
while (i <= 5) {
    console.log(i);
    i++;
}