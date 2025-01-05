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
        
        // Change timer color every second
        if (countdown > 6) {
            timerElement.style.color = "#FF5722"; // Red color for >6 seconds
        } else if (countdown > 3) {
            timerElement.style.color = "#FF9800"; // Orange color for >3 seconds
        } else {
            timerElement.style.color = "#4CAF50"; // Green color for <=3 seconds
        }

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