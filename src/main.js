import './js/slider.js';
import './js/swiper-restaurant.js';
import './js/open-modal.js';
import './js/modal-table.js';

///////////////Слайдер для секцій "детально про готель і ресторан"////////////////
$('.details-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: "<img src='./img/details-of-our-restaurant/cil_arrow-left.svg' class='prev' alt='left'>",
    nextArrow: "<img src='./img/details-of-our-restaurant/cil_arrow-right.svg' class='next' alt='right'>"
  });

