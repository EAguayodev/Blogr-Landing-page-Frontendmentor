const menuBtn = document.querySelector(".btn-menu");
const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.icon-close');
const menuList = document.querySelector(".menu");

hamburger.addEventListener("click", function () {
  menuList.classList.toggle('menu');
});
