var elBtn = document.querySelector(".header__button-mode");
var elBtnsec = document.querySelector(".humburger__button-mode");
var elBody = document.querySelector("body");
var elIntro = document.querySelector(".intro");

elBtn.addEventListener("click", function () {
  elBody.classList.toggle("dark");
})
elBtnsec.addEventListener("click", function () {
  elBody.classList.toggle("dark");
})
elBtn.addEventListener("click", function () {
  elIntro.classList.toggle("darkmode");
})
elBtnsec.addEventListener("click", function () {
  elIntro.classList.toggle("darkmode");
})
