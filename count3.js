const targetDate = "31 December 2024 12:59:59 PM";

// Set the target end date in the DOM
document.getElementById("end-date").innerText = targetDate;

// Select all input fields
const timeInputs = document.querySelectorAll("input");

function updateClock() {
    const end = new Date(targetDate);
    const now = new Date();
    const timeDifference = (end - now) / 1000; // time difference in seconds

    if (timeDifference < 0) return; // Stop if the target date is in the past

    // Calculate remaining time in days, hours, minutes, and seconds
    timeInputs[0].value = Math.floor(timeDifference / 3600 / 24);
    timeInputs[1].value = Math.floor((timeDifference / 3600) % 24);
    timeInputs[2].value = Math.floor((timeDifference / 60) % 60);
    timeInputs[3].value = Math.floor(timeDifference % 60);
}

// Initial call to update the clock immediately
updateClock();

// Update the clock every second
setInterval(updateClock, 1000);