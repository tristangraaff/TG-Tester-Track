"use strict";

import getData from "./api-client.js";
import { changeSubjectBtn, changeSubjectInput, searchSubject } from "./change_subject.js";

let myVariables = {};

//For carousel
const carouselSlide = document.querySelector(".slide-container");
const images = document.querySelectorAll(".slide-images");
const prevBtn = document.querySelector(".arrowLeft");
const nextBtn = document.querySelector(".arrowRight");

myVariables.counter = 1;

const size = images[0].clientWidth;
const moveImages = () =>
  (carouselSlide.style.transform = "translateX(" + -size * myVariables.counter + "px)");
const transitionSlides = () =>
  (carouselSlide.style.transition = "transform 0.4s ease-in-out");
const removeTransition = () => (carouselSlide.style.transition = "none");

moveImages();

prevBtn.addEventListener("click", () => {
  if (myVariables.counter <= 0) return;
  transitionSlides();
  myVariables.counter--;
  moveImages();
});

nextBtn.addEventListener("click", () => {
  if (myVariables.counter >= images.length - 1) return;
  transitionSlides();
  myVariables.counter++;
  moveImages();
});

carouselSlide.addEventListener("transitionend", () => {
  if (myVariables.counter === 0) {
    myVariables.counter = images.length - 2;
    removeTransition();
    moveImages();
  }
  if (myVariables.counter === images.length - 1) {
    myVariables.counter = 1;
    removeTransition();
    moveImages();
  }
});

//Inject API data into DOM

const APIButton = document.querySelector(".apiButton");
const nonClonedImages = document.querySelectorAll(".slide-images-non-clone");
const lastImageClone = document.querySelector("#lastImageClone");
const firstImageClone = document.querySelector("#firstImageClone");

myVariables.randomNumbersArray = [];

const pushNewNumberToArray = () => {
  let randomNumber;
  randomNumber = Math.floor(Math.random() * 10);
  if (myVariables.randomNumbersArray.includes(randomNumber)) {
    pushNewNumberToArray();
  } else {
    myVariables.randomNumbersArray.push(randomNumber);
  }
};

const injectDataIntoDom = async (imgSubject) => {
  myVariables.randomNumbersArray = [];
  for (let i = 0; i < images.length - 2; i++) {
    pushNewNumberToArray();
  }
  const imagesData = await getData(imgSubject);
  for (let i = 0; i < images.length - 2; i++) {
    nonClonedImages[i].src =
      imagesData.results[myVariables.randomNumbersArray[i]].urls.regular + "&w=1000&h=700";
  }
  lastImageClone.src = images[images.length - 2].src;
  firstImageClone.src = images[1].src;
}

APIButton.addEventListener("click", () => {
  injectDataIntoDom(searchSubject.textContent);
});

// Change Subject

changeSubjectBtn.addEventListener("click", async () => {
  if (changeSubjectInput.value === "") {
    alert("Please enter a subject");
  } else {
    searchSubject.innerText = changeSubjectInput.value;
    injectDataIntoDom(changeSubjectInput.value);
  }
})
