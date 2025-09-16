let msg = "    Hello!    "
console.log(msg.trim());

console.log("\n");

let str = "Apna College";
console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log("\n");

console.log(str.indexOf("o"));
console.log(str.indexOf("Col"));
console.log(str.indexOf("m"));

//Method Chaining
let newMsg = msg.trim().toUpperCase();
console.log(newMsg);

console.log("\n");

// Slicing
console.log(str.slice(5));
console.log(str.slice(2, 6));
console.log(str.slice(-5));  // slice(-num) = slice(str.length - num);

console.log(str.replace("Apna", "Our")) // Replace the first occurance of "Apna" by "Our"
console.log(str.repeat(3));