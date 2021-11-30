const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");
const images = document.querySelectorAll("img");

let slideIndex = 5;

const showImages = (index) => {
  if (index < 1) {slideIndex = images.length};
  if (index > images.length) {slideIndex = 1};
  for (let item of images) {
    item.style.display = "none";
  }
  images[slideIndex - 1].style.display = "block";
  slideImages();
}

const moveImages = (index) => {
  slideIndex += index;
  showImages(slideIndex);
}

const slideImages = () => {
  for (let item of images) {
    item.classList.remove("slidingImg");
  }
  console.log(slideIndex - 2) 
  if (slideIndex - 2 < 1) {return}
  console.log(images[slideIndex -2]);
//   images[slideIndex - 2].style.display = "block";
//   console.log(images[slideIndex - 2]);
//   images[slideIndex - 1].classList.add("slidingImg");
//   setTimeout(() => {
//     images[slideIndex - 2].style.display = "none";
//   }, 2000);
}

showImages(slideIndex);

leftArrow.addEventListener("click", () => {
  moveImages(-1);
})

rightArrow.addEventListener("click", () => {

  moveImages(1);
})


// const movePictures = () => {
//   for (let item of images) {
//     const computedStyles = getComputedStyle(item);
//     const leftPositionNumber = computedStyles.left.replace("px", "");
//     const leftPositionInt = parseInt(leftPositionNumber);
//     console.log(leftPositionInt);
//     const newPosition = leftPositionInt - 1000;
//     const newPositionString = newPosition.toString();
//     console.log(newPositionString);
//     item.style.left = newPositionString;
//   }
// }