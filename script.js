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
const quoteElement = document.getElementById("quote");
const themeToggle = document.getElementById("theme-toggle");

// Toggle music playback
toggle.onclick = () => {
  if (music.paused) {
    music.play();
    toggle.textContent = "🔊 Music: On";
  } else {
    music.pause();
    toggle.textContent = "🔇 Music: Off";
  }
};

// Display a new quote with fade-in and fade-out animations
function newQuote() {
  if (!quoteElement) return; // Ensure the element exists
  quoteElement.classList.remove("fade-in");
  quoteElement.classList.add("fade-out");

  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = `"${quotes[randomIndex]}"`;
    quoteElement.classList.remove("fade-out");
    quoteElement.classList.add("fade-in");
  }, 300);
}

// Apply the selected theme
function applyTheme(theme) {
  document.body.className = theme;
  localStorage.setItem("vibe-theme", theme);
  themeToggle.textContent =
    theme === "light-mode" ? "🌙 Dark Mode" : "🌞 Light Mode";
}

// Load the saved theme on page load
const savedTheme = localStorage.getItem("vibe-theme") || "dark-mode";
applyTheme(savedTheme);

// Toggle theme on click
themeToggle.onclick = () => {
  const currentTheme = document.body.className;
  const newTheme = currentTheme === "light-mode" ? "dark-mode" : "light-mode";
  applyTheme(newTheme);
};

