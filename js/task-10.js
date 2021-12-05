function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputField = document.querySelector('#controls input');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const divBoxes = document.querySelector('#boxes');

inputField.addEventListener('input', onInputChange);
btnCreate.addEventListener('click', onBtnCreateClick);
btnDestroy.addEventListener('click', onBtnDestroyClick);

let inputValue = 0;
let width = 30;
let height = 30;

function onInputChange(event) {
  inputValue = event.currentTarget.value;
  console.log(inputValue);
};

function onBtnCreateClick() {
  for (let i = 1; i <= inputField.value; i += 1){
    divBoxes.insertAdjacentHTML('beforeend', `<div style="width: ${width}px; height: ${height}px;
    background-color: ${getRandomHexColor()};"></div>`)
    width += 10;
    height += 10;
  }
};

function onBtnDestroyClick() {
  divBoxes.innerHTML = '';
  inputField.value = '';
  width = 30;
  height = 30;
};