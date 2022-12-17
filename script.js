function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "rock";
    }

    else if (choice === 1) {
        return "paper";
    }

    else if (choice === 2) {
        return "scissors";
    }
};
let countWinner = 0;
let countLoser = 0;
function playRound(playerChoice, computerChoice) {
    if (computerChoice === "rock") {
        switch (playerChoice) {
            case "rock":
                return "Tie!";
            case "paper":
                ++countWinner
                return "You win! paper beats rock.";
            case "scissors":
                ++countLoser
                return "You lose! rock beats Scissors.";
        }
    }
    else if (computerChoice === "paper") {
        switch (playerChoice) {
            case "rock":
                ++countLoser
                return "You lose! paper beats rock.";
            case "paper":
                return "Tie!";
            case "scissors":
                ++countWinner
                return "You win! Scissors beats paper.";
        }
    }
    else if (computerChoice === "scissors") {
        switch (playerChoice) {
            case "rock":
                ++countWinner
                return "You win! rock beats Scissors";
            case "paper":
                ++countLoser
                return "You lose! Scissors beats paper.";
            case "scissors":
                return "Tie!";

        }
    }
};

function game() {
    for (let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice();
        let playerChoice = prompt("rock, paper or scissors?").toLowerCase();
        alert(playRound(playerChoice, computerChoice));
        
        
    }
    if (countWinner > countLoser) {
        alert("You won!");
    }
    else if (countWinner === countLoser) {
        alert("It's a draw!");
    }
    else {
        alert("You lost!");
    }
};

const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")
const results = document.querySelector("#results")
const score = document.querySelector("#score")
const choices = document.querySelector("#choices")

rock.addEventListener("click", () => {
    rock.classList.add("clicking")
    let computerChoice = getComputerChoice()
    let playerChoice = "rock"
    choices.textContent = `Computer chose ${computerChoice}, you chose ${playerChoice}`
    results.textContent = playRound(playerChoice, computerChoice)
    score.textContent = `${countWinner} - ${countLoser}`
    verifyWinner()
    }
);
   
paper.addEventListener("click", () => {
    paper.classList.add("clicking")
    let computerChoice = getComputerChoice()
    let playerChoice = "paper"
    choices.textContent = `Computer chose ${computerChoice}, you chose ${playerChoice}`
    results.textContent = playRound(playerChoice, computerChoice)
    score.textContent = `${countWinner} - ${countLoser}`
    verifyWinner()
    }
);
   
scissors.addEventListener("click", () => {
    scissors.classList.add("clicking")
    let computerChoice = getComputerChoice()
    let playerChoice = "scissors"
    choices.textContent = `Computer chose ${computerChoice}, you chose ${playerChoice}`
    results.textContent = playRound(playerChoice, computerChoice)
    score.textContent = `${countWinner} - ${countLoser}`
    verifyWinner()
    }
);

function verifyWinner() {
    if (countWinner === 5) {
        results.textContent = "YOU WON!!!!!"
        score.textContent = "0 - 0"
        countWinner = 0
        countLoser = 0
    }
    else if (countLoser === 5) {
        results.textContent = "YOU LOST!!!!!"
        score.textContent = "0 - 0"
        countWinner = 0
        countLoser = 0
}}

const btns = document.querySelectorAll("button")

btns.forEach(btn => btn.addEventListener("transitionend", removeTransition))

function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove("clicking")
}