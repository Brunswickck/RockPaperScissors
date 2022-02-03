//Initial scores & round//

let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;

//code to generate computers choice//

function computerPlay() {
    let computerOptions = ['rock','paper','scissors'];
    let computerNumber = Math.floor(Math.random()*3);
    return computerOptions[computerNumber];
}

//code for playing a single round//

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
                alert(`The computer picked ${computerChoice}`);
                alert(`${playerChoice} beats ${computerChoice}. You win!`);
                alert(`Your score is ${playerScore} and the computers score is ${computerScore}.`);
            }

        else if (
            (computerChoice === 'rock' && playerChoice === 'scissors') || 
            (computerChoice === 'scissors' && playerChoice === 'paper') || 
            (computerChoice === 'paper' && playerChoice === 'rock')) {
                computerScore++;
                roundNumber++;
                alert(`The computer picked ${computerChoice}`);
                alert(`${computerChoice} beats ${playerChoice}. You lose!`);
                alert(`Your score is ${playerScore} and the computers score is ${computerScore}.`);
                
            }
        else {
            alert("Error, something went wrong.")
        }
};

//code to determining which message is displayed upon victory/defeat//
function endgame() {
    if (playerScore > computerScore) {
        alert("You reached 5 points first. You win!")
    }
    else if (computerScore > playerScore) {
        alert("The computer reached 5 points first. You lose...")
    }
    else {
        alert("Error, something went wrong.")
    }
}

//code for a full multi round game//

function game() {
    console.log(playRound());
    if (playerScore < 5 && computerScore < 5) {
        game();
    }
    else {
        endgame();
    }
}

game();