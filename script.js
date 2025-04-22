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

const music = document.getElementById("bg-music");
const toggle = document.getElementById("music-toggle");

toggle.onclick = () => {
  if (music.paused) {
    music.play();
    toggle.textContent = "🔊 Music: On";
  } else {
    music.pause();
    toggle.textContent = "🔇 Music: Off";
  }
};

function newQuote() {
  const quoteElement = document.getElementById("quote");
  quoteElement.classList.remove("fade-in");
  quoteElement.classList.add("fade-out");

  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = `"${quotes[randomIndex]}"`;
    quoteElement.classList.remove("fade-out");
    quoteElement.classList.add("fade-in");
  }, 300);
}
