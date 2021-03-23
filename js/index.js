// ============COUNTER===========
$(document).ready(function () {
  if (window.location.pathname == "/index.html") {
    $(".counter-value").countUp({
      time: 3000,
      suffix: '+'
    });
  }
});



// Animate on scroll
AOS.init({ duration: 1000 });

// Testimonials

$(document).ready(function () {
  if (window.location.pathname == "/index.html") {
    
(function () {
  "use strict";
  var slides = document.querySelectorAll(".testimonial-item"),
    arrows = document.querySelectorAll(".lnr"),
    carouselCount = 0,
    scrollInterval,
    interval = 4000;

  arrows[0].addEventListener("click", function (e) {
    e = e || window.event;
    e.preventDefault();
    carouselCount -= 100;
    slider();
    if (e.type !== "autoClick") {
      clearInterval(scrollInterval);
      scrollInterval = setInterval(autoScroll, interval);
    }
  });
  arrows[1].addEventListener("click", sliderEvent);
  arrows[1].addEventListener("autoClick", sliderEvent);

  function sliderEvent(e) {
    e = e || window.event;
    e.preventDefault();
    carouselCount += 100;
    slider();
    if (e.type !== "autoClick") {
      clearInterval(scrollInterval);
      scrollInterval = setInterval(autoScroll, interval);
    }
  }

  function slider() {
    switch (carouselCount) {
      case -100:
        carouselCount = 0;
        break;
      case 300:
        carouselCount = 0;
        break;
      default:
        break;
    }
    for (var i = 0; i < slides.length; i += 1) {
      slides[i].setAttribute(
        "style",
        "transform:translateX(-" + carouselCount + "%)"
      );
    }
  }

  // create new Event to dispatch click for auto scroll
  var autoClick = new Event("autoClick");
  function autoScroll() {
    arrows[1].dispatchEvent(autoClick);
  }

  // set timing of dispatch click events
  scrollInterval = setInterval(autoScroll, interval);
})();
  }
});



// SLick
$(document).ready(function () {
  $(".customer-logos").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    arrows: false,
    speed: 5000,
    dots: false,
    pauseOnHover: false,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });
});
