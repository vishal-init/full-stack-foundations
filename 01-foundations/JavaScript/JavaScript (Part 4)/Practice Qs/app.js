//  Question 1
let arr = [1, 2, 2, 3, 4, 5, 6, 2, 3, 4];
let num = 2;

while (arr.indexOf(num) != -1) {
    let idx = arr.indexOf(num);

    arr.splice(idx, 1);
}

console.log(arr);

// Question 2
let number = 287152;
let count = 0;

while (number > 0) {
    count++;
    number = Math.floor(number/10);
}

console.log(count);

// Question 3
number = 287152;
let sum = 0;

while (number > 0) {
    let digit = number % 10;
    sum += digit;
    number = Math.floor(number/10);
}

console.log(`Sum is: ${sum}`);

// Question 4
let n = 5;
let fact = 1;

for (let i = 1; i <= n; i++) {
    fact *= i;
}

console.log(`The factorial of ${n} is: ${fact}`);

// Question 5
arr = [2, 5, 10, 4, 2, 7, 1, 9];
let lar = 0;
for ( let i = 0; i <= arr.length; i++) {
    if (lar < arr[i]) { 
        lar = arr[i];
    }
}

console.log(lar);