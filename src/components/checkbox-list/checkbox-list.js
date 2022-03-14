for (let checkbox of document.querySelectorAll(".checkbox-list[data-expandable]")) {
  let button = checkbox.querySelector(".checkbox-list__button");
  let menu  = checkbox.querySelector(".checkbox-list__menu");
  button.addEventListener('click', function(e) {
    if (menu.classList.contains("checkbox-list__menu_hidden")) {
      menu.classList.remove("checkbox-list__menu_hidden")
      button.classList.add("checkbox-list__button_opened");
    }
    else {
      menu.classList.add("checkbox-list__menu_hidden")
      button.classList.remove("checkbox-list__button_opened");
    }
  })
}