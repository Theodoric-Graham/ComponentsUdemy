"use strict";

const slides = document.querySelectorAll(".slide");
const carousel = document.querySelector(".carousel");

const btnLeft = document.querySelector(".btn--left");
const btnRight = document.querySelector(".btn--right");

let curSlide = 0;
const maxSlide = slides.length;

const goToSlide = function (slide) {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${150 * (i - slide)}%)`;
  });
};
goToSlide(0);

//Next slide
const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
};

//Prev Slide
const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
};

btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);
