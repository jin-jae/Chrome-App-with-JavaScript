const readline = require("readline");

const calculator = {
    add: function(a, b) {
        return (a + b);
    },
    subtract: function(a, b) {
        return (a - b);
    },
    multiply: function(a, b) {
        return (a * b);
    },
    divide: function(a, b) {
        return (a / b);
    },
    power: function(a, b) {
        return (a ** b);
    }
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    input = line.split(' ').map(num => parseInt(num));
    rl.close();
});

rl.on("close", () => {
    console.log(calculator.add(input[0], input[1]));
    console.log(calculator.subtract(input[0], input[1]));
    console.log(calculator.multiply(input[0], input[1]));
    console.log(calculator.divide(input[0], input[1]));
    console.log(calculator.power(input[0], input[1]));
})
