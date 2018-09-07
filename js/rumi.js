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
    offset: 100
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

// -------------------------------

  // Hide dropdown when item within it is clicked
  $(".dropdown-item").click(function() {
    $(".dropdown.show").click();
  });

  // Expand/collapse obsalim content
  $("#expand-obsalim").click (function() {
    var collapsingObsalim = ($("#expand-obsalim").text().toLowerCase() == "collapse");
    if (!collapsingObsalim) {
      $("#expand-obsalim").text("Collapse");
      $("#gradient-obsalim").addClass("hide-gradient");
    } else {
      $("#menu-about-obsalim").click();
      $("#expand-obsalim").text("Read on");
      $("#gradient-obsalim").removeClass("hide-gradient");
    }
  })



  // Expand/collapse courses content
  $("#expand-courses").click (function() {
    if ($("#expand-courses").text().toLowerCase() == "read on") {
      $("#expand-courses").text("Collapse");
      $("#gradient-courses").addClass("hide-gradient");
    } else {
      $("#menu-courses").click();
      $("#expand-courses").text("Read on");
      $("#gradient-courses").removeClass("hide-gradient");
    }
  })

})(jQuery); // End of use strict
