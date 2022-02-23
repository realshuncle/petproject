
import pickmeup from "../PickMeUp/pickmeup.js"
import AirDatepicker from 'air-datepicker'
import 'air-datepicker/air-datepicker.css'
import $ from "jquery";

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
    let inputStr = this.parentNode.parentNode.parentNode.previousElementSibling.querySelector('.form__dropdown').value;
    let indexOfComma = inputStr.indexOf(",");
    //alert(indexOfComma);
    if (indexOfComma == -1) {
      inputStr = "0 спален, 0 кроватей...";
      indexOfComma = inputStr.indexOf(",");
    }
    if (name.toLowerCase() == "спальни") {
      if (count % 10 == 0 || count % 10 > 4 || count > 10 && count < 20)  name = "спален";
      else if (count % 10 == 1) name = "спальня";
      else if (count % 10 < 5) name = "спальни";
      
      inputStr = count + " " + name + inputStr.substring(indexOfComma);
      //else if (count < 21) name = "спален";
    }
    if (name.toLowerCase() == "кровати") {
      if (count % 10 == 0 || count % 10 > 4 || count > 10 && count < 20)  name = "кроватей";
      else if (count % 10 == 1) name = "кровать";
      else if (count % 10 < 5) name = "кровати";
      inputStr = inputStr.substring(0, indexOfComma + 1) + " " + count + " " + name + "...";
      //else if (count < 21) name = "спален";
    }
    
    
    //if ()
    //this.parentNode.parentNode.parentNode.previousElementSibling.querySelector('.form__dropdown').value = count + " " + name;
    this.parentNode.parentNode.parentNode.previousElementSibling.querySelector('.form__dropdown').value = inputStr;
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
//console.log(x.pickmeup('.form__date-masked'));
for (let dateDropdown of document.querySelectorAll(".form__date-dropdown-glow")) {
  let options = {
    //locale: 'ru',
  };
  pickmeup.defaults.locales['ru'] = {
    days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    daysShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    daysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    monthsShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек']
  };
  let dropdowns = dateDropdown.querySelectorAll(".form__dropdown_date-dropdown");
  //dropdowns[0]
  //let btne = btnb.nextSibling.nextSibling;
  //console.log(btne);
  let x = pickmeup(dateDropdown, {
    locale : 'ru',
    format	: 'd.m.Y',
    mode : 'range',
    prev : '',
    next : '',
    //positions : 'top',
    
    //flat : true,
  });
  /*let temp = document.querySelector(".pickmeup");
  console.log(temp, e);
  let y = document.createElement("div");
  y.classList.add("pmu-buttons-bar");
  y.textContent = "sdfdsfdsfdssssssssssssssss";
  y.appendChild(temp);
  document.body.appendChild(y);*/
  //console.log(x);
//console.log(dateDropdown);
  //x.
  dropdowns[0].addEventListener('click', function() {
    x.show();
  });
  dropdowns[1].addEventListener('click', function() {
    x.show();
  });
  dateDropdown.addEventListener('pickmeup-change', function (e) {
    dropdowns[0].value = e.detail.formatted_date[0];
    dropdowns[1].value = e.detail.formatted_date[1];
  })
  
  let pmu = document.querySelectorAll(".pickmeup");
  //console.log(pmu[pmu.length - 1]);
  /*for (let pmu of document.querySelectorAll(".pickmeup")) {
  }*/
  pmu = pmu[pmu.length - 1];
  let y = document.createElement("div");
  y.classList.add("pmu-div");
  

  let dv = document.createElement("div");
  dv.classList.add("pmu-buttons-bar")

  let btn = document.createElement("button");
  btn.textContent = "очистить";
  btn.setAttribute("type", "button");
  btn.addEventListener("click", function() {
    x.clear();
    dropdowns[0].value = "";
    dropdowns[1].value = "";
    //alert('fd');
  })
 
  dv.appendChild(btn);

  btn = document.createElement("button");
  btn.textContent = "применить";
  btn.setAttribute("type", "button");
  btn.classList.add("prim");
  /*btn.addEventListener("click", function() {
    //x.hide();
    //pmu.classList.add("pmu-hidden");
    //alert('lol');
    //dropdowns[0].value = "";
    //dropdowns[1].value = "";
    //alert('fd');
  })*/
 
  dv.appendChild(btn);

  y.appendChild(pmu);
  y.append(dv);
  y.classList.add('pmu-div_hidden');
  /*btn.setAttribute("type", "button");
  btn.addEventListener("click", function() {
    x.clear();
    dropdowns[0].value = "";
    dropdowns[1].value = "";
    //alert('fd');
  })*/
  /*pmu.addEventListener("blur", function() {
    alert(lol);
  })
  y.addEventListener("blur", function() {
    alert("lol");
  })*/

  //y.textContent = "sdfdsfdsfdssssssssssssssss";
  
  //document.body.appendChild(y)
  dateDropdown.appendChild(y);
  dateDropdown.addEventListener('pickmeup-hide', function (e) {
    y.classList.add('pmu-div_hidden');
    //alert('lol');
  })
  dateDropdown.addEventListener('pickmeup-show', function (e) {
    y.classList.remove('pmu-div_hidden');
    //alert('lol');
  })
  //}
  /*dateDropdown.addEventListener('pickmeup-init', function (e) {
    alert('CREATE');
  })*/
  /*dateDropdown.addEventListener('pickmeup-fill', function (e) {
    alert('lol');
    let temp = document.querySelector(".pickmeup");
    //let t1 = temp.querySelector(".pmu-buttons-bar");
    //if (t1) temp.removeChild(t1);
    console.log(temp, e);
    let y = document.createElement("div");
    y.classList.add("pmu-buttons-bar");
    y.textContent = "sdfdsfdsfdssssssssssssssss";
    y.appendChild(temp);
    document.body.appendChild(y);
    //temp.appendChild(y);
  })*/
  //});
  //new AirDatepicker(btn, options);
  
} 

/*for (let pmu of document.querySelectorAll(".pickmeup")) {
  let y = document.createElement("div");
  y.classList.add("pmu-buttons-bar");
  let btn = document.createElement("button");
  
  y.textContent = "sdfdsfdsfdssssssssssssssss";
  y.appendChild(btn);
  y.appendChild(pmu);
  document.body.appendChild(y)
}*/
/*let temp = document.querySelector(".pickmeup");
console.log(temp, e);
let y = document.createElement("div");
y.classList.add("pmu-buttons-bar");
y.textContent = "sdfdsfdsfdssssssssssssssss";
y.appendChild(temp);
document.body.appendChild(y);*/

