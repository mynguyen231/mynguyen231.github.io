/*scrolling banner*/
(function ($) {
  "use strict";

  $(document).ready(function () {
    var typed = new Typed(".typed-strings", {
      strings: ["", "d'être propriétaire", "d'être rentier"],
      typeSpeed: 30,
      backSpeed: 50,
      backDelay: 2500,
      startDelay: 200,
      loop: true,
      showCursor: false,
      attr: null,
    });
    +$(".carousel_se_01_carousel").owlCarousel({
      items: 3,
      nav: true,
      loop: true,

      mouseDrag: false,
      responsiveClass: true,
      /*navText : ["<i class='fas fa-long-arrow-alt-left'></i>","<i class='fas fa-long-arrow-alt-right'></i>"],*/
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 1,
        },
        767: {
          items: 2,
        },
        992: {
          items: 3,
        },
        1200: {
          items: 3,
        },
      },
    });

    $($(".owl-item.active")[0]).addClass("zoomedOut");
    $($(".owl-item.active")[1]).addClass("zoomedIn");
    $($(".owl-item.active")[2]).addClass("zoomedOut");

    $(".owl-next").click(function () {
      let active_slides = $(".owl-item.active");
      $(".owl-item").removeClass("zoomedIn");
      $(".owl-item.active").addClass("zoomedOut");

      $(active_slides[1]).removeClass("zoomedOut");
      $(active_slides[1]).addClass("zoomedIn");
    });

    $(".owl-prev").click(function () {
      let active_slides = $(".owl-item.active");
      $(".owl-item").removeClass("zoomedIn");
      $(".owl-item.active").addClass("zoomedOut");

      $(active_slides[1]).removeClass("zoomedOut");
      $(active_slides[1]).addClass("zoomedIn");
    });
  });

  $(document).ready(function () {
    $(".carousel_se_02_carousel").owlCarousel({
      items: 4,
      nav: true,
      loop: true,

      mouseDrag: true,
      responsiveClass: true,
      navText: [
        "<i class='icofont-bubble-left'></i>",
        "<i class='icofont-bubble-right'></i>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 2,
        },
        767: {
          items: 3,
        },
        992: {
          items: 3,
        },
        1200: {
          items: 4,
        },
      },
    });
  });

  $(document).ready(function () {
    $(".carousel_se_03_carousel").owlCarousel({
      items: 4,
      nav: true,
      dots: false,
      loop: true,

      mouseDrag: true,
      responsiveClass: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      navText: [
        "<i class='icofont-scroll-left'></i>",
        "<i class='icofont-scroll-right'></i>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 2,
        },
        767: {
          items: 3,
        },
        992: {
          items: 3,
        },
        1200: {
          items: 4,
        },
      },
    });
  });
})(jQuery);
