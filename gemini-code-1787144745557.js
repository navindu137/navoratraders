document.addEventListener("DOMContentLoaded", () => {
  // Set target launch date (18 September 2026, 00:00:00)
  const launchDate = new Date("September 18, 2026 00:00:00").getTime();

  // Cache DOM elements
  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");
  const yearEl = document.getElementById("year");

  // Set current year for the footer
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const padZero = (num) => String(num).padStart(2, "0");

  const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = launchDate - now;

    if (distance <= 0) {
      if (daysEl) daysEl.textContent = "00";
      if (hoursEl) hoursEl.textContent = "00";
      if (minutesEl) minutesEl.textContent = "00";
      if (secondsEl) secondsEl.textContent = "00";
      clearInterval(timerInterval);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60))Here is the companion `script.js` to complete your "Coming Soon" landing page. It powers the live countdown timer targeting **September 18, 2026**, and automatically populates the current copyright year in the footer.

```javascript
// Set the target launch date: September 18, 2026 (00:00:00 local time)
const launchDate = new Date('2026-09-18T00:00:00').getTime();

// Cache DOM elements
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const yearEl = document.getElementById('year');

// Set the dynamic footer year
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

function updateCountdown() {
  const now = Date.now();
  const timeRemaining = launchDate - now;

  if (timeRemaining <= 0) {
    // Launch reached
    daysEl.textContent = '00';
    hoursEl.textContent = '00';
    minutesEl.textContent = '00';
    secondsEl.textContent = '00';
    clearInterval(timerInterval);
    return;
  }

  // Time calculations
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Format with leading zeros
  daysEl.textContent = String(days).padStart(2, '0');
  hoursEl.textContent = String(hours).padStart(2, '0');
  minutesEl.textContent = String(minutes).padStart(2, '0');
  secondsEl.textContent = String(seconds).padStart(2, '0');
}

// Initial call to avoid layout delay, then update every second
updateCountdown();
const timerInterval = setInterval(updateCountdown, 1000);