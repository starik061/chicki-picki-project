import '/slider.js';
import '/swiper-restaurant.js';
import '/open-modal.js';
import '/modal-table.js';

///////////////Слайдер для секцій "детально про готель і ресторан"////////////////
$('.details-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<button type="button" class="btn-to-left"></button>',
  nextArrow: '<button type="button" class="btn-to-right"></button>',
});

