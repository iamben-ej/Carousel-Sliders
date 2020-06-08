const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

const track = document.querySelector('.track');

const carouselWidth = document.querySelector('.carousel-container').offsetWidth;

next.addEventListener('click', () => {
    track.style.transform = `translate(-${carouselWidth}px)`;
});

prev.addEventListener('click', () => {
    track.style.transform = `translate(-${0}px)`;
});