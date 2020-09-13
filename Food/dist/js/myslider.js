"use strict";

window.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelectorAll(".offer__slider"),
    sliderCounter = document.querySelectorAll(".offer__slider-counter"),
    imagesSlider = document.querySelectorAll(".offer__slider-wrapper"),
    leftArrow = document.querySelector(".offer__slider-prev"),
    rightArrow = document.querySelector(".offer__slider-next");
  let currentImage = 3;
  const current = document.getElementById("current");

  leftArrow.addEventListener("click", (event) => {
    const leftTarget = event.target;

    

    if (currentImage > 1) {
      rightArrow.classList.remove("hide");

      if (leftTarget) {
        currentImage--;
        current.innerHTML = currentImage;
        leftArrow.classList.add("show");

      }
    } else {

      leftArrow.classList.add("hide");

    }
  });

  rightArrow.addEventListener("click", (event) => {
    const rightTarget = event.target;

    if (currentImage < 4) {
      leftArrow.classList.remove("hide");
      if (rightTarget) {
        currentImage++;
        current.innerHTML = currentImage;
        rightArrow.classList.add("show");

      }
    } else {

      rightArrow.classList.add("hide");

    }
  });
});