//  forEach method for arrays
let arr = [1, 2, 3, 4, 5];

function print(el) {
    console.log(el);
}

arr.forEach(print);
//  OR
arr.forEach(function(el) {
    console.log(el);
});


// mao fiunction for arrays
let double = arr.map(function(el) { //it return result array
    return el * 2;
});

console.log(double);


// filter method
let nums = [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12];
let ans = nums.filter((el) => {             // adds the element of nums in ans for which the rollback is true
    return el % 2 == 0;
});

console.log(ans);

// Ever method
ans = nums.every((el) => el % 2 == 0);         // return true if all element follow the condition

console.log(ans);


// Ever method
ans = nums.some((el) => el % 2 == 0);         // return true if any element follow the condition

console.log(ans);


// reduce - > reduce the array to single value
arr = [1, 2, 3, 4, 5];
let val = arr.reduce((res, el) => res + el);
console.log(val);


// Maximum of an array
let max = arr.reduce((res, el) => {
    if (res < el) {
        return el;
    } else {
        return res;
    }
})

console.log(max);


// Spread
let min = Math.min(...arr);
console.log(min);

console.log(...arr);
console.log(..."ApnaCollege");


let newArr = [...arr];
console.log(newArr);

let newStr = [..."Hello!"];
console.log(newStr);


let odd = [1, 3, 5, 7, 9];
let even = [2, 4, 6, 8, 10];

let both = [...odd, ...even]
console.log(both);


// Spread with object literals
const data = {
    email: "abc@gmail.com",
    pass: "abcd"
}

const dataCopy = {...data, id: 123}; // we can even add new properties also
console.log(dataCopy);

const arrObj = {...arr}; // indices works as key
console.log(arrObj);


// Rest 
function sum(...args) { // arguments
    for (let i = 0; i < args.length; i++) {
        console.log("You gave us: ", args[i]);
    }
}

sum(1);
sum(1, 2, 3);
sum(1, [1, 2, 3])

function calSum(...agrs) {
    return agrs.reduce((res, el) => res + el);
}

console.log(calSum(1, 5, 4, 8, 6));

// Destucturing
let names = ["tony", "bruce", "peter", "steve"];
let [winner, runnerup, ...secrunnerup] = names; // values assign index vise

console.log(winner, runnerup, secrunnerup);


// Destucturing in objects
const students = {
    name: "Alice",
    age: 16,
    class: 10,
    sub: ["hindi", "eng", "math", "sci"],
    username: "ablic@123",
    pass: "abcd"
};


let {username, pass} = students;
console.log(username, pass); // assign ke vise
