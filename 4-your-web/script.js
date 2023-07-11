const btnMobileNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

// Add a click event listener to the button
btnMobileNav.addEventListener("click", function () {
  // Toggle the "open-nav" class on the header element
  header.classList.toggle("nav-open");
});
