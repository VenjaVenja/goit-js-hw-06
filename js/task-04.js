const decrementBtn = document.querySelector("[data-action='decrement']");
const incrementBtn = document.querySelector("[data-action='increment']");
const spanItem = document.querySelector('#value');

let counterValue = 0;

const decrement = () => {
    counterValue -= 1;

    document.getElementById('value').textContent = counterValue;
};

const increment = () => {
    counterValue += 1;

    document.getElementById('value').textContent = counterValue;
};

decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);