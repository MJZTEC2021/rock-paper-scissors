// let playerSelection = prompt('Type your choice of rock, paper or scissors.');

let playerSelection = 'rock';
//let computerSelection = computerPlay();

function computerPlay() {
  const rps = ['rock', 'paper', 'scissors'];
let random = Math.floor(Math.random() * rps.length);
return rps[random];
}

let computerSelection = computerPlay();

function playGame(playerSelection, computerSelection) {
if (playerSelection === computerSelection) {
  console.log("It's a tie");
} else if (
  (computerSelection === 'rock' && playerSelection === 'scissors') ||
  (computerSelection === 'paper' && playerSelection === 'rock') ||
  (computerSelection === 'scissors' && playerSelection === 'paper')
){
 console.log ("You loose!") 

}

playGame(playerSelection, computerSelection);
playerSelection
