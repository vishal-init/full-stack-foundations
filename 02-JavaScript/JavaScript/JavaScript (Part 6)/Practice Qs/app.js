// Question 1
let arr = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
let num = 5;

function getElements(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            console.log(arr[i]);
        }
    }
}

getElements(arr, num);


// Question 2
let str = "abcdabcdefgggh";

function getUnique(str) {
    let ans = "";

    for (let i = 0; i < str.length; i++) {
        let ch = str[i];
        if (ans.indexOf(ch) == -1) {
            ans += ch;
        }
    }
    
    return ans;
}

console.log(getUnique(str));

// Question 3
let country = ["Australia", "Germany", "United States of America"];

function longestName(country) {
    let idx=0;
    for (let i = 0; i < country.length; i++) { 
        let max = country[idx].length;
        let curr = country[i].length;
        
        if (curr > max) {
            idx = i;
        }
    }
    
    return country[idx];
}

console.log(longestName(country));


// Question 4
let s = "apnacollege";

function countVowels(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (
            str.charAt(i) == "a" ||
            str.charAt(i) == "e" ||
            str.charAt(i) == "i" ||
            str.charAt(i) == "o" ||
            str.charAt(i) == "u"
        ) {
            count++;
        }
    }

    return count;
}

console.log(countVowels(s));


// Question 5
let start = 100;
let end = 200;

function generateRandom(start, end) {
    let diff = end - start;
    
    return Math.floor(Math.random() * diff) + start;
}

console.log(generateRandom(start, end));
