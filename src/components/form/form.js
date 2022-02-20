let elements = document.querySelectorAll(".form__dropdown-menu-el");
let dropdown_menu_buttons = document.querySelectorAll(
  ".form__dropdown-menu-button"
);
let dropdowns_with_menu = document.querySelectorAll(
  ".form__dropdown-with-menu"
);
//для каждой кнопки .form__dropdown-menu-button добавляем обработчик,
//который уменьшает или увеличивает количество
for (let btn of dropdown_menu_buttons) {
  btn.addEventListener("click", function () {
    let count;
    let name;
    if (btn.innerHTML == "+") {
      if (this.previousElementSibling.innerHTML == 0) {
        this.previousElementSibling.previousElementSibling.removeAttribute('disabled');
        this.previousElementSibling.previousElementSibling.classList.remove("form__dropdown-menu-button_disabled");
      }
      this.previousElementSibling.innerHTML++;
      count = this.previousElementSibling.innerHTML;
      name = this.parentNode.previousElementSibling.innerHTML;
    }
    else {
      this.nextElementSibling.innerHTML--;
      if (this.nextElementSibling.innerHTML == 0) {
        this.setAttribute('disabled', true);
        this.classList.add("form__dropdown-menu-button_disabled");
      }
      count = this.nextElementSibling.innerHTML;
      name = this.parentNode.previousElementSibling.innerHTML;
    }

    let sklon = new Map([
      [1, "спальня"],
      [2, "спальни"],
      [5, "спален"],
    ]);
   
    if (name.toLowerCase() == "спальни") {
      if (count % 10 == 0 || count % 10 > 4 || count > 10 && count < 20)  name = "спален";
      else if (count % 10 == 1) name = "спальня";
      else if (count % 10 < 5) name = "спальни";
      //else if (count < 21) name = "спален";
    }
    this.parentNode.parentNode.parentNode.previousElementSibling.querySelector('.form__dropdown').value = count + " " + name;
  });
}

for (let dropdown of dropdowns_with_menu) {

  dropdown.querySelector('.form__dropdown').addEventListener("click", function () {
    let menu = this.parentNode.parentNode.querySelector('.form__dropdown-menu');
    if (getComputedStyle(menu).display == 'none')
      menu.style = "display: flex";
    else
    menu.style = "display: none";
    //this.nextElementSibling
  });
}