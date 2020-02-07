// form blue event listeners
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName(){
    const name = document.getElementById('name');
    const regularExpression = /^[a-zA-Z]{2,15}$/;

    if(!regularExpression.test(name.value)){
        name.classList.add('is-invalid');
    } else {
        name.classList.remove('is-invalid')
    }    
}

function validateZip(){
    const zip = document.getElementById('zip');
    const regularExpression = /^[0-9]{5}(-[0-9]{4})?$/;

    if(!regularExpression.test(zip.value)){
        zip.classList.add('is-invalid');
    } else {
        zip.classList.remove('is-invalid')
    } 
}

function validateEmail(){
    const email = document.getElementById('email');
    const regularExpression = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if(!regularExpression.test(email.value)){
        email.classList.add('is-invalid');
    } else {
        email.classList.remove('is-invalid')
    } 
}

function validatePhone(){
    const phoine = document.getElementById('phone');
    const regularExpression = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

    if(!regularExpression.test(phone.value)){
        phone.classList.add('is-invalid');
    } else {
        phone.classList.remove('is-invalid')
    } 
}