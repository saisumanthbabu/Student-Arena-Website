// Get all the question elements
const questions = document.querySelectorAll('.question');

// Variable to keep track of the currently open answer
let currentOpenAnswer = null;

// Add click event listener to each question
questions.forEach((question) => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling; // The <p> element with the answer

        // If there's an open answer and it's not the one we're currently toggling, close it
        if (currentOpenAnswer && currentOpenAnswer !== answer) {
            currentOpenAnswer.classList.remove('show');
            currentOpenAnswer.classList.add('hide');
        }

        // Toggle the current answer
        if (answer.classList.contains('show')) {
            answer.classList.remove('show');
            answer.classList.add('hide');
            currentOpenAnswer = null;  // If the same answer is clicked, close it
        } else {
            answer.classList.remove('hide');
            answer.classList.add('show');
            currentOpenAnswer = answer;  // Set the current open answer
        }
    });
});
