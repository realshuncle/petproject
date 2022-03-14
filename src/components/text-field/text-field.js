//плагин для маски инпута

function dayInMonth(date) {
  if (date.month == 0) return 31;
  if (date.month == 1 || date.month == 3 || date.month == 5 || 
    date.month == 7 || date.month == 8 || date.month == 10 || 
    date.month == 12) {
      return 31;
    } 
  if (date.month == 4 || date.month == 6 || date.month == 9 || date.month == 11) {
    return 30;
  }
  if (date.month == 2) {
    return date.isLeap ? 29 : 28;
  }
}
function parseDate(dateArray) {
  let date = {     
    year: dateArray[2],
    month: dateArray[1],
    day: dateArray[0],
    isLeap: true,
  }
  if (!isNaN(date.year)) {
    date.isLeap = (date.year % 4 == 0 && date.year % 100 != 0) || date.year % 400 == 0;
  }
  if (!isNaN(date.month)) {
    if (date.month < 1 || date.month > 12) {
      return false;
    }
    let limit = dayInMonth(date);
    if (!isNaN(date.day) && date.day > limit) {
      return false;
    }
  }
  else {
    if (!isNaN(date.day) && date.day > 31)
      return false;
  }
  return true;
}
for (let input of document.querySelectorAll('.text-field__input_masked')) {
  input.addEventListener("focus", function (e) {
    let value = this.value;
    if (value == "") {
      this.value = "__.__.____";
      this.selectionStart = 0;
      this.selectionEnd = 0;
    } 
  });
  input.addEventListener("mouseup", function (e) {
    if (this.value == "__.__.____") {
      this.selectionStart = 0;
      this.selectionEnd = this.selectionStart;
    }
    if (this.selectionEnd != this.selectionStart) {
      this.selectionEnd = this.selectionStart;
    }
  });
  input.addEventListener('paste', function (e) {
    e.preventDefault();
  });
  input.addEventListener("blur", function (e) {
    if (this.value == "__.__.____") this.value = "";
  });
  input.addEventListener("keydown", function (e) {
    if (this.selectionEnd != this.selectionStart) {
      this.selectionEnd = this.selectionStart;
    }
    if (e.key == '.') {
      e.preventDefault();
    }
    else if (e.key != "ArrowLeft" && e.key != "ArrowRight" && e.key != "Backspace") {
      if (this.selectionStart == 2 || this.selectionStart == 5) {
        this.selectionStart++;
        this.selectionEnd = this.selectionStart;
      }
    }
    else if (e.key == "Backspace" && (this.selectionStart == 3 || this.selectionStart == 6)) {
      this.selectionStart--;
      this.selectionEnd = this.selectionStart;
    }
    
  });
  input.addEventListener("input", function (e) {
    let index = this.selectionStart;
    let str = this.value;
    if(e.inputType == 'deleteContentBackward' || e.inputType == 'deleteContentForward') {
      str = str.slice(0, index) + '_' + str.slice(index);
      this.value = str;
      if (e.inputType == 'deleteContentForward') {
        index++;
      }
      this.selectionStart = index;
      this.selectionEnd = index;
      return;
    }
    else {
      str = str.slice(0, index) + str.slice(index + 1);
    }
    let value = str.split('.');
    if (value[2].length > 4) {
      str = str.slice(0, 10);
      this.value = str;
      this.selectionStart = index - 1;
      this.selectionEnd = index - 1;
      return;  
    }
    if (isNaN(Number(str[index - 1]))) {
      str = str.slice(0, index - 1) + '_' + str.slice(index);
      this.value = str;
      this.selectionStart = index - 1;
      this.selectionEnd = index - 1;
      return;
    }
    
    if (!parseDate(value.map((x) => Number(x)))) {
      str = str.slice(0, index - 1) + '_' + str.slice(index);
      index--;
    }
    this.value = str;
    this.selectionStart = index;
    this.selectionEnd = index;
  });
}