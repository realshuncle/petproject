export default class Header {
  constructor() {
    this.body = document.querySelector('.header__body');
    this.scrollPrev = 0;
    this.checkbox = this.body.querySelector('.header__menu');
    document.addEventListener('scroll', (e) => {
      let scrolled = window.scrollY;
      if (scrolled > 1 && scrolled > this.scrollPrev) {
        this.body.classList.add('header__hidden');
        this.checkbox.checked = false;
      }
      else {
        this.body.classList.remove('header__hidden');
      }
      this.scrollPrev = scrolled;
    });
  }
}