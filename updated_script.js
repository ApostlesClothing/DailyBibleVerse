const today = new Date();
const start = new Date(today.getFullYear(), 0, 0);
const diff = today - start + ((start.getTimezoneOffset() - today.getTimezoneOffset()) * 60 * 1000);
const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));

const photoElement = document.getElementById("daily-photo");
const imageNumber = (dayOfYear % 365) + 1;
photoElement.src = `images/${imageNumber}.png`;
