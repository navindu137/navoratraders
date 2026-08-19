document.addEventListener("DOMContentLoaded", () => {
  // Target Launch Date: 18 September 2026 (00:00:00 UTC+05:30)
  const targetDate = new Date("2026-09-18T00:00:00+05:30").getTime();

  // Cache DOM elements
  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");
  const yearEl = document.getElementById("year");

  // Populate dynamic footer year
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  function updateCountdown() {
    const now = Date.now();
    const distance = targetDate - now;

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
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (daysEl) daysEl.textContent = String(days).padStart(2, "0");
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, "0");
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, "0");
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, "0");
  }

  // Run immediately on page load, then start 1-second interval
  updateCountdown();
  const timerInterval = setInterval(updateCountdown, 1000);
});