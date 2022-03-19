import Swiper, {Autoplay, EffectFade, Navigation, Pagination, Scrollbar} from 'swiper';
Swiper.use([Autoplay, EffectFade, Navigation, Pagination, Scrollbar]);

import 'swiper/scss';
import 'swiper/scss/effect-fade';
import 'swiper/scss/autoplay';
import 'swiper/scss/navigation';
export default class Catalog {
  constructor(config) {
    this.element = config.element;
    this.elements = [];
    this.allElements = config.elements;
    for (let i = 0; i < config.size; i++) {
      this.elements.push(new CatalogElement({}));
      this.element.appendChild(this.elements[i].element); 
      this.elements[i].swiperClass = new Swiper(this.elements[i].swiper, {
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
      //this.elements[i].update(this.allElements[i]); 
      //if (i % 2 == 0)
        //this.elements[i].update(config.y); 
    }
  }
  update(range) {
    console.log('update', range);
    for (let i = 0; i < range.length; i++) {
      this.elements[i].element.style.display = 'block';
      this.elements[i].update(range[i]); 
    }
    for (let i = range.length; i < 12; i++) {
      this.elements[i].element.style.display = 'none';
    }
  }
}
function createSwipper() {
  let swiper = document.createElement('div');
  swiper.classList.add('swiper', 'catalog__swiper');
  swiper.wrapper = document.createElement('div');
  swiper.wrapper.classList.add('swiper-wrapper');
  /*let slide = document.createElement('div');
  slide.classList.add('swiper-slide');
  swiper.wrapper.appendChild(slide);
  slide = document.createElement('div');
  slide.classList.add('swiper-slide');
  swiper.wrapper.appendChild(slide);*/
  swiper.appendChild(swiper.wrapper); 
  let pagination = document.createElement('div');
  pagination.classList.add('swiper-pagination');
  swiper.appendChild(pagination);
  let prev = document.createElement('div');
  prev.classList.add('swiper-button', 'swiper-button-prev');
  swiper.appendChild(prev);
  let next = document.createElement('div');
  next.classList.add('swiper-button', 'swiper-button-next');
  swiper.appendChild(next);
  return swiper;
}
class CatalogElement {
  constructor(config) {
    this.element = document.createElement('div');
    this.element.classList.add('catalog__element');
    this.swiper = createSwipper();
    this.wrapper = document.createElement('a');
    this.wrapper.classList.add('catalog__elementWrapper');
    this.wrapper.setAttribute('href', config.href);

    let glue = document.createElement('div');
    glue.classList.add('catalog__elementGlue');

    let text = document.createElement('div');
    text.classList.add('catalog__elementText');
    let sign = document.createElement('span');
    sign.classList.add('width_bold', 'color_black');
    sign.innerHTML = '№&nbsp;';
    this.number = document.createElement('span');
    this.number.classList.add('width_bold','size_large','color_black');
    text.appendChild(sign);
    text.appendChild(this.number);
    if (config.isLux) {
      let lux = document.createElement('span');
      lux.classList.add('width_bold', 'color_primary', 'size_small');
      lux.innerHTML = '&nbsp; Люкс';
      text.appendChild(lux);
    }
    glue.appendChild(text);
    
    text = document.createElement('div');
    text.classList.add('catalog__elementText');
    this.price = document.createElement('span');
    this.price.classList.add('width_bold');
    sign = document.createElement('span');
    sign.classList.add('size_small');
    sign.innerHTML = '&nbsp; в сутки';
    text.appendChild(this.price);
    text.appendChild(sign);
    glue.appendChild(text);
    this.wrapper.appendChild(glue);

    glue = document.createElement('div');
    glue.classList.add('catalog__elementGlue');

    let rating = document.createElement('div');
    rating.classList.add('rating');
    this.stars = [];
    for (let i = 0; i < 5; i++) {
      let star = document.createElement('div');
      star.classList.add('rating__star');
      this.stars.push(star);
      rating.appendChild(star);
    }
    glue.appendChild(rating);

    text = document.createElement('div');
    text.classList.add('catalog__elementText');
    this.reviewsAmount = document.createElement('span');
    this.reviewsAmount.classList.add('width_bold');
    this.reviewSign = document.createElement('span');
    text.appendChild(this.reviewsAmount);
    text.appendChild(this.reviewSign);
    glue.appendChild(text);
    this.wrapper.appendChild(glue);

    this.element.appendChild(this.swiper);
    this.element.appendChild(this.wrapper);

    
  }
  declOfNum(n, text_forms) {  
    n = Math.abs(n) % 100; 
    var n1 = n % 10;
    if (n > 10 && n < 20) { return text_forms[2]; }
    if (n1 > 1 && n1 < 5) { return text_forms[1]; }
    if (n1 == 1) { return text_forms[0]; }
    return text_forms[2];
  }
  update(config) {
    this.swiper.wrapper.innerHTML = '';
    for (let img of config.images) {
      let slide = document.createElement('div');
      slide.classList.add('swiper-slide');
      let image = document.createElement('img');
      image.setAttribute('src', img);
      slide.appendChild(image);
      this.swiper.wrapper.appendChild(slide);
    }
    this.swiperClass.loopDestroy();
    this.swiperClass.loopCreate();
    this.swiperClass.updateSlides();
    this.swiperClass.slideTo(1, false,false);
    this.number.innerHTML = config.number;
    this.price.innerHTML = config.price;
    for (let i = 0; i < 5; i++) {
      if (i < config.rating) {
        this.stars[i].classList.add('rating__star_checked');
      }
      else {
        this.stars[i].classList.remove('rating__star_checked');
      }
    }
    this.reviewsAmount.innerHTML = config.review + '&nbsp;';
    this.reviewSign.innerHTML = this.declOfNum(config.review, ['отзыв', 'отзыва', 'отзывов']);
    this.wrapper.setAttribute('href', config.href);
  }
}



//console.log(new CatalogElement({}));
/*setTimeout(() => {
  for (let swiperElement of document.querySelectorAll('.swiper')) {
    console.log('TESST');
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
}, 1000);
*/

