const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");
const images = document.querySelectorAll("img");
const imagesArray = Array.from(images);

const movePictures = () => {
  for (let i = 0; i < imagesArray.length; i++) {
    console.log(i);
    if (i === imagesArray.length - 1)  = 0;
    console.log(imagesArray[i]);
  }
}

leftArrow.addEventListener("click", () => {
  movePictures();
})