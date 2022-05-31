function checkLogin() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  if (email === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

const logintButton = document.getElementById('login-button');
logintButton.addEventListener('click', checkLogin);

function checkAgreement() {
  const formButton = document.getElementById('submit-btn');
  const agreement = document.getElementById('agreement');
  if (agreement.checked) {
    formButton.disabled = false;
  } else {
    formButton.disabled = true;
  }
}

const agreement = document.getElementById('agreement');
agreement.addEventListener('click', checkAgreement);

function counterText() {
  const numberOfChar = document.getElementById('textarea').value.length;
  const counter = document.getElementById('counter');

  const valueText = 500 - numberOfChar;
  counter.innerHTML = valueText;
}

const writen = document.getElementById('textarea');
writen.addEventListener('keyup', counterText);

function getCheck(array) {
  let string = '';
  for (let i = 0; i < array.length; i += 1) {
    if (array[i].checked) {
      string = array[i].value;
    }
  }
  return string;
}

function getCheckBox(array) {
  let string = '';
  for (let i = 0; i < array.length; i += 1) {
    if (array[i].checked && i < array.length - 1) {
      string += `${array[i].value}, `;
    } else if (array[i].checked) {
      string += array[i].value;
    }
  }
  return string;
}

function setInformation() {
  const lastname = document.getElementById('input-lastname').value;
  const fullName = `Nome: ${document.getElementById('input-name').value} ${lastname}`;
  const email = `Email: ${document.getElementById('input-email').value}`;
  const house = `Casa: ${document.getElementById('house').value}`;
  const family = `Família: ${getCheck(document.getElementsByName('family'))}`;
  const learn = `Matérias: ${getCheckBox(document.getElementsByClassName('subject'))}`;
  const rate = `Avaliação: ${getCheck(document.getElementsByName('rate'))}`;
  const textarea = `Observações: ${document.getElementById('textarea').value}`;

  const informationList = [fullName];
  informationList.push(email);
  informationList.push(house);
  informationList.push(family);
  informationList.push(learn);
  informationList.push(rate);
  informationList.push(textarea);
  return informationList;
}

function sendForm() {
  const array = setInformation();
  const form = document.getElementById('evaluation-form');
  form.innerHTML = '';

  for (let i = 0; i < array.length; i += 1) {
    console.log(array[i]);
    const newForm = document.createElement('p');
    newForm.innerHTML = array[i];
    form.appendChild(newForm);
  }
}

const formButton = document.getElementById('submit-btn');
formButton.addEventListener('click', sendForm);
