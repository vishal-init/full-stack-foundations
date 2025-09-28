let btn = document.querySelector("button");

btn.addEventListener("click", function() {
    let color = getRandomColor();

    let h3 = document.querySelector("h3");
    h3.innerText = color;

    let div = document.querySelector("div");
    div.style.backgroundColor = color;
    
    console.log("Color updated.");
})

function getRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}