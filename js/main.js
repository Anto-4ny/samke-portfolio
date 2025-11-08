(function ($) {
  "use strict";

  /* ------------------------------
     ✅ PORTFOLIO ISOTOPE FILTER
  ------------------------------ */
  $(window).on("load", function () {
    const portfolioContainer = $(".portfolio-container");
    if (portfolioContainer.length) {
      const portfolioIsotope = portfolioContainer.isotope({
        itemSelector: ".portfolio-item",
        layoutMode: "fitRows",
      });

      $("#portfolio-flters li").on("click", function () {
        $("#portfolio-flters li").removeClass("active");
        $(this).addClass("active");
        portfolioIsotope.isotope({ filter: $(this).data("filter") });
      });
    }
  });

  /* ------------------------------
     ✅ BACK TO TOP BUTTON
  ------------------------------ */
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });

  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  /* ------------------------------
     ✅ TESTIMONIALS CAROUSEL
  ------------------------------ */
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    dots: true,
    loop: true,
    items: 1,
  });

})(jQuery);

/* ------------------------------
   ✅ AOS INITIALIZATION
------------------------------ */
document.addEventListener("DOMContentLoaded", () => {
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 1000,
      once: true,
    });
  } else {
    console.warn("⚠️ AOS not loaded — check your <script> order.");
  }

  /* ------------------------------
     ✅ MOBILE MENU TOGGLE
  ------------------------------ */
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  /* ------------------------------
     ✅ WORD ROTATOR
  ------------------------------ */
  const words = [
    "Luxury Media",
    "Art & Imagination",
    "Creative Excellence",
    "The Duke Experience",
  ];
  let index = 0;
  const changingText = document.getElementById("changing-text");
  if (changingText) {
    setInterval(() => {
      index = (index + 1) % words.length;
      changingText.textContent = words[index];
    }, 2500);
  }
});
