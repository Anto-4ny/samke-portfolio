(function ($) {
    "use strict";

 // Show/Hide Navbar on Scroll
$(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
        $('.custom-navbar').fadeIn('slow').css('display', 'flex');
    } else {
        $('.custom-navbar').fadeOut('slow').css('display', 'none');
    }
});

// Smooth Scroll with Active Link Highlight
$(".navbar-nav a").on('click', function (event) {
    if (this.hash !== "") {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top - 70
        }, 1200, 'easeInOutExpo');

        $('.navbar-nav .active').removeClass('active');
        $(this).addClass('active');
    }
});

  // Typed.js Init
if ($('.typed-text-output').length == 1) {
    var typed_strings = $('.typed-text').text();
    new Typed('.typed-text-output', {
        strings: typed_strings.split(', '),
        typeSpeed: 90,
        backSpeed: 30,
        loop: true
    });
}

// Video Modal
$(document).ready(function () {
    let $videoSrc;
    $('.btn-play').click(function () {
        $videoSrc = $(this).data("src");
    });

    $('#videoModal').on('shown.bs.modal', function () {
        $("#video").attr('src', $videoSrc + "?autoplay=1&modestbranding=1&showinfo=0");
    });

    $('#videoModal').on('hide.bs.modal', function () {
        $("#video").attr('src', "");
    });
});

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




