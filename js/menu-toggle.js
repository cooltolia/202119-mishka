var nav = document.querySelector(".main-nav");
var hamburger = document.querySelector(".menu-toggle");
nav.classList.remove("main-nav--nojs");

hamburger.addEventListener("click", function(event) {
  event.preventDefault();
  nav.classList.toggle("main-nav--open");
  hamburger.classList.toggle("menu-toggle--close");
});
