const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");
const images = document.querySelectorAll("img");

let slideNumber = 1;

const showStartupImg = () => {
  images[0].style.right = "0";
};

const counterFunction = (n) => {
  if (n < 1) {slideNumber = images.length}
  if (n > images.length) {slideNumber = 1}
  console.log(`SLIDENUMBER = ${slideNumber}`);
};

const removeSlidingImgClass = () => {
  for (let item of images) {
    item.classList.remove("slidingImg");
  }
}

const changeSlideNumber = (n) => {
  slideNumber += n;
  counterFunction(slideNumber);
};

const removeStartUpImgFromScreen = () => {
  if (images[0].style.right == "0px") {
    images[0].style.right = "100%";
  }
};

const keepShowingFormerImgOnScreen = (n) => {
  if (slideNumber === 1) {
    return images[slideNumber - n].style.right = "0";
  }
  if (slideNumber === images.length) {
    return images[slideNumber - n].style.right = "0"
  }
  images[slideNumber - n].style.right = "0";
};

const slideNewImgIntoScreen = (n) => {
  if (n === 0) {images[slideNumber - 1].style.right = "100%"}
  if (n === 2) {images[slideNumber - 1].style.right = "-100%"}
  setTimeout(() => {
    images[slideNumber - 1].classList.add("slidingImg");
  })
};

const removeFormerImgFromScreen = (n) => setTimeout(() => {
  if (slideNumber === 1) {
    return images[slideNumber - n].style.right = "100%";
  }
  if (slideNumber === images.length) {
    return images[slideNumber - n].style.right = "100%"
  }
  console.log(n)
  images[slideNumber - n].style.right = "100%";
}, 2000)

const passLeftArgument = () => {
  if (slideNumber === images.length) {return 5}
  if (slideNumber !== images.length) {return 0}
}

leftArrow.addEventListener("click", () => {
  removeStartUpImgFromScreen();
  removeSlidingImgClass();
  changeSlideNumber(-1);
  keepShowingFormerImgOnScreen(passLeftArgument());
  slideNewImgIntoScreen(0);
  removeFormerImgFromScreen(passLeftArgument());
});

const passRightArgument = () => {
  if (slideNumber === 1) {return -3}
  if (slideNumber !== 1) {return 2}
}

rightArrow.addEventListener("click", () => {
  removeStartUpImgFromScreen();
  removeSlidingImgClass();
  changeSlideNumber(1);
  keepShowingFormerImgOnScreen(passRightArgument());
  slideNewImgIntoScreen(2);
  removeFormerImgFromScreen(passRightArgument());
});

showStartupImg();
