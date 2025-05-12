// Smooth Scroll Functionality for Get Started Button
document.querySelector('.get-started-btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.services-section').scrollIntoView({
        behavior: 'smooth'
    });
});

// Create and append the Scroll-to-top Button dynamically
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.classList.add('scroll-to-top');
scrollToTopBtn.innerText = '↑';
document.body.appendChild(scrollToTopBtn);

// Show/Hide Scroll-to-top Button based on Scroll Position
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

// Smooth Scroll to Top functionality
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


// Show/Hide Scroll-to-top Button based on Scroll Position
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollToTopBtn.classList.remove('hidden');  // Show the button
    } else {
        scrollToTopBtn.classList.add('hidden');     // Hide the button
    }
});

// Smooth Scroll to Top functionality
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    // Hide the button after clicking it
    scrollToTopBtn.classList.add('hidden');
});

// Optional: Real-time Toast Notifications
function showToast(message) {
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerText = message;
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = 0;
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}

// Example Toast Notification
setTimeout(() => {
    showToast('Welcome to Student Arena! Start exploring your learning resources.');
}, 1000);

