let humanScore = 0;
let computerScore = 0;
const btn_rock = document.querySelector("#rock");
const btn_paper = document.querySelector("#paper");
const btn_scissors = document.querySelector("#scissors");

const displayHumanScore = document.querySelector('.human-score');
const displaComputerScore = document.querySelector('.computer-score');

function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function whoIsWinner(humanScore, computerScore) {
    return result = humanScore > computerScore ? "human" : "computer";
}


function displayScore(humanScore, computerScore) {
    alert(`The final score is\n Human: ${humanScore}\n Computer: ${computerScore} 
        \n The winner is ${whoIsWinner(humanScore, computerScore)}`)
}

let keepGoing = true;
let counter = 0;

btn_rock.addEventListener("click", () => {
    const humanChoice = "rock";
    playRound(humanChoice, getComputerChoice());
    counter++;
  //  console.log(`counter is ${counter}`);
    if (counter === 5) {
        displayScore(humanScore, computerScore);
    }
});

btn_paper.addEventListener("click", () => {
    const humanChoice = "paper";
    playRound(humanChoice, getComputerChoice());
    counter++;
    if (counter === 5) {
        displayScore(humanScore, computerScore);
    }
});

btn_scissors.addEventListener("click", () => {
    const humanChoice = "scissors";
    playRound(humanChoice, getComputerChoice());
    counter++;
    if (counter === 5) {
        displayScore(humanScore, computerScore);
    }
});


function playRound(humanChoice, computerChoice) {
    if ((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "paper" && computerChoice == "rock") || (humanChoice == "rock" && computerChoice == "scissors") ) {
        humanScore = ++humanScore;
        console.log(`Player wins. Score is human: ${humanScore} computer: ${computerScore}`);
        displayHumanScore.textContent = humanScore;
    } else if ((humanChoice == "scissors" && computerChoice == "rock") || (humanChoice == "rock" && computerChoice == "paper") || (humanChoice == "paper" && computerChoice == "scissors") ) {
        computerScore = ++computerScore;
        console.log(`Computer wins. Score is human: ${humanScore} computer: ${computerScore}`);
        displaComputerScore.textContent = computerScore;
    } else {
        console.log(`Draw. Score is human: ${humanScore} computer: ${computerScore}`);
    }
}