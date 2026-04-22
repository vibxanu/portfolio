// Dark/Light toggle
const html = document.documentElement;
const toggle = document.getElementById("themeToggle");
const saved = localStorage.getItem("theme") || "light";

if (saved === "dark") html.setAttribute("data-theme", "dark");

toggle.addEventListener("click", () => {
  const isDark = html.getAttribute("data-theme") === "dark";
  html.setAttribute("data-theme", isDark ? "light" : "dark");
  localStorage.setItem("theme", isDark ? "light" : "dark");
  toggle.textContent = isDark ? "🌙" : "☀️";
});

// Contact form
const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (!name || !email || !message) {
    status.textContent = "⚠️ Please fill in all fields.";
    status.style.color = "red";
    return;
  }

  status.textContent = "✅ Message sent successfully (demo only).";
  status.style.color = "green";
  form.reset();
});
