function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeBtn = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');

changeBtn.addEventListener('click', onChangeBtnClick);

function onChangeBtnClick() {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  spanEl.textContent = color;
};