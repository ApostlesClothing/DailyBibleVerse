// Set the starting date
const startDate = new Date("2025-06-01");
const today = new Date();

// Normalize both dates to midnight (remove time part)
startDate.setHours(0, 0, 0, 0);
today.setHours(0, 0, 0, 0);

// Calculate the day difference
const dayDiff = Math.floor((today - startDate) / (1000 * 60 * 60 * 24)) + 1;

const photoElement = document.getElementById("daily-photo");
const messageElement = document.getElementById("message");

if (dayDiff >= 1 && dayDiff <= 50) {
  const imgPath = `images/${dayDiff}.png`;
  photoElement.src = imgPath;
} else if (dayDiff < 1) {
  messageElement.textContent = "The photos will start displaying on June 1, 2025.";
  photoElement.style.display = "none";
} else {
  messageElement.textContent = "All 50 photos have been shown!";
  photoElement.style.display = "none";
}
