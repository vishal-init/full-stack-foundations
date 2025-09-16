// Console.log()
console.log("Hello World!");
console.log("Hello World!");

let a = 5;
let b = 10;
console.log("The sum is: ", a + b);

console.log("\n");

// Template Literals
let pencil = 5;
let erasor = 10;
console.log("The total price is: ", a + b, "Rupees");
console.log(`The total price is: ${a + b} Rupees`); // ` -> back ticks

console.log("\n");


// Arithematic Operators
console.log("Arithematic Operators")
console.log("Addition: ", a + b);
console.log("Subtraction: ", a - b);
console.log("Multiplication: ", a * b);
console.log("Divide: ", a / b);
console.log("Modulo: ", a % b);
console.log("Exponantional: ", a ** b);

console.log("\n");


// Unary Operators
console.log("Unary Operators")
let c = 10
console.log(c++);
console.log(++c);
console.log(c--);
console.log(--c);

console.log("\n");


// Assignment Operators
console.log("Assignment Operators");
c += 2;
console.log(c);
c -= 2;
console.log(c);
c /= 2;
console.log(c);
c *= 2;
console.log(c);
c %= 2;
console.log(c);

console.log("\n");

// Comparison Operators
console.log("Greater then: ", a > b);
console.log("Greater then equal to: ", a >= b);
console.log("Less then:", a < b);
console.log("Less then equal to: ", a <= b);
console.log("Equal to: ", a == b);  // Comapre only value 
console.log("Not equal to: ", a != b);

console.log("Strict Equal to: ", a === b); //Comapare both type and value

console.log("\n");

//if statement
let age = 18;
if (age >= 18) {
    console.log("you can vote!");
}

console.log("\n");

//else if statement
let marks = 85;
if (marks >= 80) {
    console.log("A");
} else if (marks >= 60) {
    console.log("B");
} else if (marks >= 33) {
    console.log("C");
} else if (marks >= 60) {
    console.log("F");
}

console.log("\n");

//else statement
if (age >= 18) {
    console.log("you can vote!");
} else {
    console.log("you can not vote!");
}

console.log("\n");

//Nested if else statement
if (marks >= 33) {
    console.log("Pass")
    if (marks >= 60) {
        console.log("Grade: O");
    } else {
        console.log("Grade: A");
    }
} else {
    console.log("Better luck next time!");
}

console.log("\n");

// Logical Operators
console.log("Logical AND: ", (3 > 1) && (5 > 1));
console.log("Logical AND: ", (3 > 1) && (5 < 1));
console.log("Logical OR: ", (3 > 1) || (5 < 1));
console.log("Logical OR: ", (3 < 1) || (5 > 1));
console.log("Logical NOT: ", !(3 > 1));
console.log("Logical NOT: ", !(5 < 1));

console.log("\n");

//Switch statement
let col = "red";

switch(col) {
    case "red" :
        console.log("Stop");
        break;
    case "yellow" :
        console.log("Slow down");
        break;
    case "green" :
        console.log("Go");
        break;
    default :
        console.log("Broken Light")
}

//Errors
console.error("Error");

//Warning
console.warn("Warning");

//Alerts
// alert("This is a simple alert!");

// Promt -> for inputs
let name = prompt("Enter your name");
console.log(name);