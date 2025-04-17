let humanScore = 0;
let computerScore = 0;

// step 1: getComputerChoice will randomly return one of the following values:
// rock, paper or scissors. Use math.random

function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
        case 0:
            return 0;
        case 1:
            return 1;
        case 2:
            return 2;
    }
}

// console.log(getComputerChoice());

// step 2: write logic to get the human choice
// write getHumanChoice 
// use prompt to get user's input
// no need for error handling
function getHumanChoice() {
    const humanChoice = prompt("please enter '0' for 'rock', '1' for 'paper', and '2' for 'scissors'");
    return humanChoice
}

// console.log(getHumanChoice())
//step 3: declare the players score variables

//step 4: write the logic to play a single round
function playRound(humanChoice, computerChoice) {
    if ((humanChoice == 0 && computerChoice == 2) || (humanChoice == 1 && computerChoice == 0) || (humanChoice == 2 && computerChoice == 1) ) {
        console.log(humanChoice);
        console.log(computerChoice);
        humanScore = ++humanScore;
        console.log(`Player wins. Score is human: ${humanScore} computer: ${computerScore}`);
    } else if ((humanChoice == 2 && computerChoice == 0) || (humanChoice == 0 && computerChoice == 1) || (humanChoice == 1 && computerChoice == 2) ) {
        console.log(humanChoice);
        console.log(computerChoice);
        computerScore = ++computerScore;
        console.log(`Computer wins. Score is human: ${humanScore} computer: ${computerScore}`);
    } else {
        console.log(humanChoice);
        console.log(computerChoice);
        console.log(`Draw. Score is human: ${humanScore} computer: ${computerScore}`);
    }
}

playRound(getHumanChoice(), getComputerChoice());
//step 5: write the logic for the entire game