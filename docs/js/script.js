var nav = document.querySelector(".main-nav");
var hamburger = document.querySelector(".menu-toggle");
var order = document.querySelectorAll(".js-order");
var modal = document.querySelector(".modal");
var modalClose = modal.querySelector(".modal__btn")
var body = document.querySelector("body");
var overlay = document.querySelector(".modal-overlay");

nav.classList.remove("main-nav--nojs");
nav.classList.add("main-nav--closed");

hamburger.addEventListener("click", function (event) {
  event.preventDefault();
  nav.classList.toggle("main-nav--open");
  hamburger.classList.toggle("menu-toggle--close");
});


[].forEach.call(order, function (order) {
  order.addEventListener("click", function (event) {
    event.preventDefault();
    modal.classList.add("modal--open");
    body.classList.add("modal-overlay");
  });
});

modalClose.addEventListener("click", function (event) {
  event.preventDefault();
  modal.classList.remove("modal--open");
  body.classList.remove("modal-overlay");
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (modal.classList.contains("modal--open")) {
      modal.classList.remove("modal--open");
      body.classList.remove("modal-overlay");
    }
  }
});