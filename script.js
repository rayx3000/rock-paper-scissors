const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const randomNumber = Math.random();

if(randomNumber <= 0.33){
    console.log("rock");
}
else if(randomNumber <= 0.66){
    console.log("paper");
}
else{
    console.log("scissors");
}

document.addEventListener("DOMContentLoaded", () => {
    rock.addEventListener("click", () => {
        console.log("rock");
    });
    paper.addEventListener("click", () => {
        console.log("paper");
    });
    scissors.addEventListener("click", () => {
        console.log("scissors");
    });
});