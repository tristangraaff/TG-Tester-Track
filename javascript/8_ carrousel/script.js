const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");
const images = document.querySelectorAll("img");

let slideNumber = 1;

const showStartupImg = () => {
  console.log("FIRST IMAGE IS RENDERED WITHIN SCREEN ON STARTUP");
  images[0].style.right = "0";
};

const counter = (n) => {
  if (n < 1) {slideNumber = images.length}
  if (n > images.length) {slideNumber = 1}
  console.log(`SLIDENUMBER = ${slideNumber}`);
};

const changeSlideNumber = (n) => {
  console.log("COUNTER FUNCTION IS RUN, SLIDENUMBER DIMINISHES OR INCREASES BY 1");
  slideNumber += n;
  counter(slideNumber);
};

const moveStartupImgAway = () => {
  if (images[0].style.right == "0px") {
    console.log("STARTUP IMAGE IS POSITIONED OUTSIDE OF SCREEN");
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

const removeFormerImgFromScreen = (slideDirection) => {
  if (slideDirection === "left") {
    setTimeout(() => {
      if (slideNumber === images.length) {
        console.log("FIRST IMG IS POSITIONED OUTSIDE OF SCREEN");
        images[0].style.right = "100%";
      } else {
        console.log("IMG BEFORE CURRENT IS POSITIONED OUTSIDE OF SCREEN");
        images[slideNumber].style.right = "100%";
      }
    }, 2000);
  }

  if (slideDirection === "right") {
    setTimeout(() => {
      if (slideNumber === images.length) {
        console.log("FIRST IMG IS POSITIONED OUTSIDE OF SCREEN");
        images[slideNumber - 2].style.right = "-100%";
      } else {
        console.log("IMG BEFORE CURRENT IS POSITIONED OUTSIDE OF SCREEN");
        images[slideNumber].style.right = "-100%";
      }
    }, 2000);
  }

  // with numbers
  setTimeout(() => {
    if (slideNumber === images.length) {return images[slideNumber - n].style.right = "0"}
    if (slideNumber === 1) {return images[slideNumber - n].style.right = "0"}
    images[slideNumber - n].style.right = "0";
  }, 2000)
};

passLeftArgument = () => {
  if (slideNumber === images.length) {return 5}
  if (slideNumber !== images.length) {return 0}
}

leftArrow.addEventListener("click", () => {
  moveStartupImgAway();
  for (let item of images) {
    console.log("ALL SLIDING IMG CLASSES ARE REMOVED");
    item.classList.remove("slidingImg");
  }
  changeSlideNumber(-1);
  keepShowingFormerImgOnScreen(passLeftArgument());
  slideNewImgIntoScreen(0);
  removeFormerImgFromScreen("left");
});

const passRightArgument = () => {
  if (slideNumber === 1) {return -3}
  if (slideNumber !== 1) {return 2}
}

rightArrow.addEventListener("click", () => {
  moveStartupImgAway();
  for (let item of images) {
    console.log("ALL SLIDING IMG CLASSES ARE REMOVED");
    item.classList.remove("slidingImg");
  }
  changeSlideNumber(1);
  keepShowingFormerImgOnScreen(passRightArgument());
  slideNewImgIntoScreen(2);
  removeFormerImgFromScreen("right");
});

showStartupImg();
