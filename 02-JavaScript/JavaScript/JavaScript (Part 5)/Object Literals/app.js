// Object Litereals
const student = {
    name: "Alice",
    age: 20,
    marks: 90,
    city: "Delhi",
};

console.log(student);


// Crete an object literal for the properties of thread / twitter post which include:
// username, content, likes, reposts, tags
const post = {
    username: "@alice",
    content: "This is my #firstPost",
    likes: 150,
    reposts: 5,
    tags: ["@apnacollge", "@delta"]
};

console.log(post);

// Get values
console.log(post["username"]);
console.log(post["content"]);
console.log(post.likes);
console.log(post.reposts);


// Add and update the values
student.city = "Mumbai"; // update key
console.log(student);

student.gender = "Female";   // add key
console.log(student);

delete student.gender;
console.log(student);


// nested onject

const classInfo = {
    alice : {
        grade : "A",
        city : "Delhi"
    },
    bob : {
        grade : "A",
        city : "Noida"
    }
}

console.log(classInfo);


// Arrays of object
const studentInfo = [
    {
        name : "Alice",
        grade : "A",
        city : "Delhi"
    },
    {
        name : "Bob",
        grade : "A",
        city : "Noida"
    }
];

console.log(studentInfo);

// Generate rondom number from 1 to 10
let num = Math.random();
num = num * 10;
num = Math.floor(num);
num = num + 1;

console.log(num);


console.log(Math.floor(Math.random() * 10) + 1);
