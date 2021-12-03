const inputField = document.querySelector('#name-input');
const outputField = document.querySelector('#name-output');

function onInputChange(event){
    if (event.currentTarget.value < 1) {
        outputField.textContent = `Anonymous`;
    } else {
        outputField.textContent = event.currentTarget.value;
    }
};

inputField.addEventListener('input', onInputChange);