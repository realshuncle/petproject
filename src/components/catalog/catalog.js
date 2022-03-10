import Swiper, {Autoplay, EffectFade, Navigation, Pagination, Scrollbar} from 'swiper';
Swiper.use([Autoplay, EffectFade, Navigation, Pagination, Scrollbar]);

import 'swiper/scss';
import 'swiper/scss/effect-fade';
import 'swiper/scss/autoplay';
import 'swiper/scss/navigation';
//import 'swiper/scss/pagination';
//import { FALSE } from 'sass';

const swiper = new Swiper('.catalog__swiper', {
  // configure Swiper to use modules
  //modules: [Navigation, Pagination],
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
  //virtualTranslate: true,
  fadeEffect: {
    crossFade: true,
  },
  //setWrapperSize: false,
  /*scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },*/
  slidesPerView: 1,
  //virtualTranslate: true,
  //effect: 'coverflow',


 // slidersPerView: 1,
  //freeMode: true,
  allowTouchMove: false,
  
  //effect: "fade",
  //
  //fadeEffect: {
  //  crossFade: true,
  //},
  //spaceBetween: 30,
  //centeredSlides: true,
  //autoplay: {
    //delay: 5000,
    //disableOnInteraction: false,
  //},
  loop: true,
  speed: 500,


});