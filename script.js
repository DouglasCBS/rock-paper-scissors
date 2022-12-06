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
                return "It's a draw! Try again."
                break;
            case "PAPER":
                return "You win! Paper beats Rock"
                break;
            case "SCISSORS":
                return "You lose! Rock beats Scissors"
        }
    }
}

console.log(playRound(playerChoice, computerChoice))