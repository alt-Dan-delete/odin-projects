let humanScore = 0;
let computerScore = 0;

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
    else {
        return false;
    }
}

function getHumanChoice() {    
    let choice = prompt("Give your value");
    return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            console.log("You lose! Paper beats Rock")
            return computerScore++;
        }
        else if (computerChoice === "scissors") {
            console.log("You win! Rock beats Scissors")
            return humanScore++;
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            console.log("You lose! Scissors beats Paper")
            return computerScore++;
        }
        else if (computerChoice === "rock") {
            console.log("You win! Paper beats Rock")
            return humanScore++;
        }
    }
    else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            console.log("You lose! Rock beats Scissors")
            return computerScore++;
        }
        else if (computerChoice === "paper") {
            console.log("You win! Scissors beats Paper")
            return humanScore++;
        }
    }
}

function playGame() {
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    if (humanScore > computerScore) {
        console.log("You win!")
    }
    else if (computerScore > humanScore) {
        console.log("Computer wins!")
    }
    else {
        console.log("It's a tie! Nobody wins!")
    }
}

playGame();