document.addEventListener("DOMContentLoaded", () => {
  // Target Launch Date: 18 September 2026 (00:00:00 UTC+05:30)
  const targetDate = new Date("2026-09-18T00:00:00+05:30").getTime();

  // Cache DOM elements
  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");
  const yearEl = document.getElementById("year");
  const countdownContainer = document.getElementById("countdown-container");

  // Dynamic footer year
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Update text only when the value changes to prevent unnecessary DOM reflows
  function setTimeValue(element, value) {
    if (!element) return;
    const formatted = String(value).padStart(2, "0");
    if (element.textContent !== formatted) {
      element.textContent = formatted;
    }
  }

  let timerInterval = null;

  function updateCountdown() {
    const distance = targetDate - Date.now();

    if (distance <= 0) {
      clearInterval(timerInterval);
      setTimeValue(daysEl, 0);
      setTimeValue(hoursEl, 0);
      setTimeValue(minutesEl, 0);
      setTimeValue(secondsEl, 0);

      if (countdownContainer) {
        countdownContainer.innerHTML = '<p class="launch-live-text">Navora Traders is now Live!</p>';
      }
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setTimeValue(daysEl, days);
    setTimeValue(hoursEl, hours);
    setTimeValue(minutesEl, minutes);
    setTimeValue(secondsEl, seconds);
  }

  // Initial call and interval setup
  updateCountdown();
  timerInterval = setInterval(updateCountdown, 1000);
});
