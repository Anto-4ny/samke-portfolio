// ==============================
// ✅ HERO IMAGE CAROUSEL
// ==============================
const images = document.querySelectorAll('.carousel-image');
let current = 0;

setInterval(() => {
  // Hide all images
  images.forEach((img) => {
    img.classList.remove('opacity-100');
    img.classList.add('opacity-0');
  });

  // Show the current image
  images[current].classList.remove('opacity-0');
  images[current].classList.add('opacity-100');

  // Move to next image
  current = (current + 1) % images.length;
}, 3000);


// ==============================
// ✅ ANIMATE ON SCROLL (AOS)
// ==============================
AOS.init({
  duration: 1000, // animation duration in ms
  once: true      // animation happens only once
});


// ==============================
// ✅ MOBILE MENU TOGGLER
// ==============================
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});


// ==============================
// ✅ NAV LINK ACTIVE HIGHLIGHT ON SCROLL
// ==============================
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY;

  navLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute('href'));
    if (section) {
      if (
        scrollPos >= section.offsetTop - 80 &&
        scrollPos < section.offsetTop + section.offsetHeight - 80
      ) {
        link.classList.add('text-yellow-400');
      } else {
        link.classList.remove('text-yellow-400');
      }
    }
  });
});


// ==============================
// ✅ WORD ROTATOR / TEXT CHANGER
// ==============================
const words = ["Luxury Media", "Art & Imagination", "Creative Excellence", "The Duke Experience"];
let index = 0;
const changingText = document.getElementById('changing-text');

setInterval(() => {
  index = (index + 1) % words.length;
  changingText.textContent = words[index];
}, 2500);


// ==============================
// ✅ BACK TO TOP BUTTON
// ==============================
const backToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backToTop.classList.remove("hidden");
  } else {
    backToTop.classList.add("hidden");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
