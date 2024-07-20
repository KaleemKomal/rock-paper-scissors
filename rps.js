
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
    
    if (picker == "Rock"){
        humanChoice = "Rock";
    }
    else if (picker == "Paper"){
        humanChoice = "Paper";
    }
    else{
        humanChoice = "Scissors";
    }

    return humanChoice;
}


console.log(getHumanChoice());