
    // Animate on Scroll
    AOS.init({ duration: 1000, once: true });

    // Mobile Menu Toggle
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Word Rotator
    const words = ["Luxury Media", "Art & Imagination", "Creative Excellence", "The Duke Experience"];
    let index = 0;
    const changingText = document.getElementById('changing-text');
    setInterval(() => {
      index = (index + 1) % words.length;
      changingText.textContent = words[index];
    }, 2500);

<!-- ✨ JavaScript for Smooth Scroll -->
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


