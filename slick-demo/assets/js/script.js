$(document).ready(function () {
  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".fade",
    instructionsText:
      "Changing this current slide of this carousel will change the current slide of the thumbnail carousel that follows.",
    regionLabel: "main image carousel",
  });

  $(".fade").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: true,
    centerMode: true,
    instructionsText:
      "Changing the current slide of this carousel will change the current slide of the preceding main image carousel.",
    regionLabel: "thumbnail carousel",
    autoplay: true,
    autoplaySpeed: 4000,
    focusOnChange: true,
  });
});
