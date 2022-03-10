import Swiper, {Autoplay, EffectFade} from 'swiper';
Swiper.use([Autoplay, EffectFade]);

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  //modules: [Navigation, Pagination],

  //slidesPerView: 3,
  //effect: 'coverflow',


  slidersPerView: 1,
  //freeMode: true,
  allowTouchMove: false,
  
  effect: "fade",
  virtualTranslate: true,
  fadeEffect: {
    crossFade: true,
  },
  //spaceBetween: 30,
  //centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,
  speed: 3000,


});
//console.log(swiper.autoplay);
//swiper.autoplay.start();

var header = $('header'),
		scrollPrev = 0;

$(window).on('scroll', function() {
	var scrolled = $(window).scrollTop();
 
	if ( scrolled > 100 && scrolled > scrollPrev ) {
		header.addClass('header__hidden');
	} else {
		header.removeClass('header__hidden');
	}
	scrollPrev = scrolled;
});