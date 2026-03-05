// BDI Games - Gaming Theme Scripts

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const yearEl = document.getElementById("year");

// Set current year in footer
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Mobile menu toggle
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
const observerOptions = {
  threshold: 0.15,
  rootMargin: "0px 0px -50px 0px"
};

const animateOnScroll = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-visible");
    }
  });
}, observerOptions);

// Observe sections and cards for scroll animation
document.querySelectorAll(".info, .section-header, .portfolio-card").forEach((el) => {
  el.classList.add("animate-on-scroll");
  animateOnScroll.observe(el);
});

