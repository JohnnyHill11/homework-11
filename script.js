const input = document.querySelector('.input');
const button = document.querySelector('.button');
const list = document.querySelector('.list');

button.addEventListener('click', onButtonClick);
list.addEventListener('click', onTaskClick);
document.addEventListener('click', onTaskCloseClick);

function onButtonClick(event) {
  event.preventDefault();
  if(input.value) {
    addNewTask(input.value);
    clearTask();
  } else {
    alert('Введите ваше дело...');
  }
}

function onTaskClick(event) {
  if(event.target.tagName === 'LI') {
    getToggleTask(event.target);
  } 
}

function onTaskCloseClick(event) {
  if(event.target.tagName === 'SPAN') {
    let task = getTask(event.target);
    removeTask(task);
  }
}

function addNewTask(text) {
  let newItem = document.createElement('li');
  let span = document.createElement('span');
  newItem.className = 'list-item';
  newItem.textContent = text;
  list.append(newItem);
  span.className = 'close';
  span.textContent = 'X';
  newItem.append(span);
}

function clearTask() {
  input.value = '';
}

function getToggleTask(item) {
  item.classList.toggle('checked');
}

function getTask(item) {
  return item.closest('li');
}

function removeTask(item) {
  item.remove();
}