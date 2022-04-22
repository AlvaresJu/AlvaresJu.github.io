function addColorAndSelectBlack() {
  const colors = document.getElementsByClassName('color');
  for (let index = 1; index < colors.length; index += 1) {
    const rValue = Math.floor(Math.random() * 256);
    const gValue = Math.floor(Math.random() * 256);
    const bValue = Math.floor(Math.random() * 256);
    colors[index].style.backgroundColor = `rgb(${rValue},${gValue},${bValue})`;
  }
  colors[0].classList.add('selected');
}

window.onload = addColorAndSelectBlack;

function selectColor() {
  const colorPalette = document.getElementById('color-palette');

  function changeSelectedClass(event) {
    const colors = document.getElementsByClassName('color');
    for (let index = 0; index < colors.length; index += 1) {
      colors[index].classList.remove('selected');
    }
    event.target.classList.add('selected');
  }

  colorPalette.addEventListener('click', changeSelectedClass);
}

selectColor();

function colorPixels() {
  const pixelBoard = document.getElementById('pixel-board');

  function addPixelColor(event) {
    const selectedPaletteColor = document.querySelector('.selected');
    const cssProperties = window.getComputedStyle(selectedPaletteColor, null);
    const selectedColor = cssProperties.getPropertyValue('background-color');
    const pixelSelected = event;
    pixelSelected.target.style.backgroundColor = selectedColor;
  }

  pixelBoard.addEventListener('click', addPixelColor);
}

colorPixels();

function clearBoard() {
  const clearButton = document.getElementById('clear-board');

  function clearPixels() {
    const pixels = document.getElementsByClassName('pixel');
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = 'white';
    }
  }

  clearButton.addEventListener('click', clearPixels);
}

clearBoard();

const pixelBoardName = 'pixel-line';

function deleteBoard() {
  const lines = document.getElementsByClassName(pixelBoardName);
  for (let index = lines.length - 1; index >= 0; index -= 1) {
    lines[index].remove();
  }
}

function createLines(size) {
  const pixelBoard = document.getElementById('pixel-board');
  for (let n = 1; n <= size; n += 1) {
    const newLine = document.createElement('ul');
    newLine.className = pixelBoardName;
    pixelBoard.appendChild(newLine);
  }
}

function createPixels(size) {
  const pixelLines = document.getElementsByClassName(pixelBoardName);
  for (let index = 0; index < pixelLines.length; index += 1) {
    for (let n = 1; n <= size; n += 1) {
      const newPixel = document.createElement('li');
      newPixel.className = 'pixel';
      pixelLines[index].appendChild(newPixel);
    }
  }
}

function setBoardLimits() {
  const input = document.getElementById('board-size');
  if (input.value < 5) {
    input.value = 5;
    alert('O tamanho mínimo do board é 5x5');
  } else if (input.value > 50) {
    input.value = 50;
    alert('O tamanho máximo do board é 50x50');
  }
  return input.value;
}

function adjustBoardSize() {
  function boardSize() {
    const input = document.getElementById('board-size');
    if (input.value === '') {
      alert('Board inválido!');
    } else {
      setBoardLimits();
      deleteBoard();
      createLines(input.value);
      createPixels(input.value);
      input.value = '';
    }
  }

  const generateBoard = document.getElementById('generate-board');
  generateBoard.addEventListener('click', boardSize);
}

adjustBoardSize();
