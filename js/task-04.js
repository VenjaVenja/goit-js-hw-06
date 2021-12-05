// const decrementBtn = document.querySelector("[data-action='decrement']");
// const incrementBtn = document.querySelector("[data-action='increment']");
// const spanEl = document.querySelector('#value');

// let counterValue = 0;

// const onDecrementBtnClick = () => {
//     counterValue -= 1;

//     spanEl.textContent = counterValue;
// };

// const onIncrementBtnClick = () => {
//     counterValue += 1;

//     spanEl.textContent = counterValue;
// };

// decrementBtn.addEventListener('click', onDecrementBtnClick);
// incrementBtn.addEventListener('click', onIncrementBtnClick);


const decrementBtn = document.querySelector("[data-action='decrement']");
const incrementBtn = document.querySelector("[data-action='increment']");
const spanEl = document.querySelector('#value');

let counterValue = 0;

const changeValue = (step) => {
    counterValue += step;

    spanEl.innerHTML = counterValue;
}

decrementBtn.addEventListener('click', ()=>changeValue(-1));
incrementBtn.addEventListener('click', ()=>changeValue(+1));








































// const decrementBtn = document.querySelector("[data-action='decrement']");
// const incrementBtn = document.querySelector("[data-action='increment']");
// const spanItem = document.querySelector('#value');

// let counterValue = 0;

// const decrement = () => {
//     counterValue -= 1;

//     document.getElementById('value').textContent = counterValue;
// };

// const increment = () => {
//     counterValue += 1;

//     document.getElementById('value').textContent = counterValue;
// };

// decrementBtn.addEventListener('click', decrement);
// incrementBtn.addEventListener('click', increment);