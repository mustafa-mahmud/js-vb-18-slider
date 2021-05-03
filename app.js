'use strict';

const images = document.querySelectorAll('.slider img');
const btnRight = document.querySelector('.right');
const btnLeft = document.querySelector('.left');

let currentIndex = 0;

slider(currentIndex);

function slider(currentIndex) {
  images.forEach((img, ind) => {
    img.style.transform = `translateX(${100 * (ind - currentIndex)}%)`;
  });
}

function prevSlide() {
  if (currentIndex === images.length - 1) currentIndex = 0;
  else currentIndex++;

  slider(currentIndex);
}

function nextSlide() {
  if (currentIndex === 0) currentIndex = images.length - 1;
  else currentIndex--;

  slider(currentIndex);
}

btnRight.addEventListener('click', prevSlide);

btnLeft.addEventListener('click', nextSlide);
