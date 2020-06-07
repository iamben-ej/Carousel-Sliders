const slider = document.querySelector(".slider");
const carousel = document.querySelector(".carousel");

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

var direction;

//prev button
prev.addEventListener("click", function () {
  if (direction = -1) {
    //slider.appendChild(slider.firstElementChild);
    direction = 1;
  }
  carousel.style.justifyContent = "flex-end";
  slider.style.transform = "translate(20%)";
});

//next button
next.addEventListener("click", function () {
  direction = -1;
  carousel.style.justifyContent = "flex-start";
  slider.style.transform = "translate(-20%)";
});

//move already transitioned element to end of elements.
slider.addEventListener("transitionend", function () {
  if (direction == -1) {
    slider.appendChild(slider.firstElementChild);
  } else if (direction == 1) {
    slider.prepend(slider.lastElementChild);
  }

  //reset translate (back) to 0 to make next content the current first element.
  slider.style.transition = "none";
  slider.style.transform = "translate(0)";
  setTimeout(function () {
    slider.style.transition = "all 0.5s";
  });
});