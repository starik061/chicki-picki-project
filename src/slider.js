$(document).ready(function () {
  $(".slider").slick({
    slidesToShow: 1,
    slidesToScroll: 2,
    infinite: true,
    centerMode: true,
    centerPadding: "85px",
    // autoplay: true,
    // autoplaySpeed: 1500,
  });
});
$('.details-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<button type="button" class="btn-to-left"></button>',
  nextArrow: '<button type="button" class="btn-to-right"></button>',
});