// Function to toggle the visibility of the FAQ answer
function toggleAnswer(answerId) {
  var answer = document.getElementById(answerId);
  if (answer.style.display === "block") {
    answer.style.display = "none";
  } else {
    answer.style.display = "block";
  }
}
