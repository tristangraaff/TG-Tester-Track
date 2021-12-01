const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");
const images = document.querySelectorAll("img");

let slideIndex = 1;

const showImages = (n) => {
  if (n < 1) {slideIndex = images.length}
  if (n > images.length) {slideIndex = 1}
  for (let item of images) {
     item.style.display = "none";
  }
  images[slideIndex - 1].style.display = "block";
}

const showFirstTime = () => {
  images[slideIndex - 1].style.right = "0";
}

const moveImages = (n) => {
  slideIndex += n;
  showImages(slideIndex);
}

const slideImages = () => {
  for (let item of images) {
    item.classList.remove("slidingImg");
    // item.style.right = "100%";
  }
  console.log(images[slideIndex]);
  images[slideIndex].style.right = "0";
  console.log(images[slideIndex - 1]);
  setTimeout(() => {
    images[slideIndex - 1].classList.add("slidingImg");
  });
  setTimeout(() => {
    images[slideIndex].style.right = "100%";
  }, 2000);
}

showImages(slideIndex);
showFirstTime();

leftArrow.addEventListener("click", () => {
  moveImages(-1);
  slideImages();
})

rightArrow.addEventListener("click", () => {
  moveImages(1);
  // slideImages();
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