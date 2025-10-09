const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const playerResult = document.getElementById("playerResult");
const computerResult = document.getElementById("computerResult");
const statusText = document.getElementById("statusText");

const winScore = document.getElementById("winScore");
const loseScore = document.getElementById("loseScore");
const drawScore = document.getElementById("drawScore");

const resetButton = document.getElementById("resetButton");
const resultsSection = document.getElementById("results-section");

let wins = 0;
let loses = 0;
let draw = 0;

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

function checkResults(player, computer){
    let result = "";
    
    if (player === computer) {
        result = "It's a Tie!";
        statusText.innerHTML = result;
        document.querySelector(".status").style.backgroundColor = "yellow";
        draw++;
        drawScore.textContent = draw;
    } else if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        result = "You Win! 🎉";
        statusText.innerHTML = result;
        document.querySelector(".status").style.backgroundColor = "green";
        wins++
        winScore.textContent = wins;
    } else {
        result = "You Lose. 😢";
        statusText.innerHTML = result;
        document.querySelector(".status").style.backgroundColor = "red";
        loses++;
        loseScore.textContent = loses;
    }
}

function playGame(playerChoice) {

    resultsSection.style.display = "flex";

    const computerChoice = generateComputerChoice(); 

    checkResults(playerChoice, computerChoice);

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

function reset(){
    wins = 0;
    loses = 0;
    draw = 0;

    winScore.textContent = wins;
    loseScore.textContent = loses;
    drawScore.textContent = draw;

    resultsSection.style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
    rock.addEventListener("click", () => playGame("rock"));
    paper.addEventListener("click", () => playGame("paper"));
    scissors.addEventListener("click", () => playGame("scissors"));

    resetButton.addEventListener("click", () => reset());
});