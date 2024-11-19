console.log("Hello, World!");

const elements = ['rock', 'paper', 'scissors'];


function getComputerChoice() {
    let thisrand = Math.floor(Math.random() * 3);
    return elements[thisrand];
}


function getHumanChoice() {

    let retries = 3;
    while (retries > 0){
        let yourpick = prompt("Rock, Paper or Scissors?");
        yourpick = yourpick.toLowerCase();
        if (elements.includes(yourpick)) {
            return yourpick;
        } else {
            console.log("Invalid Entry");
        }
        retries = retries - 1;
    }
    return "invalid";
}


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    // your code here!
    if (humanChoice === computerChoice) {
        console.log("it's a tie.");
        announcement = "it's a tie.";
        return ["tie", announcement];
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win, Rock beats scissors!")
        announcement = "You win, Rock beats scissors!";
        return ["human", announcement];
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win, Paper beats rock!")
        announcement = "You win, Paper beats rock!";
        return ["human", announcement];
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win, Scissors beats paper!")
        announcement = "You win, Scissors beats paper!";
        return ["human", announcement];
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        console.log("You lose, Rock beats scissors!")
        announcement = "You lose, Rock beats scissors!"
        return ["computer", announcement];
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        console.log("You lose, Paper beats rock!");
        announcement = "You lose, Paper beats rock!";
        return ["computer", announcement];
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        console.log("You lose, Scissors beats paper!");
        announcement = "You lose, Scissors beats paper!";
        return ["computer", announcement];
    } 
  }
  

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        console.log("Round: " + (i + 1));
        let winner = playRound(getHumanChoice(), getComputerChoice());
        if (winner === "human") {
            humanScore++;
        } else if (winner === "computer") {
            computerScore++;
        } else {
            humanScore = humanScore + 0.5;
            computerScore = computerScore + 0.5;
        }
        console.log("Human Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
    }
    console.log("Well Played!");
}

// playGame();

document.addEventListener('DOMContentLoaded', function() {
    let humanScore = 0;
    let computerScore = 0;

    // buttons is a node list. It looks and acts much like an array.
    const buttons = document.querySelectorAll("button");

    // we use the .forEach method to iterate through each button
    buttons.forEach((button) => {
    // and for each one we add a 'click' listener
        button.addEventListener("click", () => {
            let humanChoice = button.id;
            let [winner, announcement] = playRound(humanChoice, getComputerChoice());
            const display = document.querySelector('#scores_display');
            display.textContent = announcement;
            const humanScoreElement = document.querySelector('#human_scores');
            const computerScoreElement = document.querySelector('#computer_scores');
            if (winner === "human") {
                humanScore++;
                humanScoreElement.textContent = humanScore;
            } else if (winner === "computer") {
                computerScore++;
                computerScoreElement.textContent = computerScore;
            } else {
                humanScore = humanScore + 0.5;
                humanScoreElement.textContent = humanScore;
                computerScore = computerScore + 0.5;
                computerScoreElement.textContent = computerScore;
            }

            if (humanScore >= 5 ) {
                display.textContent = "You Won! Game over.";
                document.getElementById("rock").disabled = true;
                document.getElementById("paper").disabled = true;
                document.getElementById("scissors").disabled = true;
            } else if (computerScore >= 5) {
                display.textContent = "You Lose! Game over.";
                document.getElementById("rock").disabled = true;
                document.getElementById("paper").disabled = true;
                document.getElementById("scissors").disabled = true;
            }
        });
    });
})