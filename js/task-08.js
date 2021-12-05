const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onHeandlSubmit);

function onHeandlSubmit(event) {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements;
    
    if (email.value.trim() === '' || password.value.trim() === '') 
        return alert('Fill in all the fields')
    
    const formData = new FormData(event.currentTarget);
    const dataFormValue = {};
    formData.forEach((value, name) => {
    dataFormValue[name] = value;   
    });

    console.log(dataFormValue);
    
    formEl.reset();
};


