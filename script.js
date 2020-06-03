const slider = document.querySelector(".slider");

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

//next button
next.addEventListener("click", function () {
  slider.style.transform = "translate(-20%)";
});

//move already transitioned element to end of elements.
slider.addEventListener("transitionend", function () {
  slider.appendChild(slider.firstElementChild);

  //reset translate (back) to 0 to make next content the current first element.
  slider.style.transition = "none";
  slider.style.transform = "translate(0)";
  setTimeout(function () {
    slider.style.transition = "all 0.5s";
  });
});
