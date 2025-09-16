const favMovie = "Avatar";

let guess = prompt("Guess my favorite movie: ");

while ((guess != favMovie) && (guess != "quit")) {
    guess = prompt("Wrong guess! Try again..");
}

if (guess != favMovie) {
    console.log("Better luck next time");
} else {
    console.log("Congratulations!")
}