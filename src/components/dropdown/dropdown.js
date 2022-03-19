
export default class Dropdown {
  constructor(element, groups = {}) {
    this.element = element;
    this.items = element.querySelectorAll('.dropdown__item');
    this.menu = element.querySelector('.dropdown__menu');
    this.input = element.querySelector('.dropdown__input');
    this.applyButton = element.querySelector('[name="apply"]');
    this.clearButton = element.querySelector('[name="clear"]');
    this.groups = new Map(Object.entries(groups));
    this.value = new Map();
    for (let group in groups) {
      this.value.set(group, 0);
    }
    for (let item of this.items) {
      //dd = this;
      let plusButton = item.querySelector('[name="plus"]');
      let minusButton = item.querySelector('[name="minus"]');
      let text = item.querySelector('.dropdown__counter');
      plusButton.addEventListener('click', (e) => {
        let groupName = text.getAttribute("name");
        if (text.innerHTML == 0) {
          minusButton.removeAttribute("disabled", "disabled");
          minusButton.classList.remove('dropdown__button_disabled');
        }
        text.innerHTML++;
        if (this.value.has(groupName))
          this.value.set(groupName, this.value.get(groupName) + 1);
        this.update();
      });
      minusButton.addEventListener('click', (e) => {
        let groupName = text.getAttribute("name");
        text.innerHTML--;
        if (text.innerHTML == 0) {
          minusButton.setAttribute("disabled", "disabled");
          minusButton.classList.add('dropdown__button_disabled');
        }
        if (this.value.has(groupName))
          this.value.set(groupName, this.value.get(groupName) - 1);
        this.update();
        //dropdown.dispatchEvent(new CustomEvent('dropdown-plus', {detail: text}));
      });
    }
    document.addEventListener('click', (e) => {
      if (!e.composedPath().includes(this.menu) && !e.composedPath().includes(this.input)) {
        this.menu.classList.add('dropdown__menu_hidden');
        this.input.classList.remove('dropdown__input_opened');
      }
    });
    this.input.addEventListener('focus', (e) => {
      this.input.blur();
    });
    this.input.addEventListener("click", (e) => {
      if (this.menu.classList.contains('dropdown__menu_hidden')) {
        this.input.classList.add('dropdown__input_opened');
        this.menu.classList.remove('dropdown__menu_hidden');
      }
      else {
        this.input.classList.remove('dropdown__input_opened');
        this.menu.classList.add('dropdown__menu_hidden');
      }
    });
    this.applyButton.addEventListener('click', (e) => {
      this.menu.classList.add('dropdown__menu_hidden');
      this.input.classList.remove('dropdown__input_opened');
    })
    this.clearButton.addEventListener('click', (e) => {
      this.clear();
      this.update();
    })
  }
  declOfNum(n, text_forms) {  
    n = Math.abs(n) % 100; 
    var n1 = n % 10;
    if (n > 10 && n < 20) { return text_forms[2]; }
    if (n1 > 1 && n1 < 5) { return text_forms[1]; }
    if (n1 == 1) { return text_forms[0]; }
    return text_forms[2];
  }
  formString() {
    let result = '';
    for (let group of this.value.keys()) {
      if (this.value.get(group) != 0) {
        if (result) {
          result += ', ';
        }
        result += this.value.get(group) + ' ' + this.declOfNum(this.value.get(group), this.groups.get(group));
      }

    }
    return result;
  }
  update() {
    if  (!Array.from(this.value.values()).reduce((sum, el) => sum + el, 0)) {
      this.input.value = "";
      this.clearButton.setAttribute("disabled", "disabled");
      this.clearButton.classList.add("button_disabled");
      return;
    }
    this.clearButton.removeAttribute("disabled", "disabled");
    this.clearButton.classList.remove("button_disabled");
    this.input.value = this.formString();
  }
  clear() {
    for (let item of this.items) {
      let text = item.querySelector('.dropdown__counter');
      let btnMinus = item.querySelector('[name="minus"]');
      btnMinus.classList.add('dropdown__button_disabled');
      btnMinus.setAttribute('disabled', 'disabled');
      text.innerHTML = 0;
    }
    for (let group of this.value.keys()) {
      this.value.set(group, 0);
    }
    this.clearButton.setAttribute("disabled", "disabled");
    this.clearButton.classList.add("button_disabled");
  }
}
