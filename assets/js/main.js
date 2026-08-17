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

// Accommodation slideshow
document.querySelectorAll(".accommodation-slideshow").forEach((slideshow) => {
  const prefix = slideshow.dataset.slideshow;
  const imageCount = Number(slideshow.dataset.imageCount);

  const slidesContainer = slideshow.querySelector(".accommodation-slides");
  const dotsContainer = slideshow.querySelector(".accommodation-dots");

  if (!prefix || !imageCount) {
    return;
  }

  const basePath = `${window.JEKYLL_BASEURL || ""}/assets/images/accommodation/`;

  let currentSlide = 0;

  // Create slides
  for (let i = 1; i <= imageCount; i++) {
    const slide = document.createElement("img");

    slide.src = `${basePath}${prefix}-${i}.jpg`;
    slide.alt = "";
    slide.classList.add("accommodation-slide");

    if (i === 1) {
      slide.classList.add("active");
    }

    slidesContainer.appendChild(slide);

    // Create dot
    const dot = document.createElement("button");

    dot.type = "button";
    dot.classList.add("accommodation-dot");

    if (i === 1) {
      dot.classList.add("active");
    }

    dot.setAttribute("aria-label", `View image ${i}`);

    dot.addEventListener("click", () => {
      showSlide(i - 1);
    });

    dotsContainer.appendChild(dot);
  }

  const slides = slideshow.querySelectorAll(".accommodation-slide");
  const dots = slideshow.querySelectorAll(".accommodation-dot");

  function showSlide(index) {
    currentSlide = index;

    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

  // Automatically change image
  if (imageCount > 1) {
    setInterval(() => {
      const nextSlide = (currentSlide + 1) % imageCount;
      showSlide(nextSlide);
    }, 5000);
  }
});
