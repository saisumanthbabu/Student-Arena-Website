const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

const emailInput = document.querySelector('.sign-in input[type="email"]');
const passwordInput = document.querySelector('.sign-in input[type="password"]');
const signInButton = document.querySelector('.sign-in button');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Event listener for the Sign In button
signInButton.addEventListener('click', (e) => {
    e.preventDefault();  // Prevent form submission

    const email = emailInput.value;
    const password = passwordInput.value;

    // List of valid email addresses
    const validEmails = [
        "y22cd095@arena.com",
        "y22cd081@arena.com",
        "y22cd096@arena.com",
        "y22cd124@arena.com",
        "y22cd078@arena.com",
        "y22cd113@arena.com",
        "y22cd115@arena.com",
        "y22cd126@arena.com",
        "y22cd071@arena.com",
        "l23cd211@arena.com",
        "l23cd203@arena.com",
        "l23cd203@arena.com"
    ];

    // List of valid passwords corresponding to the above emails
    const validPasswords = [
        "MadTechies@123",
        "MadTechies@123",
        "MadTechies@123",
        "MadTechies@123",
        "MadTechies@123",
        "MadTechies@123",
        "MadTechies@123",
        "MadTechies@123",
        "MadTechies@123",
        "MadTechies@123",
        "MadTechies@123",
        "MadTechies@123"
    ];

    // Check if the entered email exists in validEmails
    const emailIndex = validEmails.indexOf(email);
   
    // If email exists and password matches
    if (emailIndex !== -1 && password === validPasswords[emailIndex]) {
        // Redirect to Arena.html
        window.location.href = 'Arena.html';
    } else {
        // Show error if email or password is incorrect
        alert("Invalid email or password");
    }
});

// Password visibility toggle function
function togglePasswordVisibility() {
    const passwordField = document.getElementById('password');
    const icon = document.getElementById('eye-icon');

    // Toggle password visibility
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        icon.textContent = '🙈'; // Change the eye icon to 'closed'
    } else {
        passwordField.type = 'password';
        icon.textContent = '👁️'; // Change the eye icon to 'open'
    }
}
