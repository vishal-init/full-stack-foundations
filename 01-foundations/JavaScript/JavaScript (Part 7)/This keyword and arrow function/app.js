// This keyword
const student = {
    name: "Alice",
    age: 20,
    eng: 85,
    sci: 92,
    math: 95,
    getAvg() {
        let avg = (this.eng + this.sci + this.math) / 3;
        console.log(`${this.name} got ${avg} marks`);
        console.log(this);
        
    }
}

student.getAvg();


// try catch block
console.log("Hello!");
console.log("Hello!");
try {
    console.log(a);
} catch(e) {
    console.log("Caught a error.... a is undefined");
    console.log(e);
}
console.log("Hello!");
console.log("Hello!");
console.log("Hello!");

// Arrow fnction
const sum = (a, b) => {
    console.log(a + b);
}

sum(5, 4);


const cube = (n) => {
    return n * n * n;
}

console.log(cube(3));


// Implicit return in arrow function
const mul = (a, b) => (a * b);

console.log(mul(2, 5));

// Set timeout (takes time in ms)
// console.log("H there!");

// setTimeout(() => {
//     console.log("Apna College");
// }, 4000);

// console.log("Welcome to");

// Set interval (takes time in ms)


// console.log("H there!");

// let id = setInterval(() => {
//     console.log("Apna College");
// }, 4000);

// console.log("Welcome to");

// we can use clearInterval(id) to stode the setInterval





// This in arrow function
const st = {
    name: "Alice",
    marks: 90,
    prop: this,  // Global Scope
    getName : function() {
        console.log(this.name);
        console.log(this);  // object scope -> calling function scope
    },
    getMarks: () => {
        console.log(this.marks);
        console.log(this); // Parents scope -> window
    },
    getInfo1: function() {
        setTimeout(() => {
            console.log(this); //St
        }, 2000)
    },
    getInfo2: function() {
        setTimeout(function() {
            console.log(this); // Window
        }, 2000)
    }
}

st.getName();
st.getMarks();


