const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('confirmation');

//This is the great way

//show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';

    const small = formControl.querySelector('small');
    small.innerText = message;
}
//show success outline
function showSuccess (input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//check იფ email is valid
function checkEmail(input) {
    const re = /^([^\s\@])+\@(([^\s\@\.])+\.)+([^\s\.]{2,})+$/gmi;
    
    if (re.test(input.toLowerCase())) {
        showSuccess(input);
    } else {
        showError(input, 'Email is not valid');
    }
}
//check required fields
function checkRequired(inputArr){
    inputArr.forEach(function(input) {
        console.log(input.value);
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is Required`);
        } else {
            showSuccess(input);
        }
    });
}

//check input length
function checkLength(input, min, max) {
    if (input.value.length < min){
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if (input.value.length > max){
        showError(input, `${getFieldName(input)} must be less then ${max} characters`);
    } else {
        showSuccess(input);
    }
}

//check password match
function checkPasswordMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Passwords do not match!');
    }
}

//Get fieldName
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Loop which gets the element info after submitting the form
form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkPasswordMatch(password, confirmation);
    checkEmail(email);
})

// This is easy way with if/else statements, but now flexible

//show input error message
// function showError(input, message) {
//     const formControl = input.parentElement;
//     formControl.className = 'form-control error';

//     const small = formControl.querySelector('small');
//     small.innerText = message;
// }
// //show success outline
// function showSuccess (input, message) {
//     const formControl = input.parentElement;
//     formControl.className = 'form-control success';
// }
// //check email is valid
// function isValidEmail(email) {
//     const re = /^([^\s\@])+\@(([^\s\@\.])+\.)+([^\s\.]{2,})+$/gmi;
//         return re.test(String(email).toLowerCase());
// }

// form.addEventListener('submit', function(e) {
//     e.preventDefault();

//     if (username.value === '') {
//         showError(username, 'Please, enter a username');
//     } else {
//         showSuccess(username);
//     }

//     if (email.value === '') {
//         showError(email, 'Please, enter a Email');
//     } else if (!isValidEmail(email.value)) {
//         showError(email, 'Email is not valid')
//     } else {
//         showSuccess(email);
//     }

//     if (password.value === '') {
//         showError(password, 'Please enter a password');
//     } else {
//         showSuccess(password);
//     }

//     if (password2.value === '') {
//         showError(password2, 'Password Confirmation Required');
//     } else {
//         showSuccess(password2);
//     }

//     console.log(username.value);
// })



