// ============================
// Mobile Menu Toggle
// ============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show-menu");
});

// ============================
// AOS Initialization
// ============================

AOS.init({
  duration: 1000,
  once: true,
});
