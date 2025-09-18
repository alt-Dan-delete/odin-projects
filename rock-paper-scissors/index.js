let humanScore = 0;
let computerScore = 0;
let roundNumber = 0;
let roundStatus = "";

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

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            roundStatus = 'You lose! Paper beats Rock';
            return computerScore++;
        }
        else if (computerChoice === "scissors") {
            roundStatus = 'You win! Rock beats Scissors';
            return humanScore++;
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            roundStatus = 'You lose! Scissors beats Paper';
            return computerScore++;
        }
        else if (computerChoice === "rock") {
            roundStatus = 'You win! Paper beats Rock';
            return humanScore++;
        }
    }
    else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            roundStatus = 'You lose! Rock beats Scissors';
            return computerScore++;
        }
        else if (computerChoice === "paper") {
            roundStatus = 'You win! Scissors beats Paper';
            return humanScore++;
        }
    }
    if (humanChoice === computerChoice) {
        roundStatus = "It's a tie, nobody wins!";
    }
}


const humanRock = document.getElementById('humanRock');
humanRock.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
    document.getElementById('humanScore').textContent = humanScore;
    document.getElementById('computerScore').textContent = computerScore;
    scoreCheck(humanScore, computerScore);
});
const humanPaper = document.getElementById('humanPaper');
humanPaper.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
    document.getElementById('humanScore').textContent = humanScore;
    document.getElementById('computerScore').textContent = computerScore;
    scoreCheck(humanScore, computerScore);
});
const humanScissors = document.getElementById('humanScissors');
humanScissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
    document.getElementById('humanScore').textContent = humanScore;
    document.getElementById('computerScore').textContent = computerScore;
    scoreCheck(humanScore, computerScore);
});

function scoreCheck(humanScore, computerScore) {
    roundNumber++;
    if (humanScore === 5) {
        alert("You win the game! Congratulations!");
    }
    else if (computerScore === 5) {
        alert("Computer wins the game!");
    }
    document.getElementById('gameStatus').textContent = roundStatus;
    document.getElementById('roundsPlayed').textContent = roundNumber;
}