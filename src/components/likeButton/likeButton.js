//изменения количества лайков

for (let lb of document.querySelectorAll(".likeButton")) {
  let cb = lb.querySelector('.form__checkbox');
  let lbLabel = lb.querySelector('.lblabel');
  cb.addEventListener('change',function(e) {
    if(this.checked == true) {
      lbLabel.innerHTML++;
    }
    else {
      lbLabel.innerHTML--;
    }
  });
}