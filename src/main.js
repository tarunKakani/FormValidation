const form = document.getElementById('loginForm');
    const emailInput = document.querySelector('.email');
    const passwordInput = document.querySelector('.password');
    const errorMessages = document.querySelectorAll('.error-message');

    form.addEventListener('submit', function(e) {
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