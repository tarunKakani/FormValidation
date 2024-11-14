const form = document.getElementById('loginForm');
const emailInput = document.querySelector('.email');
const passwordInput = document.querySelector('.password');
const errorMessages = document.querySelectorAll('.error-message');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    clearErrors();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    let hasError = false;

    if (!isValidEmail(email)) {
        showError(emailInput, 'Please enter a valid email address');
        hasError = true;
    }

    if (password.length < 6) {
        showError(passwordInput, 'Password must be at least 6 characters long');
        hasError = true;
    }

    if (!hasError) {
        alert('Form submitted successfully!');
        form.reset();
    }
});

function showError(input, message) {
    const errorDiv = input.nextElementSibling;
    errorDiv.textContent = message;
    errorDiv.classList.remove('hidden');
    input.classList.add('border-red-500');
}

function clearErrors() {
    errorMessages.forEach(error => error.classList.add('hidden'));
    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => input.classList.remove('border-red-500'));
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function passStrength(){
    var score = 0
    let password = passwordInput.value

    //Length Checker
    if (password.length >= 8){
        score += 1
    }

    if (password.length >= 12){
        score += 1
    }

    //Character Variety
    var upperCase = /[A-Z]/.test(password)
    var lowerCase = /[a-z]/.test(password)
    var hasNumbers = /[0-9]/.test(password)
    var hasChars = /[!@#$%^&*(),.?":{}|<>]/.test(password)

    if (upperCase) score += 1;   //one line if statements precise and short
    if (lowerCase) score += 1;
    if (hasNumbers) score += 1;
    if (hasChars) score += 1;

    //Common Patterns
    var commonPatterns = ["qwerty","1234","password","abcd"]

    for (let i in commonPatterns){ // using in instead of ,of
        if (password.lowerCase().includes(commonPatterns)){
            
        }
    }
}