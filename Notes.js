// script.js

let progress = 0;  // Track progress

// On page load, check for saved subject and unit selections
window.onload = function() {
    // Retrieve saved values from localStorage
    const savedSubject = localStorage.getItem('subject');
    const savedUnit = localStorage.getItem('unit');

    // If there is a saved subject, set it in the dropdown
    if (savedSubject) {
        document.getElementById('subject').value = savedSubject;
        unlockUnitOptions(); // Unlock the units based on the saved subject
    }

    // If there is a saved unit, set it in the dropdown
    if (savedUnit) {
        document.getElementById('unit').value = savedUnit;
    }
};

// Function to unlock unit options based on selected subject
function unlockUnitOptions() {
    const subject = document.getElementById('subject').value;
    if (subject) {
        document.querySelector('.unit-selector').style.display = 'block';
    } else {
        document.querySelector('.unit-selector').style.display = 'none';
        document.getElementById('notes-container').style.display = 'none';
    }
}

// Function to submit notes and store subject/unit
function submitNotes() {
    const subject = document.getElementById('subject').value;
    const unit = document.getElementById('unit').value;
    let pageUrl = '';

    // Save the subject and unit in localStorage for future visits
    localStorage.setItem('subject', subject);
    localStorage.setItem('unit', unit);

    if (subject === 'nosql') {
        if (unit === 'unit1') pageUrl = 'Nosql(unit1).html';
        else if (unit === 'unit2') pageUrl = 'Nosql(unit2).html';
        else if (unit === 'unit3') pageUrl = 'Nosql(unit3).html';
        else if (unit === 'unit4') pageUrl = 'Nosql(unit4).html';
    }

    if (subject === 'Operations Research') {
        if (unit === 'unit1') pageUrl = 'or1.html';
        else if (unit === 'unit2') pageUrl = 'or2.html';
        else if (unit === 'unit3') pageUrl = 'or3.html';
        else if (unit === 'unit4') pageUrl = 'or4.html';
    }

    if (subject === 'Big Data Processing') {
        if (unit === 'unit1') pageUrl = 'BD-unit1.html';
        else if (unit === 'unit2') pageUrl = 'BD-unit2.html';
        else if (unit === 'unit3') pageUrl = 'BD-unit3.html';
        else if (unit === 'unit4') pageUrl = 'BD-unit4.html';
    }

    if (subject === 'Deep Learning') {
        if (unit === 'unit1') pageUrl = 'dl-unit1.html';
        else if (unit === 'unit2') pageUrl = 'dl-unit2.html';
        else if (unit === 'unit3') pageUrl = 'dl-unit3.html';
        else if (unit === 'unit4') pageUrl = 'dl-unit4.html';
    }

    if (subject === 'Cryptography And Network Security') {
        if (unit === 'unit1') pageUrl = 'cns-unit1.html';
        else if (unit === 'unit2') pageUrl = 'cns-unit2.html';
        else if (unit === 'unit3') pageUrl = 'cns-unit3.html';
        else if (unit === 'unit4') pageUrl = 'cns-unit4.html';
    }

    if (subject === 'UIUX') {
        if (unit === 'unit1') pageUrl = 'UIUX-unit1.html';
        else if (unit === 'unit2') pageUrl = 'UIUX-unit2.html';
        else if (unit === 'unit3') pageUrl = 'UIUX-unit3.html';
        else if (unit === 'unit4') pageUrl = 'UIUX-unit4.html';
    }

    if (subject === 'Fog and Edge') {
        if (unit === 'unit1') pageUrl = 'fog_and_edge-unit1.html';
        else if (unit === 'unit2') pageUrl = 'fog_and_edge-unit2.html';
        else if (unit === 'unit3') pageUrl = 'fog_and_edge-unit3.html';
        else if (unit === 'unit4') pageUrl = 'fog_and_edge-unit4.html';
    }

    // If page URL is valid, initiate progress bar filling
    if (pageUrl) {
        fillProgressBar(() => {
            window.location.href = pageUrl;
        });
    } else {
        alert('Please select a valid subject and unit.');
    }
}

// Function to fill the progress bar in steps
function fillProgressBar(callback) {
    let progressBar = document.getElementById('progress');
    let progressInterval = setInterval(() => {
        if (progress < 100) {
            progress += 25;  // Fill the progress bar in 25% increments
            progressBar.style.width = progress + '%';
        } else {
            clearInterval(progressInterval);
            callback();  // Once the progress is 100%, execute the callback to open the notes page
        }
    }, 500);  // Adjust the interval speed (in milliseconds)
}
