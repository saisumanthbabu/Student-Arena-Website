// Greeting Message Based on Time
window.addEventListener('load', () => {
    const greetingMessage = document.getElementById('greetingMessage');
    const hour = new Date().getHours();

    if (hour < 12) {
        greetingMessage.textContent = 'Good Morning, Welcome to the Student Arena!';
    } else if (hour < 18) {
        greetingMessage.textContent = 'Good Afternoon, Welcome to the Student Arena!';
    } else {
        greetingMessage.textContent = 'Good Evening, Welcome to the Student Arena!';
    }
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const icon = darkModeToggle.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
});
