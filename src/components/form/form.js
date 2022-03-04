import pickmeup from "../PickMeUp/pickmeup.js";
import $ from "jquery";

let elements = document.querySelectorAll(".form__dropdown-menu-el");

//для каждой кнопки .form__dropdown-menu-button добавляем обработчик,
//который уменьшает или увеличивает количество

//код для дропдаунов с меню
for (let dwm of document.querySelectorAll(".form__dropdown-with-menu")) {
  //меню дропдауна
  //.parentNode.parentNode
  let menu = dwm.querySelector('.form__dropdown-menu');
  menu.classList.add('form__dropdown-menu_hidden');
  //инпут дропдауна
  let dropDown = dwm.querySelector('.form__dropdown');

  let btnApply = dwm.querySelector('.button-apply');
  let btnClear = dwm.querySelector('.button-clear');

  dwm.querySelector('.form__dropdown').addEventListener("click", function () {
    if (menu.classList.contains('form__dropdown-menu_hidden')) {
      menu.classList.remove('form__dropdown-menu_hidden');
    }
    else {
      menu.classList.add('form__dropdown-menu_hidden');
    }
  });

  let labelsArr = menu.querySelectorAll('.form__dropdown-menu-label');
  let countersArr = menu.querySelectorAll('.form__dropdown-menu-counter');
  let elArr = menu.querySelectorAll('.form__dropdown-menu-el');

  function declOfNum(n, text_forms) {  
    n = Math.abs(n) % 100; 
    var n1 = n % 10;
    if (n > 10 && n < 20) { return text_forms[2]; }
    if (n1 > 1 && n1 < 5) { return text_forms[1]; }
    if (n1 == 1) { return text_forms[0]; }
    return text_forms[2];
  }

  function changeDTGuest() {
    let gAmount = Number(countersArr[0].innerHTML) + Number(countersArr[1].innerHTML);
    let mAmount = Number(countersArr[2].innerHTML);
    dropDown.value = gAmount + " " + declOfNum(gAmount, ["гость", "гостя", "гостей"]);
    dropDown.value += ", " + countersArr[2].innerHTML + " " + declOfNum(mAmount, ["младенец", "младенца", "младенцев"]);
    //= result;//amount + " " + declOfNum(amount, ["гость", "гостя", "гостей"]);
  }
  function changeDT() {
    //проверка являются ли все счетчики нулями
    if (!Array.from(countersArr).reduce((sum, el) => sum + Number(el.innerHTML), 0)) {
      dropDown.value = "";
      return;
    }
    if (dwm.classList.contains("form__dropdown-with-menu_guest")) {
      changeDTGuest();
      return;
    }
    let result = "";
    for (let i = 0; i < labelsArr.length; i++) {

      if (result) result += ", "; 

      let label = labelsArr[i].innerHTML.toLowerCase();
      let amount = countersArr[i].innerHTML;
      result += amount + " ";
      if (label == "спальни") {
        result += declOfNum(amount, ["спальня", "спальни", "спален"]);
      }
      if (label == "кровати") {
        result += declOfNum(amount, ["кровать", "кровати", "кроватей"]);
      }
      if (label == "ванные комнаты") {
        result += declOfNum(amount, ["ванная комната", "ванные комнаты", "ванных комнат"]);
      }
    }

    dropDown.value = result;
  }

  for (let dme of elArr) {
    let btnMinus = dme.querySelector('.form__dropdown-menu-button_minus');
    let counter = dme.querySelector('.form__dropdown-menu-counter');
    let btnPlus = dme.querySelector('.form__dropdown-menu-button_plus');

    btnPlus.addEventListener("click", function () {
      if (counter.innerHTML == 0) {
        btnMinus.removeAttribute('disabled');
        btnMinus.classList.remove('form__dropdown-menu-button_disabled');
      }
      counter.innerHTML++;
      btnClear.removeAttribute("disabled", "disabled");
      btnClear.classList.remove("button-clear_hide");
      changeDT();
    });

    btnMinus.addEventListener("click", function () {
      counter.innerHTML--;
      if (counter.innerHTML == 0) {
        btnMinus.setAttribute('disabled', true);
        btnMinus.classList.add("form__dropdown-menu-button_disabled");
      }
      if (!Array.from(countersArr).reduce((sum, el) => sum + Number(el.innerHTML), 0)) {
        btnClear.setAttribute("disabled", "disabled");
        btnClear.classList.add("button-clear_hide");
      }
      changeDT();
    });
  }

  document.addEventListener('click', (e) => {
    //console.log(e);
    const withinBoundaries = e.composedPath().includes(menu);

    if (!withinBoundaries && !e.composedPath().includes(dropDown)) {
      menu.classList.add('form__dropdown-menu_hidden');// скрываем элемент т к клик был за его пределами
      changeDT();
    }
  })
  
  btnApply.addEventListener('click', function(e){
    menu.classList.add('form__dropdown-menu_hidden');
    //changeDT();
  })
  btnClear.addEventListener('click', function(e){
    for (let i = 0; i < elArr.length; i++) {
      countersArr[i].innerHTML = 0;
      let btnMinus = elArr[i].querySelector('.form__dropdown-menu-button_minus');
      btnMinus.setAttribute('disabled', true);
      btnMinus.classList.add("form__dropdown-menu-button_disabled");
    }
    btnClear.setAttribute("disabled", "disabled");
    btnClear.classList.add("button-clear_hide");
    //menu.classList.add('form__dropdown-menu_hidden');
    changeDT();
  })
}

//плагин для маски инпута
let inputs = document.querySelectorAll(".form__date-masked");

function dayInMonth(month, year) {
  if (month == 0) return 31;
  let isLeap = year % 4 == 0;
  if (
    month == 1 ||
    month == 3 ||
    month == 5 ||
    month == 7 ||
    month == 8 ||
    month == 10 ||
    month == 12
  )
    return 31;
  if (month == 4 || month == 6 || month == 9 || month == 11) return 30;
  if (month == 2) return isLeap ? 29 : 28;
}

for (let input of inputs) {
  //alert
  input.addEventListener("focus", function () {
    //let rule = this.dataset.rule;
    //console.log(rule);
    let value = this.value;
    let check;
    let lastSelect;
    //alert("stop");
    //alert()
    //switch (rule) {
      //case "data":
    if (value == "") {
      this.selectionStart = 0;
      this.selectionEnd = 0;
      this.value = "__.__.____";
      input.addEventListener("mouseup", function () {
        for (let i = 0; i < 10; i++)
          if (this.value[i] == "_") {
            this.selectionStart = i;
            this.selectionEnd = this.selectionStart;
            break;
          }
      });
    } 
    //else {
      //console.log("d");
      input.addEventListener("keydown", function (event) {
        if (
          event.key != "ArrowLeft" &&
          event.key != "ArrowRight" &&
          event.key != "Backspace"
        ) {
          if (this.selectionStart == 2 || this.selectionStart == 5) {
            this.selectionStart++;
            this.selectionEnd = this.selectionStart;
          }
        }
      });
      input.addEventListener("keydown", function (event) {
        if (
          event.key == "Backspace" &&
          (this.selectionStart == 3 || this.selectionStart == 6)
        ) {
          this.selectionStart--;
          this.selectionEnd = this.selectionStart;
        }
      });
      input.addEventListener("keydown", function (event) {
        if (event.key == ".") {
          event.preventDefault();
        }
      });
      input.addEventListener("input", function (/*event*/) {
        let date_input = {
          day: 0,
          mounth: 0,
          year: 0,
        };
        let index = this.selectionStart;
        let temp_date = this.value;
        let temp;
        let date = new Date();
        let error_flag = false,
          coppy_data = false;
        if (temp_date.length == 9) {
          if (index == 5)
            temp_date = temp_date.slice(0, 5) + "." + temp_date.slice(5);
          else if (index == 2)
            temp_date = temp_date.slice(0, 2) + "." + temp_date.slice(2);
          else
            temp_date =
              temp_date.slice(0, index) + "_" + temp_date.slice(index);
        }

        if (temp_date.length != 11) {
          coppy_data = true;
          if (temp_date[2] != ".")
            temp_date = temp_date.slice(0, 2) + "." + temp_date.slice(2);
          if (temp_date[5] != ".")
            temp_date = temp_date.slice(0, 5) + "." + temp_date.slice(5);
          if (temp_date.length == 18) {
            temp_date =
              temp_date.slice(0, 6) +
              Math.trunc(date.getFullYear() / 100) +
              temp_date.slice(6);
            index += 2;
          }
        }

        if (temp_date[index] != "." && temp_date.length == 11)
          temp_date =
            temp_date.slice(0, index) + temp_date.slice(index + 1);
        temp = temp_date.indexOf(".");

        let day_str = "",
          mounth_str = "",
          year_str = "";
        if (temp != -1) {
          day_str = temp_date.slice(0, temp);
          temp_date = temp_date.slice(temp + 1);
          temp = temp_date.indexOf(".");
          if (temp != -1) {
            mounth_str = temp_date.slice(0, temp);
            temp_date = temp_date.slice(temp + 1);
            year_str = temp_date.slice(0);
          }
        } else day_str = temp_date;

        year_str += "____";
        year_str = year_str.slice(0, 4);

        if (
          (isNaN(year_str[0]) && year_str[0] != "_") ||
          year_str[0] == " "
        ) {
          year_str = "_" + year_str.slice(1);
          index = 6;
        }

        if (
          (isNaN(year_str[1]) && year_str[1] != "_") ||
          year_str[1] == " "
        ) {
          year_str = year_str[0] + "_" + year_str.slice(2);
          index = 7;
        }
        if (
          (isNaN(year_str[2]) && year_str[2] != "_") ||
          year_str[2] == " "
        ) {
          year_str = year_str.slice(0, 2) + "_" + year_str[3];
          index = 8;
        }
        if (
          (isNaN(year_str[3]) && year_str[3] != "_") ||
          year_str[3] == " "
        ) {
          year_str = year_str.slice(0, 3) + "_";
          index = 9;
        }

        if (
          !(
            isNaN(year_str[0]) ||
            isNaN(year_str[1]) ||
            isNaN(year_str[2]) ||
            isNaN(year_str[3])
          )
        ) {
          date_input.year = parseInt(year_str);
          /*if (date_input.year < date.getFullYear()) {
            if (coppy_data) {
              year_str = year_str.slice(0, 3) + "_";
              index = 9;
            }
            error_flag = true;
            date_input.year = 0;
          }*/
        }

        mounth_str += "__";
        mounth_str = mounth_str.slice(0, 2);

        if (
          (isNaN(mounth_str[0]) && mounth_str[0] != "_") ||
          mounth_str[0] == " "
        ) {
          mounth_str = "_" + mounth_str[1];
          index = 3;
        }
        if (
          (isNaN(mounth_str[1]) && mounth_str[1] != "_") ||
          mounth_str[1] == " "
        ) {
          mounth_str = mounth_str[0] + "_";
          index = 4;
        }

        if (!(isNaN(mounth_str[0]) || isNaN(mounth_str[1]))) {
          date_input.mounth = parseInt(mounth_str);
          if (
            /*(date_input.mounth < date.getMonth() + 1 &&
              date_input.year == date.getFullYear()) ||*/
            date_input.mounth > 12
          ) {
            if (coppy_data) {
              mounth_str = mounth_str[0] + "_";
              index = 4;
            }
            error_flag = true;
            date_input.mounth = 0;
          }
        }

        day_str += "__";
        day_str = day_str.slice(0, 2);
        if ((isNaN(day_str[0]) && day_str[0] != "_") || day_str[0] == " ") {
          day_str = "_" + day_str[1];
          index = 0;
        }
        if ((isNaN(day_str[1]) && day_str[1] != "_") || day_str[1] == " ") {
          day_str = day_str[0] + "_";
          index = 1;
        }

        if (!(isNaN(day_str[0]) || isNaN(day_str[1]))) {
          date_input.day = parseInt(day_str);
          if (
            /*(date_input.day < date.getDate() &&
              date_input.year == date.getFullYear() &&
              date_input.mounth == date.getMonth() + 1) ||*/
            date_input.day > dayInMonth(date_input.mounth, date_input.year)
          ) {
            if (coppy_data) {
              day_str = day_str[0] + "_";
              index = 1;
            }
            error_flag = true;
            date_input.day = 0;
          }
        }

        if (error_flag && !coppy_data) {
          if (index <= 2)
            day_str =
              day_str.slice(0, index - 1) + "_" + day_str.slice(index);
          else if (index <= 5)
            mounth_str =
              mounth_str.slice(0, index - 4) +
              "_" +
              mounth_str.slice(index - 3);
          else
            year_str =
              year_str.slice(0, index - 7) +
              "_" +
              year_str.slice(index - 6);
          index--;
        }

        this.value = day_str + "." + mounth_str + "." + year_str;
        this.selectionStart = index;
        this.selectionEnd = index;
      });
    //}
    //}
  });

  input.addEventListener("blur", function () {
    if (this.value == "__.__.____") this.value = "";
  });
}

/*for (let dateDropdown of document.querySelectorAll(".form__date-dropdown-glue")) {
  for (let dpd of dateDropdown.querySelectorAll(".form__dropdown_date")) {
    dpd.addEventListener('click') {

    }
  }
}*/
//создание календаря для date-dropdown .form__date-dropdown-glue
for (let dateDropdown of document.querySelectorAll(".form__date-dropdowns")) {
  //настройки календаря (локализация)
  pickmeup.defaults.locales['ru'] = {
    days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    daysShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    daysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    monthsShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек']
  };
  //блок на который формируется календарь
  let pmuPlug = dateDropdown.querySelector('.pmu-plug');
  //дропдауны для которых создается календарь
  let dropdowns = dateDropdown.querySelectorAll(".form__dropdown_date");
  //создается класс календаря
  let pmu_class = pickmeup(pmuPlug, {
    locale : 'ru',
    format	: 'd.m.Y',
    mode : 'range',
    prev : '',
    next : '',
    title_format	: 'B Y',
  });
  //выбор необходимого календаря
  let pmu = document.querySelectorAll(".pickmeup");
  pmu = pmu[pmu.length - 1];
  //обертка календаря
  let pmu_div = document.createElement("div");
  pmu_div.classList.add("pmu-div");
  pmu_div.classList.add('pmu-div_hidden');
  //панель с кнопками
  let butbar = document.createElement("div");
  butbar.classList.add("pmu-buttons-bar")
  //кнопка очистки
  let btnClear = document.createElement("button");

  btnClear.textContent = "очистить";
  btnClear.setAttribute("type", "button");
  btnClear.setAttribute("disabled", "disabled");
  btnClear.classList.add("button");
  btnClear.classList.add("button-clear_hide");

  btnClear.addEventListener("click", function() {
    //сброс календаря
    pmu_class.clear();
    pmu_class.set_date();
    //очитска полей
    
    dropdowns[0].value = "";
    if (dropdowns.length != 1)
      dropdowns[1].value = "";
    //деактивация кнопки
    this.setAttribute("disabled", "disabled");
    this.classList.add("button-clear_hide");
  })
  //кнопка применить
  let btnApply = document.createElement("button");
  btnApply.textContent = "применить";
  btnApply.setAttribute("type", "button");
  btnApply.classList.add("button-apply");
  btnApply.classList.add("button");

  butbar.appendChild(btnClear);
  butbar.appendChild(btnApply);

  pmu_div.appendChild(pmu);
  pmu_div.append(butbar);
  
  pmuPlug.appendChild(pmu_div);
  //dateDropdown.appendChild(pmu_div);

  //перенос даты в input
  for (let dd of dropdowns) {
    dd.addEventListener('click', function() {
      pmu_class.show();
      pmu_div.classList.remove('pmu-div_hidden');
    })
  }

  pmuPlug.addEventListener('pickmeup-change', function (e) {
    if (dropdowns.length == 1) {
      let resstr;
      if (e.detail.formatted_date[0] == e.detail.formatted_date[1])
        resstr = dropdowns[0].value = e.detail.date[0].toLocaleString("ru", {
          month: 'short',
          day: 'numeric'
        });
      else
        resstr = dropdowns[0].value = e.detail.date[0].toLocaleString("ru", {
          month: 'short',
          day: 'numeric'
        }) + " - " + e.detail.date[1].toLocaleString("ru", {
          month: 'short',
          day: 'numeric'
        });
      dropdowns[0].value = resstr.replace(/\./g, '');
      //console.log(resstr.replace(/\./g, ''));
    }
    else {
      dropdowns[0].value = e.detail.formatted_date[0];
      dropdowns[1].value = e.detail.formatted_date[1];
    }
    //показ и активация кнопки очистки после внесения изменений
    let clearBtn = dateDropdown.querySelector(".button-clear_hide");
    clearBtn?.removeAttribute("disabled");
    clearBtn?.classList.remove("button-clear_hide");
  })
  //скрытиие и показ обертки календаря
  pmuPlug.addEventListener('pickmeup-hide', function (e) {
    pmu_div.classList.add('pmu-div_hidden');
  })
  pmuPlug.addEventListener('pickmeup-show', function (e) {
    pmu_div.classList.remove('pmu-div_hidden');
  })

  
} 

for (let checkboxListBtn of document.querySelectorAll(".form__checkbox-list-btn")) {
  let checkboxLabel= checkboxListBtn.querySelector(".form__label");
  let checkboxList = checkboxListBtn.querySelector(".form__checkbox-list");
  document.addEventListener('click', (e) => {
    const flag1 = e.composedPath().includes(checkboxListBtn);
    const flag2 = e.composedPath().includes(checkboxLabel);
    if (flag1 && flag2) {
      if (checkboxList.classList.contains("form__checkbox-list_hidden")) {
        checkboxList.classList.remove("form__checkbox-list_hidden")
        checkboxLabel.classList.add("form__label_up");
      }
      else {
        checkboxList.classList.add("form__checkbox-list_hidden")
        checkboxLabel.classList.remove("form__label_up");
      }

    }
  })
  /*document.addEventListener('dblclick', (e) => {
    console.log('adasdas');
    const flag1 = e.composedPath().includes(checkboxListBtn);
    const flag2 = e.composedPath().includes(checkboxLabel);
    if (flag1 && flag2) {
      e.preventDefault();
      /*if (checkboxList.classList.contains("form__checkbox-list_hidden")) {
        checkboxList.classList.remove("form__checkbox-list_hidden")
        checkboxLabel.classList.add("form__label_up");
      }
      else {
        checkboxList.classList.add("form__checkbox-list_hidden")
        checkboxLabel.classList.remove("form__label_up");
      }

    }
  })*/
  //checkboxList.querySelector(".form__label")
}

