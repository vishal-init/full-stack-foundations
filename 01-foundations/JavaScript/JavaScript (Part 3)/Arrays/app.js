// let student1 = "Alice";
// let student2 = "bob";
// let student3 = "ron";

let students = ["Alice", "Bob", "Ron"];
console.log(students);
console.log(students[1]);
console.log(students.length);
console.log(typeof students);

let marks = [90, 80, 70, 85, 95, 100];
let info = ["Alice", 90, 8.7];  // Mixed Array
let empArr = [] // Empty array

//Array are mutable
console.log("Marks array before: ", marks);
marks[1] = 88;
console.log("Marks array After: ", marks);

marks[10] = 75;

console.log(marks);
console.log(marks[5]);

// Array Methods
let cars = ["Audo", "bmw", "tata", "maruti", "tesla"];
console.log(cars);
cars.push("toyota"); // Add element to the end
console.log(cars);
console.log(cars.pop());  // delete from the end and return it
console.log(cars);

console.log(cars);
cars.unshift("toyota"); // Add element to the start
console.log(cars);
console.log(cars.shift());  // delete from the start and return it
console.log(cars);

console.log(cars.indexOf("bmw"));  // return index of the element
console.log(cars.indexOf("mercedes"));  

console.log(cars.includes("bmw")); // search the ekment and rturn boolean result
console.log(cars.includes("mercedes"));

let arr1 = [8, 4, 2, 7, 3];
console.log(arr1);
let arr2 = [1, 5, 9, 3];
console.log(arr2);
console.log(arr1.concat(arr2));

console.log("Array before:", arr1);
console.log("Array after", arr1.reverse());  // make changers in the original aaray
console.log(arr1);

console.log("\n");


// Slicing
console.log(cars.slice());
console.log(cars.slice(2));
console.log(cars.slice(1, 4));
console.log(cars.slice(-4))

console.log("\n");

// Splice -> removes / replaces / add elements in place
console.log(cars.splice(3));
console.log(cars);
console.log(cars.splice(0, 1));
console.log(cars);
console.log(cars.splice(0, 2, "range rover", "jaguar"));
console.log(cars);
console.log(cars.splice(1, 0, "tata", "mercedes"));
console.log(cars);

// sorting
console.log("\n");
console.log(cars);
console.log("after sorting", cars.sort()); // sort in place
console.log(cars);

let arr = [90, 80, 70, 85, 95, 100];
console.log(arr);
console.log("after sorting", arr.sort()); // sort in place
console.log(arr);

// Cont Array -? we can use array methods and all operations but cant re assign te another array t that arr variable
const c = [1, 2, 3];
console.log(c);
c.push(4);
console.log(c);
c.pop();
console.log(c);

console.log("\n");

// Nested Arrays
let nums = [[1, 2], [3, 4], [5, 6, 7]];
console.log(nums);
console.log(nums.length);
console.log(nums[0]);
console.log(nums[0].length);
console.log(nums[1][1]);