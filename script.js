// script.js
const quotes = [
  "Breathe. Relax. Flow.",
  "You are doing great.",
  "Trust the process.",
  "Good vibes only.",
  "Create something beautiful.",
  "Take it slow. You’re growing.",
  "Be a rainbow in someone else's cloud.",
  "Energy is everything. Protect yours.",
  "Small steps lead to big change.",
  "You are art. You are the vibe."
];

function newQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quoteElement = document.getElementById("quote");
  quoteElement.style.opacity = 0;
  setTimeout(() => {
    quoteElement.textContent = `"${quotes[randomIndex]}"`;
    quoteElement.style.opacity = 1;
  }, 300);
}

