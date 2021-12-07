//let playerSelection = prompt('Type your choice of rock, paper or scissors.');

let playerSelection = 'rock';

playerSelection = playerSelection.toLowerCase();

function computerPlay() {
  const rps = ['rock', 'paper', 'scissors'];

  let random = Math.floor(Math.random() * rps.length);

  return rps[random];
}

//let computerSelection = computerPlay();
let computerSelection = computerPlay();

function playGame(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("It's a tie");
  } else if (
    //The 4 lines below relate to the computer selection winning, using the and/or, along with the console showing the result.
    (computerSelection === 'rock' && playerSelection === 'scissors') ||
    (computerSelection === 'scissors' && playerSelection === 'paper') ||
    (computerSelection === 'paper' && playerSelection === 'rock')
  ) {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
  } else {
    // relate to the player selection winning, using the and/or, along with the console showing the result.
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
  }
}
playGame(playerSelection, computerSelection);
