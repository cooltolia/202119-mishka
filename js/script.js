var nav = document.querySelector(".main-nav");
var hamburger = document.querySelector(".menu-toggle");
var order = document.querySelectorAll(".js-order");
var modal = document.querySelector(".modal");
var body = document.querySelector("body");
var overlay = document.querySelector(".modal-overlay");

nav.classList.remove("main-nav--nojs");
nav.classList.add("main-nav--closed");

hamburger.addEventListener("click", function(event) {
  event.preventDefault();
  nav.classList.toggle("main-nav--open");
  hamburger.classList.toggle("menu-toggle--close");
});


[].forEach.call(order, function(order) {
  order.addEventListener("click", function(event) {
    event.preventDefault();
    modal.classList.add("modal--open");
    body.classList.add("modal-overlay");
  });
});

