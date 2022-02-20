let elements = document.querySelectorAll(".form__dropdown-menu-el");
let dropdown_menu_buttons = document.querySelectorAll(
  ".form__dropdown-menu-button"
);

//для каждой кнопки .form__dropdown-menu-button добавляем обработчик,
//который уменьшает или увеличивает количество
for (let btn of dropdown_menu_buttons) {
  btn.addEventListener("click", function () {
    btn.innerHTML == "+" ? this.previousElementSibling.innerHTML++ : this.nextElementSibling.innerHTML--;
  });
}
