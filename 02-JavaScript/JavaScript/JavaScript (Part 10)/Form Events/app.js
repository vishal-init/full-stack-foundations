let form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();  // to prevent the default action of form 
    
    let user = document.querySelector("#user");
    let pass = form.elements[1]; // we can also access the elements of form like this

    console.log(user.value);
    console.log(pass.value);
})