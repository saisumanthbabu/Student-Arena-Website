document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");
    const errorMessage = document.createElement("p");
    errorMessage.className = "error-message";

    // Eye icon elements
    const passwordEye = document.getElementById("password-eye");
    const confirmPasswordEye = document.getElementById("confirm-password-eye");

    // Append error message to the form
    form.appendChild(errorMessage);

    // Toggle password visibility
    passwordEye.addEventListener("click", () => {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
        } else {
            passwordInput.type = "password";
        }
    });
confirmPasswordEye.addEventListener("click", () => {
        if (confirmPasswordInput.type === "password") {
            confirmPasswordInput.type = "text";
        } else {
            confirmPasswordInput.type = "password";
        }
    });

    form.addEventListener("submit", (event) => {
        // Clear previous error messages
        errorMessage.textContent = "";

        // Reset the error states
        passwordInput.classList.remove("error");
        confirmPasswordInput.classList.remove("error");

        // Password validation rules
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();

        if (password.length < 8) {
            errorMessage.textContent = "Password must be at least 8 characters long.";
            event.preventDefault();
        } else if (!/[A-Z]/.test(password)) {
            errorMessage.textContent = "Password must include at least one uppercase letter.";
            event.preventDefault();
        } else if (!/[a-z]/.test(password)) {
            errorMessage.textContent = "Password must include at least one lowercase letter.";
            event.preventDefault();
        } else if (!/[0-9]/.test(password)) {
            errorMessage.textContent = "Password must include at least one number.";
            event.preventDefault();
        } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            errorMessage.textContent = "Password must include at least one special character.";
            event.preventDefault();
        } else if (password !== confirmPassword) {
            errorMessage.textContent = "Passwords do not match.";
            // Add error class for styling
            passwordInput.classList.add("error");
            confirmPasswordInput.classList.add("error");

            // Clear the password field
            passwordInput.value = "";

            event.preventDefault();
        } else {
            alert("Account created successfully!");
        }
    });
});
