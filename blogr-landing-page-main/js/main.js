// const menuBtn = document.querySelector("btn-menu");
const hamburger = document.querySelector('.hamburger');
const menuList = document.querySelector(".navbar");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle('hide');
  menuList.classList.toggle('navbar');
});
