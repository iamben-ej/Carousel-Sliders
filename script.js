const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

const slider = document.querySelector('.slider');
const carousel = document.querySelector('.carousel');

var sectionIndex = 0;

function reset() {
  for (var i = 0; i < slider.children.length; i++) {
    slider.children[i].style.opacity = 0;
    slider.children[i].style.zIndex = 0;
  }
}

var intervalId = 0;

//Auto-fade function ######################################################
function startShow() {
  intervalId = setInterval(function () {
    reset();
    sectionIndex = sectionIndex < 4 ? sectionIndex + 1 : 0;
    slider.children[sectionIndex].style.zIndex = 1;
    slider.children[sectionIndex].style.opacity = 1;
  }, 5000);
}

startShow();
carousel.addEventListener('mouseover', function () {
  clearInterval(intervalId);
});

carousel.addEventListener('mouseout', function () {
  startShow();
});

//Next button ######################################################
next.addEventListener('click', function () {
  reset();
  sectionIndex = sectionIndex < 4 ? sectionIndex + 1 : 4;
  slider.children[sectionIndex].style.zIndex = 1;
  slider.children[sectionIndex].style.opacity = 1;
});

//Previous button ######################################################
prev.addEventListener('click', function () {
  reset();
  sectionIndex = sectionIndex > 0 ? sectionIndex - 1 : 0;
  slider.children[sectionIndex].style.zIndex = 1;
  slider.children[sectionIndex].style.opacity = 1;
});