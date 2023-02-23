const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log("How old are you?");

rl.on("line", (line) => {
    input = line.split(' ').map(num => parseInt(num));
    age = input[0];
    rl.close();
});

rl.on("close", () => {
    if (isNaN(age) || age < 0) {
        console.log("Please write a real positive number.");
    } else if (age < 18) {
        console.log("You are too young.");
    } else if (age >= 18 && age <= 50) {
        console.log("You can drink.");
    } else if (age === 100) {
        console.log("Wow, you are wise.");
    } else {
        console.log("You may care for your health.");
    }
})
