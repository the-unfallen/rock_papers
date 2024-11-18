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
        return "tie";
    } else if (humanChoice === "invalid") {
        console.log("You lose")
        return "computer";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win, Rock beats scissors!")
        return "human";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win, Paper beats rock!")
        return "human";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win, Scissors beats paper!")
        return "human";
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        console.log("You lose, Rock beats scissors!")
        return "computer";
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        console.log("You lose, Paper beats rock!")
        return "computer";
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        console.log("You lose, Scissors beats paper!")
        return "computer";
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

playGame();