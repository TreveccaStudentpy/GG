// GG main.js - small, clean, mobile-friendly interactions

// Reveal on scroll
const revealEls = () => {
  document.querySelectorAll(".reveal").forEach(el => {
    const rect = el.getBoundingClientRect();
    const inView = rect.top < window.innerHeight - 60;
    if (inView) el.classList.add("show");
  });
};
window.addEventListener("scroll", revealEls);
window.addEventListener("load", revealEls);

// Set "active" nav link based on current page
(() => {
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("[data-nav]").forEach(a => {
    if (a.getAttribute("href") === path) {
      a.style.background = "rgba(255,255,255,0.06)";
      a.style.color = "var(--text)";
      a.style.border = "1px solid rgba(214,179,90,0.18)";
    }
  });
})();