//  Question 1
let arr = [7, 9, 0, -2];
let n = 3;

let ans = arr.slice(0,n);
console.log(ans);

// Question 2
ans = arr.slice(-n);
console.log(ans);

// Question 3
let str = prompt("please enter a string");
if (str.length == 0) {
    console.log("string is empty");
} else {
    console.log("string is not empty");
}


// Question 4
str = "ApNa CoLlEgE";
let idx = 3;
if (str[idx] == str[idx].toLowerCase()) {
    console.log("character is lowercase");
} else {
    console.log("character is not lowercase");
}

// Question 5
str = prompt("please enter a string");
console.log(`original string = ${str}`);
console.log(`string with out spaces = ${str.trim()}`);


// Question 6
arr = ["hello", 'a', 23, 64, 99, -6];
let item = 64;
if (arr.includes(item)) {
    console.log("element exists in array");
} else {
    console.log("element doesn't exist in array");
}
