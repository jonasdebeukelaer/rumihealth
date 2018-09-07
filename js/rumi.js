(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      return smoothScroll(this.hash);
    }
  });

  function smoothScroll(thisHash, callback) {
      var target = $(thisHash);
      target = target.length ? target : $('[name=' + thisHash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 70)
        }, 1000, "easeInOutExpo", callback);
        return false;
      }
  }

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
  $("#obsalim-text").on ("shown.bs.collapse", function(e) {
    $("#expand-obsalim").text("Collapse");
    $("#gradient-obsalim").addClass("hide-gradient");
  })

  $("#obsalim-text").on ("hide.bs.collapse", function(e) {
    collapseSection(e, "obsalim");
  })

  // Expand/collapse courses content
  $("#courses-text").on ("shown.bs.collapse", function(e) {
    $("#expand-courses").text("Collapse");
    $("#gradient-courses").addClass("hide-gradient");
  })

  $("#courses-text").on ("hide.bs.collapse", function(e) {
    collapseSection(e, "courses");
  })

    function collapseSection(event, section) {
    //prevent infinite loop
    var firstPass = ( $("#expand-" + section).text().toLowerCase() == "collapse" );

    if (firstPass) {
      event.preventDefault();
      smoothScroll("#" + section, function() {
        $("#expand-" + section).text("Read on");
        $("#gradient-" + section).removeClass("hide-gradient");
        $("#" + section + "-text").collapse('hide');
      })
    }
  }

})(jQuery); // End of use strict
