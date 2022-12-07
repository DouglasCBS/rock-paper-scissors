function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "ROCK";
    }

    else if (choice === 1) {
        return "PAPER";
    }

    else if (choice === 2) {
        return "SCISSORS";
    }
};
let countWinner = 0;
let countLoser = 0;
function playRound(playerChoice, computerChoice) {
    if (computerChoice === "ROCK") {
        switch (playerChoice) {
            case "ROCK":
                return "Tie!";
            case "PAPER":
                ++countWinner
                return "You win! Paper beats Rock.";
            case "SCISSORS":
                ++countLoser
                return "You lose! Rock beats Scissors.";
        }
    }
    else if (computerChoice === "PAPER") {
        switch (playerChoice) {
            case "ROCK":
                ++countLoser
                return "You lose! Paper beats Rock.";
            case "PAPER":
                return "Tie!";
            case "SCISSORS":
                ++countWinner
                return "You win! Scissors beats Paper.";
        }
    }
    else if (computerChoice === "SCISSORS") {
        switch (playerChoice) {
            case "ROCK":
                ++countWinner
                return "You win! Rock beats Scissors";
            case "PAPER":
                ++countLoser
                return "You lose! Scissors beats Paper.";
            case "SCISSORS":
                return "Tie!";

        }
    }
};

function game() {
    for (let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice();
        let playerChoice = prompt("Rock, paper or scissors?").toUpperCase();
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

game();