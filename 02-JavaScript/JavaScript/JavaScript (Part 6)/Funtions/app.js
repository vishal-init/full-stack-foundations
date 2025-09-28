// Functions Defination
function printHello() {
    console.log("Hello!");
}

// Funtion calling
printHello();

console.log("\n");

// Funtion to print a poem
function printPeom() {
    console.log("Twinkle Twinkle, Little, Star");
    console.log("How I wonder what you are");   
}

printPeom();

console.log("\n");

// funtion to roll a dice
function rollDice() {
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll);
}

rollDice();


// Functions Arguments
function printSum(a, b) {
    console.log(a + b);
}

printSum(5, 7);

console.log("\n");


// Funtion calculate avg of three numbers
function clacAvg(a, b, c) {
    let avg = (a + b + c) / 3;
    console.log(avg);    
}

clacAvg(3, 4, 5);

console.log("\n");



// Funtion print table of a number
function printTable(n) {
    for (let i = n; i <= n * 10; i += n) {
        console.log(i);
    }    
}

printTable(5);

// return keyord
function add(a, b) {
    return a + b;
}

let c = add(5, 4);
console.log(c);


// funtion to return sum from 1 to n
function getSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log(getSum(10));


// funtion to conat all the strings of an array
let str = ["Hi", "Hello", "Bye", "!"];

function concat(str) {
    let ans = "";

    for (let i = 0; i < str.length; i++) {
        ans += str[i];
    }
    return ans;
}

console.log(concat(str));


// Function Expressions
let sum = function(a, b) {
    return a + b;
}

console.log(sum(5, 4));


// High Order function
function multipleGreet(func, n) {
    for (let i = 1; i <= n; i++) {
        func()
    }
}

let greet = function() {
    console.log("Hello!");
}

multipleGreet(greet, 2);


// Return function
function oddOrEvenFactory(req) {
    if (req == "odd") {
        let odd = function(n) {
            console.log(!(n % 2 == 0));
        }

        return odd;
    } else if (req == "even") {
        return function(n) {
            console.log((n % 2 == 0));
        }
    } else {
        console.log("Wrong Request");
    }
}


let func = oddOrEvenFactory("even");
func(2); 


// methods
const calculator = {
    add: function(a, b) {
        return a + b;
    },
    sub(a, b) {    // shorthand
        return a - b;
    },
    mul: function(a, b) {
        return a * b;
    }
};

console.log(calculator.add(5, 6));
