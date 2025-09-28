// Question 1
let nums = [1, 2, 3, 4, 5];
const square = nums.map((num) => num * num);
console.log(square);

let sum = square.reduce((acc, cur) => acc + cur);
let avg = sum / nums.length;

console.log(avg);


// Question 2
let numbers = [2, 4, 6, 8, -2, -4];
let newArr = numbers.map((num) => num + 5);
console.log(newArr);


// Question 3
let strings = ["adam", "bob", "catlyn", "donald", "eve"];
let newStr = strings.map((string) => string.toUpperCase());

console.log(newStr);


// Question 4
const doubleAndReturnArgs = (arr, ...args) => [
    ...arr, ...args.map((v) => v * 2)
];
    

console.log(doubleAndReturnArgs([1, 2, 3], 4, 4)); // [1, 2, 3, 8, 8]
console.log(doubleAndReturnArgs([2], 10, 4)); // [2, 20, 8]


// Question 5
const mergeObjects = (obj1, obj2) => (
    {...obj1, ...obj2}
);

console.log(mergeObjects({a: 1, b: 2}, {c: 3, d: 4})); // {a: 1, b: 2, c: 3, d: 4}