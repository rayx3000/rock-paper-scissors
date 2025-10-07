const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

function generateComputerChoice() {
    const randomNumber = Math.random();
    if (randomNumber <= 0.33) {
        return "rock";
    } else if (randomNumber <= 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playGame(playerChoice) {
    const computerChoice = generateComputerChoice(); 
    let result = "";

    console.log(`Player: ${playerChoice}`);
    console.log(`Computer: ${computerChoice}`);

    if (playerChoice === computerChoice) {
        result = "It's a Tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You Win! 🎉";
    } else {
        result = "You Lose. 😢";
    }
    
    console.log(result);
}

document.addEventListener("DOMContentLoaded", () => {
    rock.addEventListener("click", () => playGame("rock"));
    paper.addEventListener("click", () => playGame("paper"));
    scissors.addEventListener("click", () => playGame("scissors"));
});