// mouse event
let btn = document.querySelector("button");
btn.addEventListener("click", function(event) {
    console.log(event);
    console.log("button clicked");
})

let input = document.querySelector("input");
input.addEventListener("keydown", function(event) {
    // console.log(event);
    console.log("key is: ", event.key);
    console.log("Code is: ", event.code);
    console.log("key was pressed.");
})