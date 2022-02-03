//Initial scores & round//

let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;

//code to generate computers choice//

function computerPlay() {
    let computerNumber = Math.floor(Math.random()*3);
    let computerOptions = ['rock','paper','scissors'];
    return computerOptions[computerNumber];
}

//code for playing a round//

function playRound() {

    let playerChoice = prompt("rock, paper or scissors?").toLowerCase(); // code for player choice
    let computerChoice = computerPlay();

        if (playerChoice === computerChoice) {
            alert(`You both picked ${playerChoice}, it's a draw!`);
            alert(`Your score is ${playerScore} and the computers score is ${computerScore}.`);
            roundNumber++;
            
        }
        else if (
            (playerChoice === 'rock' && computerChoice === 'scissors') || 
            (playerChoice === 'scissors' && computerChoice === 'paper') || 
            (playerChoice === 'paper' && computerChoice === 'rock')) {
                playerScore++;
                roundNumber++;
                alert(`You win! ${playerChoice} beats ${computerChoice}.`);
                alert(`Your score is ${playerScore} and the computers score is ${computerScore}.`);
            }

        else if (
            (computerChoice === 'rock' && playerChoice === 'scissors') || 
            (computerChoice === 'scissors' && playerChoice === 'paper') || 
            (computerChoice === 'paper' && playerChoice === 'rock')) {
                computerScore++;
                roundNumber++;
                alert(`You lose! ${computerChoice} beats ${playerChoice}.`);
                alert(`Your score is ${playerScore} and the computers score is ${computerScore}.`);
                
            }
        else {
            alert("error.")
        }
};

function endgame() {
    if (playerScore > computerScore) {
        alert("You reached 5 points first. You win!")
    }
    else if (computerScore > playerScore) {
        alert("The computer reached 5 points first. You lose...")
    }
    else {
        alert("error.")
    }
}