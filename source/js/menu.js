"use strict";
(function() {
  const burger = document.querySelector(".main-nav__toggle-burger");
  const menu = document.querySelector(".main-nav__menu");
  const close = document.querySelector(".mobile-menu__closemenu");

  burger.addEventListener("click", e => {
    e.preventDefault();
    menu.classList.remove("hidden");
  });
  close.addEventListener("click", e => {
    e.preventDefault();
    menu.classList.add("hidden");
  });
})();
