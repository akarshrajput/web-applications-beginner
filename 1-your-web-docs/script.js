const btnEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');
btnEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open');
});
