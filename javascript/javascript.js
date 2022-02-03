
//code to generate computers choice//

const computerNumber = Math.floor(Math.random()*3);

const computerOptions = ['rock','paper','scissors'];

const computerChoice = computerOptions[computerNumber];


//code for players choice//

let playerChoiceCaseSensitive = prompt("rock, paper or scissors?");

let playerChoice = playerChoiceCaseSensitive.toLowerCase();

/* if (playerChoice != "rock" || playerChoice != "paper" || playerChoice != "scissors") {
   alert("You have not selected 'rock', 'paper' or 'scissors'."); 
} */


//code for playing a round//

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        alert(`You both picked ${playerChoice}, it's a draw!`)
    }
    else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') || 
        (playerChoice === 'scissors' && computerChoice === 'paper') || 
        (playerChoice === 'paper' && computerChoice === 'rock')) {
            alert(`You win! ${playerChoice} beats ${computerChoice}.`)
        }

    else if (
        (computerChoice === 'rock' && playerChoice === 'scissors') || 
        (computerChoice === 'scissors' && playerChoice === 'paper') || 
        (computerChoice === 'paper' && playerChoice === 'rock')) {
            alert(`You lose! ${computerChoice} beats ${playerChoice}.`)
        }
    else {
        alert("error.")
    }
};

/* const playerChoice = "rock"; */

console.log(playRound(playerChoice, computerChoice))