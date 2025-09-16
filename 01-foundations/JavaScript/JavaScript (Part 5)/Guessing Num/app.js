const max = prompt("Enter the max number");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the number");

while (true) {
    if (guess == "quit") {
        console.log("User quit!");
        break;
    }

    if (guess == random) {
        console.log("You are right! Congrats! The random number is: ", random);
        break;
    } else if (guess < random){
        guess = prompt("hint: your guess is too small. please trye again.");
    } else {
        guess = prompt("hint: your guess is too large. please trye again.");
    }
}