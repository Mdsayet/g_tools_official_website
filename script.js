let countdown = 10; // Set initial countdown time
let timerElement = document.getElementById("timer");
let freeButton = document.getElementById("freeButton");
let paidButton = document.getElementById("paidButton");

// Show the popup when the page loads
window.onload = function() {
    document.getElementById("popup").style.display = "flex";
    startTimer();
};

// Function to start the countdown timer
function startTimer() {
    let timerInterval = setInterval(function() {
        timerElement.innerText = countdown;
        countdown--;

        if (countdown < 0) {
            clearInterval(timerInterval);
            freeButton.disabled = false;
            paidButton.disabled = false;
        }
    }, 1000);
}

// When the Free button is clicked
freeButton.onclick = function() {
    window.location.href = "freePanel.html"; // Redirect to free panel page
};

// When the Paid button is clicked
paidButton.onclick = function() {
    window.location.href = "paidPanel.html"; // Redirect to paid panel page
};