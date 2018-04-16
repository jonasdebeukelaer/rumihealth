(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 70)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };

  // Collapse now if page is not at top
  navbarCollapse();

  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  $("#expand-obsalim").click (function() {
    if ($("#expand-obsalim").text().toLowerCase() == "read on") {
      $("#expand-obsalim").text("Collapse");
      $("#gradient").addClass("hide-gradient");
    } else {
      $("#expand-obsalim").text("Read on");
      $("#gradient").removeClass("hide-gradient");
      //smooth scroll stuff
      // var target = $(this.hash);
      // console.log("trying")
      // target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // if (target.length) {
      //   $('html, body').animate({
      //     scrollTop: (target.offset().top - 70)
      //   }, 1000, "easeInOutExpo", function () {
      //     console.log("odifnsdofshdfjks")
              
      //   });
      //   return false;
      // }
    }
  })

  $("#expand-courses").click (function() {
    if ($("#expand-courses").text().toLowerCase() == "read on") {
      $("#expand-courses").text("Collapse");
      $("#gradient-white").addClass("hide-gradient");
    } else {
      $("#expand-courses").text("Read on");
      $("#gradient-white").removeClass("hide-gradient");
    }
  })

})(jQuery); // End of use strict
