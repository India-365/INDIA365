document.addEventListener("DOMContentLoaded", function() {
    const signupForm = document.getElementById("signupForm");
    const usernameInput = document.getElementById("usernameInput");
    const emailInput = document.getElementById("emailInput");
    const passwordInput = document.getElementById("passwordInput");
    const confirmPasswordInput = document.getElementById("confirmPasswordInput");
    const agreeToTermsCheckbox = document.getElementById("agreeToTermsCheckbox");

    signupForm.addEventListener("submit", function(event) {
        event.preventDefault();
        if (!validateForm()) {
            return;
        }

        // Simulate sign up process (replace this with actual sign up logic)
        const userData = {
            username: usernameInput.value,
            email: emailInput.value,
            password: passwordInput.value
        };

        // Example: send userData to server or store in local storage

        alert("Sign up successful! You can now login with your credentials.");
        // Redirect to login page
        window.location.href = "login.html";
    });

    function validateForm() {
        if (!usernameInput.value.trim()) {
            alert("Please enter a username.");
            return false;
        }

        if (!emailInput.value.trim()) {
            alert("Please enter an email address.");
            return false;
        }

        if (!validateEmail(emailInput.value.trim())) {
            alert("Please enter a valid email address.");
            return false;
        }

        if (!passwordInput.value.trim()) {
            alert("Please enter a password.");
            return false;
        }

        if (passwordInput.value !== confirmPasswordInput.value) {
            alert("Passwords do not match.");
            return false;
        }

        if (!isValidPassword(passwordInput.value)) {
            alert("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.");
            return false;
        }

        if (!agreeToTermsCheckbox.checked) {
            alert("Please agree to the Terms of Service and Privacy Policy.");
            return false;
        }

        return true;
    }

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function isValidPassword(password) {
        // Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
    }
});
