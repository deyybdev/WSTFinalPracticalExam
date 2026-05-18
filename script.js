const form = document.querySelector('form');
const emailInput = document.querySelector('input[type="email"]');
const passwordInput = document.querySelector('input[type="password"]');

form.addEventListener('submit', (e) => {
    let isValid = true;

    const emailValue = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(emailValue)) {
        showError(emailInput, 'Enter a valid email address');
        isValid = false;
    } else {
        showSuccess(emailInput);
    }

    const passwordValue = passwordInput.value.trim();
    if (passwordValue.length < 6) {
        showError(passwordInput, 'Password must be at least 6 characters');
        isValid = false;
    } else {
        showSuccess(passwordInput);
    }

    if (!isValid) {
        e.preventDefault();
    }
});

function showError(input, message) {
    const field = input.parentElement;
    field.classList.add('error');
    field.querySelector('small').innerText = message;
}

function showSuccess(input) {
    const field = input.parentElement;
    field.classList.remove('error');
    field.querySelector('small').innerText = '';
}