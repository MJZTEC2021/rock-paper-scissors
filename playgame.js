//const changeText = () => {
// const p = document.querySelector('p');

// p.textContent = 'rock beats scissors.';
//};
//const button = document.querySelector('button');
//button.onclick = changeText;

const p = document.querySelector('p');
const button = document.querySelector('button');

const changeText = () => {
  p.textContent = 'Will I change?';
};

const alertText = () => {
  alert('Will I alert?');
};

button.addEventListener('click', changeText);
button.addEventListener('click', alertText);
