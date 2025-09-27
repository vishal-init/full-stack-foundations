let gameSeq = [];
let userSeq = [];

let start = false;
let level = 0;

let btns = ["yellow", "green", "red", "purple"];
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if (!start) {
        console.log("game is started");
        start = true;

        levelUp();
    }
})

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 300);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 300);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let idx = Math.floor(Math.random() * 4);
    let col = btns[idx];
    let randomBtn = document.querySelector(`.${col}`);

    gameSeq.push(col);
    console.log(gameSeq);

    btnFlash(randomBtn);
}

function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game Over! Ypur score was <b>${level}</b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn);

    let userBtn = btn.getAttribute("id");
    userSeq.push(userBtn);

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    start = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}