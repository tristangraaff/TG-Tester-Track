'use strict'

import getData from './api-client.js';

//For carousel
const carouselSlide = document.querySelector(".slide-container");
const images = document.querySelectorAll(".slide-images");
const prevBtn = document.querySelector(".arrowLeft");
const nextBtn = document.querySelector(".arrowRight");

let counter = 1;
const size = images[0].clientWidth;
const moveImages = () =>
  (carouselSlide.style.transform = "translateX(" + -size * counter + "px)");
const transitionSlides = () =>
  (carouselSlide.style.transition = "transform 0.4s ease-in-out");
const removeTransition = () => (carouselSlide.style.transition = "none");

moveImages();

prevBtn.addEventListener("click", () => {
  if (counter <= 0) return;
  transitionSlides();
  counter--;
  console.log(counter);
  moveImages();
});

nextBtn.addEventListener("click", () => {
  if (counter >= images.length - 1) return;
  transitionSlides();
  counter++;
  console.log(counter);
  moveImages();
});

carouselSlide.addEventListener("transitionend", () => {
  if (counter === 0) {
    counter = images.length - 2;
    removeTransition();
    moveImages();
  }
  if (counter === images.length - 1) {
    counter = 1;
    removeTransition();
    moveImages();
  }
});

//Inject API data into DOM

const APIButton = document.querySelector(".apiButton");
const nonClonedImages = document.querySelectorAll(".slide-images-non-clone");
const lastImageClone = document.querySelector("#lastImageClone");
const firstImageClone = document.querySelector("#firstImageClone");

let randomNumbersArray = [];

const pushNewNumberToArray = () => {
  let randomNumber;
  randomNumber = Math.floor(Math.random() * 10);
  if (randomNumbersArray.includes(randomNumber)) {
    pushNewNumberToArray();
  } else {
    randomNumbersArray.push(randomNumber);
  }
};

APIButton.addEventListener("click", async () => {
  randomNumbersArray = [];
  for (let i = 0; i < images.length - 2; i++) {
    pushNewNumberToArray();
  }
  const imagesData = await getData();
  for (let i = 0; i < images.length - 2; i++) {
    nonClonedImages[i].src =
      imagesData.results[randomNumbersArray[i]].urls.regular + "&w=1000&h=700";
  }
  lastImageClone.src = images[images.length - 2].src;
  firstImageClone.src = images[1].src;
});


