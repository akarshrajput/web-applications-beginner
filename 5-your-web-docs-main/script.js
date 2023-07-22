const btnEl = document.querySelector(".btn-nav");
const btnToogle = document.querySelector(".navigation");
btnEl.addEventListener("click", function () {
  btnToogle.classList.toggle("nav-open");
});
