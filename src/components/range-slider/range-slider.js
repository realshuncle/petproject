//import pickmeup from "../PickMeUp/pickmeup.js";
import noUiSlider, { create } from 'nouislider';
import 'nouislider/dist/nouislider.css';

export default class RangeSlider {
  constructor(element, options) {
    let defaultOptions = {
      start: [5000, 10000],
      connect: true,
      behaviour: 'unconstrained-tap',
      step: 1,
      range: {
          'min': 0,
          'max': 15000
      },
    };
    this.slider = element.querySelector('.range-slider__slider');
    this.range = element.querySelector('.range-slider__range');
    noUiSlider.create(this.slider, Object.assign(defaultOptions, options));
    console.log(this);
    this.slider.noUiSlider.on('update', (e) => {
      let rangeArr =  this.slider.noUiSlider.get().sort((a, b) => Math.round(a - b));
      this.range.innerHTML = rangeArr.map(Math.round).map((x) => x + '₽').join(" - ");
    });
  }
}