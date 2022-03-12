
import pickmeup from 'pickmeup';

pickmeup.defaults.locales['ru'] = {
  days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
  daysShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
  daysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
  months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
  monthsShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек']
};

for (let calendar of document.querySelectorAll('.calendar')) {
  let clear = new Event("calendar-clear");
  let change = new Event("calendar-change");
  //создается класс календаря
  //console.log(calendar);
  let now = new Date();
  now.setHours(0, 0, 0, 0);
  let pmu_class = pickmeup(calendar, {
    locale : 'ru',
    format	: 'd.m.Y',
    mode : 'range',
    prev : '',
    next : '',
    title_format	: 'B Y',
    position: function() {return {left: 0, top: 0}},
    render: function(date) {
      let today  = this.default_date;
      today.setHours(0, 0, 0, 0);
      if (date < now)
        return {disabled: true}
      if (JSON.stringify(date) == JSON.stringify(today) && date > this.date[0] && date < this.date[1]) {
        return {class_name: 'pmu-today_inrange'};
      }
      
      if (JSON.stringify(this.date[0]) == JSON.stringify(date)) {
        if (JSON.stringify(this.date[0]) != JSON.stringify(this.date[1])) {
          return {class_name: 'pmu-selected_begin'};
        }
        else {
          return {class_name: 'pmu-selected_none'};
        }
      }
      else if (JSON.stringify(this.date[1]) == JSON.stringify(date)) {
        if (JSON.stringify(this.date[0]) != JSON.stringify(this.date[1])) {
          return {class_name: 'pmu-selected_end'};
        }
        else {
          return {class_name: 'pmu-selected_none'};
        }
      }
      return {};
    },
  });
  //декоратор функции hide, нужен для того, чтобы не скрывать каленадрь при нажатии на блок pmu-div
  function hide(func) {
    return function(event, target) {
      console.log(event);
      for (let el of event.path) {
        if (el?.name == 'apply')
          break;
        if (el?.classList?.contains('calendar__body'))
          return;
      }
      func.apply(event, target);
    };
  }
  //замена функции hide
  calendar.__pickmeup.options.bound.hide = hide(calendar.__pickmeup.options.bound.hide);
  calendar.show = pickmeup(calendar).show;
  //выбор необходимого календаря
  let pmu = calendar.__pickmeup.element;
  //обертка календаря
  let calendarBody = calendar.querySelector('.calendar__body');
  //панель с кнопками
  let butbar = calendarBody.querySelector('.calendar__buttonsBar');
  //кнопка очистки
  let btnClear = butbar.querySelector('[name="clear"]');

  btnClear.addEventListener("click", function() {
    //сброс календаря
    pmu_class.clear();
    pmu_class.set_date();
    //деактивация кнопки
    this.setAttribute("disabled", "disabled");
    this.classList.add("button_disabled");
    calendar.dispatchEvent(clear);
    //event.dispatchEvent(event);
  })
  calendarBody.insertBefore(pmu, butbar);
  //скрытиие и показ обертки календаря
  calendar.addEventListener('pickmeup-hide', function (e) {
    calendarBody.classList.add('calendar__body_hidden');
  })
  calendar.addEventListener('pickmeup-show', function (e) {
    calendarBody.classList.remove('calendar__body_hidden');
  })
  //показ и активация кнопки очистки после внесения изменений
  calendar.addEventListener('pickmeup-change', function (e) {  
    btnClear?.removeAttribute("disabled");
    btnClear?.classList.remove("button_disabled");
    change.date = pickmeup(calendar).get_date();
    calendar.dispatchEvent(change);
  });
}
