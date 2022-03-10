import Swiper, {Autoplay, EffectFade, Navigation, Pagination, Scrollbar} from 'swiper';
Swiper.use([Autoplay, EffectFade, Navigation, Pagination, Scrollbar]);

import 'swiper/scss';
import 'swiper/scss/effect-fade';
import 'swiper/scss/autoplay';
import 'swiper/scss/navigation';

for (let swiperElement of document.querySelectorAll('.catalog__swiper')) {
  const swiper = new Swiper(swiperElement, {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    slidesPerView: 1,
    allowTouchMove: false,
    loop: true,
    speed: 1000,
    loopPreventsSlide: false,
  });
}
