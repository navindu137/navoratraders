const launchDate = new Date("2026-09-18T00:00:00+05:30").getTime();

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const badge = document.querySelector(".badge");
const yearEl = document.getElementById("year");

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

let timerInterval = null;

function updateCountdown() {
  const now = Date.now();
  const distance = launchDate - now;

  if (distance <= 0) {
    if (days) days.textContent = "00";
    if (hours) hours.textContent = "00";
    if (minutes) minutes.textContent = "00";
    if (seconds) seconds.textContent = "00";
    if (badge) badge.textContent = "WE ARE LIVE";

    if (timerInterval) clearInterval(timerInterval);
    return;
  }

  const d = Math.floor(distance / (1000 * 60 * 60 * 24));
  const h = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const m = Math.floor((distance / (1000 * 60)) % 60);
  const s = Math.floor((distance / 1000) % 60);

  if (days) days.textContent = String(d).padStart(2, "0");
  if (hours) hours.textContent = String(h).padStart(2, "0");
  if (minutes) minutes.textContent = String(m).padStart(2, "0");
  if (seconds) seconds.textContent = String(s).padStart(2, "0");
}

updateCountdown();
timerInterval = setInterval(updateCountdown, 1000);