const idTaskList = 'lista-tarefas';
const keyClassList = 'class-list';
const keyTaskList = 'task-list';
const classSelected = '.selecionada';
const classTask = 'tarefa';

function registerTask() {
  const inputTask = document.getElementById('texto-tarefa');
  if (inputTask.value === '') {
    alert('Nenhuma tarefa digitada.');
  } else {
    const newTask = document.createElement('li');
    newTask.innerText = inputTask.value;
    newTask.className = classTask;
    const taskList = document.getElementById(idTaskList);
    taskList.appendChild(newTask);
    inputTask.value = '';
  }
}

function registerTaskWithEnter(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    registerTask();
  }
}

function addTask() {
  const inputTask = document.getElementById('texto-tarefa');
  const buttonAddTask = document.getElementById('criar-tarefa');
  buttonAddTask.addEventListener('click', registerTask);
  inputTask.addEventListener('keyup', registerTaskWithEnter);
}

addTask();

function chageSelectedTaskColor(event) {
  const tasks = document.getElementsByClassName(classTask);
  const selectedTask = event.target;
  for (let index = 0; index < tasks.length; index += 1) {
    tasks[index].classList.remove('selecionada');
  }
  selectedTask.classList.add('selecionada');
}

function changeTaskColor() {
  const taskList = document.getElementById(idTaskList);
  taskList.addEventListener('click', chageSelectedTaskColor);
}

changeTaskColor();

function markCompletedTask(event) {
  const chosenTask = event.target;
  if (chosenTask.className === classTask || chosenTask.className === 'tarefa selecionada') {
    chosenTask.classList.add('completed');
  } else {
    chosenTask.classList.remove('completed');
  }
}

function changeCompletedTask() {
  const taskList = document.getElementById(idTaskList);
  taskList.addEventListener('dblclick', markCompletedTask);
}

changeCompletedTask();

function removeAllList() {
  const tasks = document.getElementsByClassName(classTask);
  for (let index = tasks.length - 1; index >= 0; index -= 1) {
    tasks[index].remove();
  }
}

function triggerRemoveTaskList() {
  const buttonRemoveAll = document.getElementById('apaga-tudo');
  buttonRemoveAll.addEventListener('click', removeAllList);
}

triggerRemoveTaskList();

function removeAllCompleted() {
  const completedTasks = document.getElementsByClassName('completed');
  for (let index = completedTasks.length - 1; index >= 0; index -= 1) {
    completedTasks[index].remove();
  }
}

function triggerRemoveCompletedTasks() {
  const buttonRemoveCompleted = document.getElementById('remover-finalizados');
  buttonRemoveCompleted.addEventListener('click', removeAllCompleted);
}

triggerRemoveCompletedTasks();

function saveTaskList() {
  localStorage.removeItem(keyTaskList);
  localStorage.removeItem(keyClassList);

  const taskList = document.getElementsByClassName(classTask);
  const taskListValue = [];
  const classList = [];
  for (let index = 0; index < taskList.length; index += 1) {
    taskListValue.push(taskList[index].innerHTML);
    classList.push(taskList[index].className);
  }

  localStorage.setItem(keyTaskList, JSON.stringify(taskListValue));
  localStorage.setItem(keyClassList, JSON.stringify(classList));
}

function triggersaveTasks() {
  const buttonSaveTasks = document.getElementById('salvar-tarefas');
  buttonSaveTasks.addEventListener('click', saveTaskList);
}

triggersaveTasks();

function initializeTasks() {
  const taskList = document.getElementById(idTaskList);
  if (localStorage.getItem(keyTaskList) !== null) {
    const savedTasks = JSON.parse(localStorage.getItem(keyTaskList));
    const savedClasses = JSON.parse(localStorage.getItem(keyClassList));
    for (let index = 0; index < savedTasks.length; index += 1) {
      const savedList = document.createElement('li');
      savedList.innerHTML = savedTasks[index];
      savedList.className = savedClasses[index];
      taskList.appendChild(savedList);
    }
  }
}

window.onload = initializeTasks;

function moveUpTask() {
  const selectedTask = document.querySelector(classSelected);
  const taskList = document.getElementsByClassName(classTask);
  for (let index = 1; index < taskList.length; index += 1) {
    if (selectedTask === taskList[index]) {
      const keepedTask = taskList[index - 1].innerHTML;
      taskList[index - 1].innerHTML = taskList[index].innerHTML;
      taskList[index].innerHTML = keepedTask;

      const keepedClass = taskList[index - 1].className;
      taskList[index - 1].className = taskList[index].className;
      taskList[index].className = keepedClass;
    }
  }
}

function triggerMoveUp() {
  const buttonMoveUp = document.getElementById('mover-cima');
  buttonMoveUp.addEventListener('click', moveUpTask);
}

triggerMoveUp();

function moveDownTask() {
  const selectedTask = document.querySelector(classSelected);
  const taskList = document.getElementsByClassName(classTask);
  for (let index = 0; index < taskList.length - 1; index += 1) {
    if (selectedTask === taskList[index]) {
      const keepedTask = taskList[index + 1].innerHTML;
      taskList[index + 1].innerHTML = taskList[index].innerHTML;
      taskList[index].innerHTML = keepedTask;

      const keepedClass = taskList[index + 1].className;
      taskList[index + 1].className = taskList[index].className;
      taskList[index].className = keepedClass;
    }
  }
}

function triggerMoveDown() {
  const buttonMoveDown = document.getElementById('mover-baixo');
  buttonMoveDown.addEventListener('click', moveDownTask);
}

triggerMoveDown();

function removeSelectedTask() {
  const slectedTask = document.querySelector(classSelected);
  slectedTask.remove();
}

function triggerRemoveTask() {
  const buttonRemoveTask = document.getElementById('remover-selecionado');
  buttonRemoveTask.addEventListener('click', removeSelectedTask);
}

triggerRemoveTask();
