
let humanScore;
let computerScore;

function getComputerChoice() {
    let rand = Math.random();
    let computerChoice;

    if (rand < 0.33) {
        computerChoice = "Rock";
    }
    else if (rand < 0.66) {
        computerChoice = "Paper";
    }
    else{
        computerChoice = "Scissors";
    }

    return computerChoice;
}


function getHumanChoice() {
    let picker = prompt("Pick Rock, Paper or Scissors");
    let humanChoice;

    if (picker.toLowerCase() == "rock"){
        humanChoice = "Rock";
    }
    else if (picker.toLowerCase() == "paper"){
        humanChoice = "Paper";
    }
    else{
        humanChoice = "Scissors";
    }

    return humanChoice;
}


function playRound(humanChoice, computerChoice) {

    if(humanChoice == computerChoice){
        console.log("Draw");
        return "Draw";
    }

    if(humanChoice == "Rock" && computerChoice == "Paper"){
        computerScore++;
        console.log("You lose! Paper beats Rock")
        return "You lose! Paper beats Rock";
    }

    if(humanChoice == "Rock" && computerChoice == "Scissors"){
        humanScore++;
        console.log("You win! Rock beats Scissors");
        return "You win! Rock beats Scissors";
    }

    if(humanChoice == "Paper" && computerChoice == "Rock"){
        humanScore++;
        console.log("You win! Paper beats Rock");
        return "You win! Paper beats Rock";
    }

    if(humanChoice == "Paper" && computerChoice == "Scissors"){
        computerScore++;
        console.log("You lose! Scissors beats Paper");
        return "You lose! Scissors beats Paper";
    }

    if(humanChoice == "Scissors" && computerChoice == "Rock"){
        computerScore++;
        console.log("You lose! Rock beats Scissors");
        return "You lose! Rock beats Scissors";
    }

    if(humanChoice == "Scissors" && computerChoice == "Paper"){
        humanScore++;
        console.log();
        return "You win! Scissors beats Paper";
    }
}

function playGame() {

    humanScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore > computerScore){
        return "Game Over! You Win!"
    }
    else if (humanScore < computerScore){
        return "Game Over! You Win!"
    }
    else{
        return "Game Over! Draw!"
    }
}

console.log(playGame());