
    // Animate on Scroll
    AOS.init({ duration: 1000, once: true });
//mobile toggler
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Highlight active link on scroll
window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY;
  navLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute('href'));
    if(section) {
      if(scrollPos >= section.offsetTop - 80 && scrollPos < section.offsetTop + section.offsetHeight - 80){
        link.classList.add('text-yellow-400');
      } else {
        link.classList.remove('text-yellow-400');
      }
    }
  });
});

    // Word Rotator
    const words = ["Luxury Media", "Art & Imagination", "Creative Excellence", "The Duke Experience"];
    let index = 0;
    const changingText = document.getElementById('changing-text');
    setInterval(() => {
      index = (index + 1) % words.length;
      changingText.textContent = words[index];
    }, 2500);

  // Back to Top Visibility + Scroll
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



