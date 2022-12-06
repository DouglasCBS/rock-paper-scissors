function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)
    if (choice === 0) {
        return "ROCK"
    }

    else if (choice === 1) {
        return "PAPER"
    }

    else if (choice === 2) {
        return "SCISSORS"
    }
}

let playerChoice = "ROCK"
let computerChoice = getComputerChoice()

console.log(computerChoice)

function playRound(playerChoice, computerChoice) {
    if (computerChoice === "ROCK") {
        switch (playerChoice) {
            case "ROCK":
                return "It's a draw!"
                break;
            case "PAPER":
                return "You win! Paper beats Rock."
                break;
            case "SCISSORS":
                return "You lose! Rock beats Scissors."
        }
    }
    else if (computerChoice === "PAPER") {
        switch (playerChoice) {
            case "ROCK":
                return "You lose! Paper beats Rock."
                break;
            case "PAPER":
                return "It's a draw!"
                break;
            case "SCISSORS":
                return "You win! Scissors beats Paper."
                break;
        }
    }
    else if (computerChoice === "SCISSORS") {
        switch (playerChoice) {
            case "ROCK":
                return "You win! Rock beats Scissors."
                break;
            case "PAPER":
                return "You lose! Scissors beats Paper."
                break;
            case "SCISSORS":
                return "It's a draw!"
                break;

        }
    }
}

console.log(playRound(playerChoice, computerChoice))