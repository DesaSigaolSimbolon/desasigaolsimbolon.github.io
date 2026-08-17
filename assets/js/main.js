// Animate destination cards on scroll
document.addEventListener("DOMContentLoaded", function () {
  var cards = document.querySelectorAll(".destination-card");
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    cards.forEach(function (card) {
      card.style.opacity = 0;
      card.style.transform = "translateY(24px)";
      card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      observer.observe(card);
    });
  }
});

// Toggle navigation menu
const navToggle = document.querySelector(".nav-toggle");
const siteHeader = document.querySelector(".site-header");

if (navToggle && siteHeader) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteHeader.classList.toggle("is-open");

    navToggle.setAttribute("aria-expanded", isOpen);
    navToggle.setAttribute(
      "aria-label",
      isOpen ? "Tutup navigasi" : "Buka navigasi",
    );
  });
}

// Change header style on scroll
const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Highlight active section in navigation
const navLinks = document.querySelectorAll(".site-nav a[data-section]");
const sections = document.querySelectorAll("section[id]");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.toggle(
            "active",
            link.dataset.section === entry.target.id,
          );
        });
      }
    });
  },
  {
    rootMargin: "-30% 0px -60% 0px",
  },
);

sections.forEach((section) => observer.observe(section));
