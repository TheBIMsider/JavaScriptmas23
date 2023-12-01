// #JavaScriptmas 2023 Day 1 Challenge
  // Task:
  // - Get today's date (you only need the day).
  // - Calculate remaining days.
  // - Display remaining days in countdownDisplay.

  // Stretch goals:
  // - Display hours, minutes, seconds.
  // - Add a countdown for another festival, your birthday, or Christmas 2024.

const countdownDisplay = document.getElementById("countdown-display")
// Get current date information
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();
//today = mm + '/' + dd + '/' + yyyy;
//document.write(today);

function renderCountdown(){
  const christmas = 25
  let daysLeft = String(christmas - dd)
  countdownDisplay.innerHTML = (daysLeft);
}

renderCountdown()

function updateCountdown() {
  // Get the current date and time
  let now = new Date();

  // Set the target date to December 25th of the current year
  let targetDate = new Date(now.getFullYear(), 11, 25);

  // Calculate the time difference in milliseconds
  let timeDifference = targetDate - now;

  // Calculate days, hours, minutes, and seconds
  let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Format the countdown as DD:HH:MM:SS
  let countdownString = padZero(days) + " day " + padZero(hours) + " hours " + padZero(minutes) + " minutes " + padZero(seconds) + " seconds";

  // Update the content of the HTML element with id "countdown"
  document.getElementById ("time-display").textContent = countdownString;
}

// Add a leading zero to single-digit numbers
function padZero(number) {
  return (number < 10 ? '0' : '') + number;
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initial update
updateCountdown();