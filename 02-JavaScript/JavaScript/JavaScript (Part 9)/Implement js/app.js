//  querySelectors -> selects first element

console.dir(document.querySelector("h1"));

console.dir(document.querySelector("#description"));

console.dir(document.querySelector(".oldImg"));


//  querySelectorsAll -> selects all element

console.dir(document.querySelectorAll("h1"));

console.dir(document.querySelectorAll("#description"));

console.dir(document.querySelectorAll(".oldImg"));

let c = document.querySelectorAll(".oldImg")


// manipulate style
let links = document.querySelectorAll(".box a");

for (link of links) {
    link.style.color = "green";
}