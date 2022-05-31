const inputLetter = document.getElementById('carta-texto');
const letterBtn = document.getElementById('criar-carta');
const letter = document.getElementById('carta-gerada');
const wordCounter = document.getElementById('carta-contador');

function addWordClasses(letterWord) {
  const classes = [['newspaper', 'magazine1', 'magazine2'],
    ['medium', 'big', 'reallybig'],
    ['rotateleft', 'rotateright'],
    ['skewleft', 'skewright']];

  classes.forEach((group) => {
    const randomIndex = Math.floor(Math.random() * group.length);
    letterWord.classList.add(group[randomIndex]);
  });
}

function createLetter() {
  const letterText = inputLetter.value.split(' ');
  letter.innerHTML = '';
  if (letterText.every((element) => element === '') || letterText.length === 0) {
    letter.innerHTML = 'Por favor, digite o conteúdo da carta.';
  } else {
    letterText.forEach((word) => {
      const letterWord = document.createElement('span');
      letterWord.innerHTML = word;
      addWordClasses(letterWord);
      letterWord.addEventListener('click', (event) => {
        event.target.removeAttribute('class');
        addWordClasses(event.target);
      });
      letter.appendChild(letterWord);
    });
  }
  const letterLength = document.getElementsByTagName('span').length;
  wordCounter.innerHTML = letterLength;
}

letterBtn.addEventListener('click', createLetter);

inputLetter.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    createLetter();
  }
});
