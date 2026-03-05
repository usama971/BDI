// BDI Games - Scripts

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const yearEl = document.getElementById("year");

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("show");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target.tagName === "A" && navLinks.classList.contains("show")) {
      navLinks.classList.remove("show");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}

// Scroll-triggered animations
const animateOnScroll = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-visible");
    }
  });
}, { threshold: 0.1, rootMargin: "0px 0px -30px 0px" });

document.querySelectorAll(".section-about-company, .section-highlights, .section-about-bdi, .section-header, .game-card").forEach((el) => {
  el.classList.add("animate-on-scroll");
  animateOnScroll.observe(el);
});
