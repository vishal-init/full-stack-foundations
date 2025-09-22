// Question 2
let btn = document.querySelector("button");

btn.addEventListener("click", function() {
    btn.style.color = "green";    
})


// Question 3
let input = document.querySelector("input");
let h2 = document.querySelector("h2");

input.addEventListener("input", function() {
    h2.innerText = input.value;
})