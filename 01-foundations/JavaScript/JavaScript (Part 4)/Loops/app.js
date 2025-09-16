// For - Loop
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

console.log("\n");

// Print all odd nmbers from 1 to 15
for (let i = 1; i <= 15; i += 2) {
    console.log(i);
}

console.log("\n");

// Print all evn nmbers from 2 to 10
for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}

console.log("\n");

// Print table of 5
for (let i = 1; i <= 10; i++) {
    console.log(5 * i);
}

console.log("\n");

// Nested loop
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(j);
    }
}

console.log("\n");

// while loop
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

console.log("\n");

// Break statement
i = 1;
while (i <= 5) {
    if (i == 3) {
        break;
    }
    console.log(i);
    i++;
}

console.log("\n");

//Loops with Arrays
let fruits = ["Apple", "Banana", "Mango", "Orange", "Litchi"];

for (let i = 0; i < fruits.length; i++) {
    console.log(i, fruits[i]);
}

console.log("\n");

// Loops in nested loops
let arr = [[1, 2, 3], [2, 3, 4], [3, 4, 5]];

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
    }
    console.log("\n");
}

// for of loop
for (fruit of fruits) {
    console.log(fruit);
}

for (ch of "Apna College") {
    console.log(ch);
}

console.log("\n");

// for of loop on nested arrays
for (list of arr) {
    console.log(list);
}

for (list of arr) {
    for (num of list) {
        console.log(num);        
    }
}
