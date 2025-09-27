let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", function() {
    let item = document.createElement("li");
    item.innerText = input.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");
    
    item.append(delBtn);
    ul.append(item);

    input.value = "";
})


ul.addEventListener("click", function(event) {
    if (event.target.nodeName = "BUTTON") {
        let list = event.target.parentElement;
        list.remove();
    }
})

// let delBtns = document.querySelectorAll(".delete");

// for (let delBtn of delBtns) {
//     delBtn.addEventListener("click", function() {
//         let par - this.parentElemnt();
//         par.remove();
//     })
// }