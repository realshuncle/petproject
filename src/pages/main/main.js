import Swiper, {Autoplay, EffectFade} from 'swiper';
Swiper.use([Autoplay, EffectFade]);
//import Chart from 'chart.js/auto';
//import { Chart, registerables } from 'chart.js';
//Chart.register(...registerables);

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
//import '../../theme/fonts.scss';

const swiper = new Swiper('.swiper', {
  slidersPerView: 1,
  allowTouchMove: false,
    effect: "fade",
  virtualTranslate: true,
  fadeEffect: {
    crossFade: true,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,
  speed: 3000,
});



