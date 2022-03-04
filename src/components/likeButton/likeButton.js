//изменения количества лайков

for (let lb of document.querySelectorAll(".likeButton")) {
  let cb = lb.querySelector('.lbCheckbox');
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