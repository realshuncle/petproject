import DoughnatChart from '../../components/chart/chart.js';
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
for (let ctx of document.querySelectorAll('.chart')) {
  new DoughnatChart({votes: 260, element: ctx, data: [0, 25, 25, 50], colors: [['#909090','#3D4975'],['#BC9CFF','#8BA4F9'],['#6FCF97','#66D2EA'],['#FFE39C', '#FFBA9C']]})
}
/*document.querySelector('.date-dropdown').addEventListener('dropdown-change', e => {
  console.log((e.detail.date[1] - e.detail.date[0]) / (1000 * 3600 * 24));
})*/
/*let ctx = document.querySelector('.chart__canvas');
let context = ctx.getContext("2d");
let data = [0, 25, 25, 50];
let colors = [['#909090','#3D4975'],['#BC9CFF','#8BA4F9'],['#6FCF97','#66D2EA'],['#FFE39C', '#FFBA9C']];
DoughnatChart*/