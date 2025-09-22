// Question 1

let input = document.createElement("input");
let button = document.createElement("button");
button.innerText = "Click me";

document.querySelector("body").append(input);
document.querySelector("body").append(button);



// Question 2

input.setAttribute("placeholder", "username");
button.setAttribute("id", "btn");



// Question 3

let btn = document.querySelector("#btn");
btn.classList.add("btnStyle");


// Question 4

let heading = document.createElement("h1");
heading.innerText = "DOM Practice"
heading.classList.add("heading");
document.querySelector("body").prepend(heading);


// Question 5

let para = document.createElement("p");
para.innerHTML = "<b>Apna College Delta Practice</b>"
document.querySelector("body").append(para);