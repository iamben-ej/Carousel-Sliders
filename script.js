const slider = document.querySelector(".slider");

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

next.addEventListener("click", function () {
  slider.style.transform = "translate(-20%)";
});
