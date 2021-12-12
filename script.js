//let playerSelection = prompt('Type your choice of rock, paper or scissors.');

//let playerSelection = 'rock';

//playerSelection = playerSelection.toLowerCase();

function computerPlay() {
  const rps = ['rock', 'paper', 'scissors'];

  let random = Math.floor(Math.random() * rps.length);

  return rps[random];
}

//let computerSelection = computerPlay();
let computerSelection = computerPlay();

function playGame(playerSelection, computerSelection) {
  let result;
  if (playerSelection === computerSelection) {
    //console.log("It's a tie");
    result = `Computer chose ${computerSelection}.<br> It's a tie!`;
  } else if (
    //The 4 lines below relate to the computer selection winning, using the and/or, along with the console showing the result.
    (computerSelection === 'rock' && playerSelection === 'scissors') ||
    (computerSelection === 'scissors' && playerSelection === 'paper') ||
    (computerSelection === 'paper' && playerSelection === 'rock')
  ) {
    //console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    result = `Computer chose ${computerSelection}.<br> You lose! ${computerSelection} beats ${playerSelection}.`;
  } else {
    // relate to the player selection winning, using the and/or, along with the console showing the result.
    //console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    result = `Computer chose ${computerSelection}.<br> You win! ${playerSelection} beats ${computerSeletion}.`;
  }
  document.getElementByID('result').innerHTML = result;
}

const buttons = document.querySelectorAll('input');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {
    playGame(buttons[i].value, computerSelection);
  });
}
//playGame(playerSelection, computerSelection);

//const p = document.querySelector('p');
//const button = document.querySelector('button');

//const rockText = () => {
//p.textContent = ('rock');
//};

//const paperText = () => {
//alert('paper');
//};

//button.addEventListener('click', rockText);
//button.addEventListener('click', paperText);
