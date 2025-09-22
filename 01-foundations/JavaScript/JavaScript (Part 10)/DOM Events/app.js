let btns = document.querySelectorAll("button");

// function clicked() {
//     console.log("you clicked the button");
// }

// for (let btn of btns) {
//     btn.onclick = clicked;
//     btn.onmouseenter = function() {
//         console.log("You entered a button");
//     }
// }

// we can assign only one task or funtion fby the above method for assigning more than one task we can use addEventlistener

// addEventListener
function sayHello() {
    console.log("Hello!");
}

function sayName() {
    console.log("Apna College");
}

for (let btn of btns) {
    btn.addEventListener("click", sayHello);
    btn.addEventListener("click", sayName);
}


// eventListenr for elements
let para = document.querySelector("p");
para.addEventListener("click", function() {
    console.log("Para is clicked");
})

let div = document.querySelector("div");
div.addEventListener("mouseenter", function() {
    console.log("mouse enter the box");
})

// this in eventlisteners is refer to the same object it is called for.
function changeColor() {
    console.dir(this);
    console.dir(this.innerText);
    this.style.backgroundColor = "blue";
}

let h3 = document.querySelector("h3");
h3.addEventListener("click", changeColor);

let button = document.querySelector(".btnThis");
button.addEventListener("click", changeColor);

