// Target launch date: September 18, 2026 at 00:00:00 UTC
const targetDate = new Date("2026-09-18T00:00:00Z").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff <= 0) {
        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = String(days).padStart(2, '0');
    document.getElementById("hours").innerText = String(hours).padStart(2, '0');
    document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Form Submission handling with feedback animation
document.getElementById("notifyForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const emailInput = document.getElementById("emailInput");
    const feedback = document.getElementById("formFeedback");
    
    if (emailInput.value) {
        feedback.style.color = "#38bdf8";
        feedback.style.transition = "opacity 0.4s ease";
        feedback.innerText = "✓ Thank you! We have reserved your priority access.";
        emailInput.value = "";
    }
});
