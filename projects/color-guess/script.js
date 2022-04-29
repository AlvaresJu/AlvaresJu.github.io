function setColorsToGuess() {
  const colorBalls = document.getElementsByClassName('ball');
  for (let index = 0; index < colorBalls.length; index += 1) {
    const rValue = Math.floor(Math.random() * 256);
    const gValue = Math.floor(Math.random() * 256);
    const bValue = Math.floor(Math.random() * 256);
    colorBalls[index].style.backgroundColor = `rgb(${rValue},${gValue},${bValue})`;
    colorBalls[index].classList.remove('right-answer');
  }

  const randomIndex = Math.floor(Math.random() * 6);
  colorBalls[randomIndex].classList.add('right-answer');
  const rgbAnswer = colorBalls[randomIndex].style.backgroundColor;
  let rgbAnswerSet = '';
  for (let index = 3; index < rgbAnswer.length; index += 1) {
    rgbAnswerSet += rgbAnswer[index];
  }
  const rgbColor = document.getElementById('rgb-color');
  rgbColor.innerHTML = rgbAnswerSet;
}

window.onload = setColorsToGuess;

function returnColorGuessing(event) {
  const answer = document.getElementById('answer');
  const emoji = document.getElementById('emoji');
  if (event.target.className === 'ball') {
    emoji.innerHTML = '😕';
    answer.innerHTML = 'Errou! Tente novamente!';
  } else {
    emoji.innerHTML = '🤩';
    answer.innerHTML = 'Acertou!';
    const scoreElement = document.getElementById('score');
    let scoreValue = Number(scoreElement.innerText);
    scoreValue += 3;
    scoreElement.innerHTML = scoreValue;
  }
}

const colorBallsList = document.getElementById('ball-list');
colorBallsList.addEventListener('click', returnColorGuessing);

function resetGame() {
  const emoji = document.getElementById('emoji');
  const answer = document.getElementById('answer');
  emoji.innerHTML = '🤔';
  answer.innerHTML = 'Escolha uma cor';

  setColorsToGuess();
}

const resetButton = document.getElementById('reset-game');
resetButton.addEventListener('click', resetGame);
