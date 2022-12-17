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

rock.addEventListener("click", () => {
    let computerChoice = getComputerChoice()
    alert(playRound("rock", computerChoice))
});
   
paper.addEventListener("click", () => {
    let computerChoice = getComputerChoice()
    alert(playRound("paper", computerChoice))
});
   
scissors.addEventListener("click", () => {
    let computerChoice = getComputerChoice()
    alert(playRound("scissors", computerChoice))
});

