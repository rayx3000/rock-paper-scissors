const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const playerResult = document.getElementById("playerResult");
const computerResult = document.getElementById("computerResult");
const statusText = document.getElementById("statusText");

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
        statusText.innerHTML = result;
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You Win! 🎉";
        statusText.innerHTML = result;
    } else {
        result = "You Lose. 😢";
        statusText.innerHTML = result;
    }

    if(computerChoice === "rock"){
        computerResult.innerHTML = `<img src="assets/rock.jpg" alt="rock">`
    }else if(computerChoice === "paper"){
        computerResult.innerHTML = `<img src="assets/paper.jpg" alt="paper">`
    }else{
        computerResult.innerHTML = `<img src="assets/scissors.jpg" alt="scissors">`
    }

     if (playerChoice === "rock") {
        playerResult.innerHTML = `<img src="assets/rock.jpg" alt="rock">`;
    } else if (playerChoice === "paper") {
        playerResult.innerHTML = `<img src="assets/paper.jpg" alt="paper">`;
    } else {
        playerResult.innerHTML = `<img src="assets/scissors.jpg" alt="scissors">`;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    rock.addEventListener("click", () => playGame("rock"));
    paper.addEventListener("click", () => playGame("paper"));
    scissors.addEventListener("click", () => playGame("scissors"));
});