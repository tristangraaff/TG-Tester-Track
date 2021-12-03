const carouselSlide = document.querySelector(".slide-container");
const images = document.querySelectorAll("img");
const prevBtn = document.querySelector(".arrowLeft");
const nextBtn = document.querySelector(".arrowRight");

let counter = 1;
const size = images[0].clientWidth;
const moveImages = () => carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
const transitionSlides = () => carouselSlide.style.transition = "transform 0.4s ease-in-out";
const removeTransition = () => carouselSlide.style.transition = "none";

moveImages();

prevBtn.addEventListener("click", () => {
  if (counter <= 0) return;
  transitionSlides();
  counter--;
  moveImages();
})

nextBtn.addEventListener("click", () => {
  if (counter >= images.length - 1) return;
  transitionSlides();
  counter ++;
  moveImages();
})

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
})