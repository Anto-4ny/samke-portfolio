(function ($) {
    "use strict";

// ✅ Smooth Scrolling + Active Link
$(".navbar-nav a").on('click', function (e) {
    if (this.hash !== "") {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top - 70
        }, 800);
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
        $('.navbar-collapse').collapse('hide'); // Auto-close after clicking link
    }
});

// ✅ Toggle menu open/close when clicking outside
$(document).click(function (e) {
    if (!$(e.target).closest('.navbar').length) {
        $('.navbar-collapse').collapse('hide');
    }
});


// Typed.js Effect
if ($('.typed-text-output').length == 1) {
    var typed_strings = $('.typed-text').text();
    new Typed('.typed-text-output', {
        strings: typed_strings.split(', '),
        typeSpeed: 90,
        backSpeed: 30,
        loop: true
    });
}

// Scroll to Bottom Icon Visibility
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.scroll-to-bottom').fadeOut('slow');
    } else {
        $('.scroll-to-bottom').fadeIn('slow');
    }
});

    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        items: 1
    });
    
})(jQuery);

  AOS.init({
    duration: 1000,
    once: true
  });









