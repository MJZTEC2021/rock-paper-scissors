const changeText = () => {
  const p = document.querySelector('p');

  p.textContent = 'rock beats scissors.';
};
const button = document.querySelector('rock');
button.onclick = changeText;
