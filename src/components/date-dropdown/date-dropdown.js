
//создание календаря для date-dropdown
for (let dateDropdown of document.querySelectorAll(".date-dropdown")) {
  //блок на который формируется календарь
  let calendar = dateDropdown.querySelector('.calendar');
  //изменение шрифта при уменьшении размера
  window.addEventListener('DOMContentLoaded', (event) => {
    calendar.setFont(dateDropdown.offsetWidth * 14 / 320);
  });
  
  //дропдауны для которых создается календарь
  let dropdowns = dateDropdown.querySelectorAll(".date-dropdown__input");
  //привязка показа к определнным элементам
  for (let dd of dropdowns) {
    dd.addEventListener('click', function() {
      calendar.show();
    })
  }
  //перенос даты в input
  calendar.addEventListener('calendar-change', function (e) {
    if (dropdowns.length == 1) {
      let resstr;
      if (JSON.stringify(e.date[0]) == JSON.stringify(e.date[1]))
        resstr = dropdowns[0].value = e.date[0].toLocaleString("ru", {
          month: 'short',
          day: 'numeric'
        });
      else
        resstr = dropdowns[0].value = e.date[0].toLocaleString("ru", {
          month: 'short',
          day: 'numeric'
        }) + " - " + e.date[1].toLocaleString("ru", {
          month: 'short',
          day: 'numeric'
        });
      dropdowns[0].value = resstr.replace(/\./g, '');
    }
    else {
      dropdowns[0].value = e.date[0].toLocaleString("ru", {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      });
      dropdowns[1].value = e.date[1].toLocaleString("ru", {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      });
    }
    
  })
  //очитска полей
  calendar.addEventListener('calendar-clear', function(e) {
    dropdowns[0].value = "";
    if (dropdowns.length != 1)
      dropdowns[1].value = "";
  });

} 