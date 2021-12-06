// let playerSelection = prompt('Type your choice of rock, paper or scissors.');
let playerSelection = 'rock';

playerSelection = playerSelection.toLowerCase();

function computerPlay() {
  const rps = ['rock', 'paper', 'scissors'];

  let random = Math.floor(Math.random() * rps.length);

  return rps [random];
}


//let computerSelection = computerPlay();
let computerSelection = computerPlay();

function playGame(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("It's a tie");
  } else if (
    (computerSelection === 'rock' && playerSelection === 'scissors') ||
    (computerSelection === 'scissors' && playerSelection === 'paper') ||
    (computerSelection === 'paper' && playerSection === 'rock')
  )
}

//function computerPlay() {
 // const rps = ['rock', 'paper', 'scissors'];
//let random = Math.floor(Math.random() * rps.length);
//return rps[random];
//}



//function playGame(playerSelection, computerSelection) {
 // if (playerSelection === computerSelection) {
   // console.log("It's a tie");

  //else (computerSelection > playerSelection)
  //(
  //(computerSelection === 'rock' && playerSelection === 'scissors') ||
  //(computerSelection === 'scissors' && playerSelection === 'paper') ||
  //(computerSelection === 'paper' && playerSelection === 'rock')) 
  
//console.log ("You loose!");
//} else if {
//console.log("You win! $(playerSelection"); beats $(computerSelection));
//}
//}



//playGame(playerSelection, computerSelection);
//playerSelection


// if ()

//(playerSelection === 'rock' && computerSelection === (scissors') ||
//(playerSelection === 'scissors' && computerSelection === 'paper') ||
//(playerSelection === 'paper' && computerSelection ==='rock')