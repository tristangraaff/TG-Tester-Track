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
  // if (slideDirection === "left" && slideNumber !== images.length) {
  //   console.log("IMG BEFORE CURRENT IS POSITIONED INSIDE OF SCREEN");
  //   images[slideNumber].style.right = "0";
  //   return;
  // }
  // console.log("FIRST IMG IS POSITIONED INSIDE OF SCREEN");
  // images[0].style.right = "0";

  // if (slideDirection === "right" && slideNumber !== 1) {
  //   console.log("IMG BEFORE CURRENT IS POSITIONED INSIDE OF SCREEN");
  //   images[slideNumber - 2].style.right = "0";
  //   return
  // }
  // console.log("LAST IMG IS POSITIONED INSIDE OF SCREEN");
  // images[images.length - 1].style.right = "0";

  // with numbers

  if (slideNumber === 1) {
    return images[slideNumber - n].style.right = "0";
  }
  if (slideNumber === images.length) {
    return images[0].style.right = "0"
  }
  images[slideNumber - n].style.right = "0";
};

const slideNewImgIntoScreen = (slideDirection) => {
  if (slideDirection === "left") {
    images[slideNumber - 1].style.right = "100%";
    setTimeout(() => {
      if (slideNumber === 1) {
        console.log("LAST IMG SLIDES INTO SCREEN");
        images[0].classList.add("slidingImg");
        console.log(images[0]);
      } else {
        console.log("CURRENT IMG SLIDES INTO SCREEN");
        images[slideNumber - 1].classList.add("slidingImg");
        console.log(images[slideNumber - 1]);
      }
    });
  }

  if (slideDirection === "right") {
    images[slideNumber - 1].style.right = "-100%";
    setTimeout(() => {
      if (slideNumber === 1) {
        console.log("LAST IMG SLIDES INTO SCREEN");
        images[0].classList.add("slidingImg");
        console.log(images[0]);
      } else {
        console.log("CURRENT IMG SLIDES INTO SCREEN");
        images[slideNumber - 1].classList.add("slidingImg");
      }
    });
  }
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
};

const slideImages = (slideDirection) => {
  moveStartupImgAway();
  for (let item of images) {
    console.log("ALL SLIDING IMG CLASSES ARE REMOVED");
    item.classList.remove("slidingImg");
  }
  
  slideNewImgIntoScreen(slideDirection);
  removeFormerImgFromScreen(slideDirection);
};

leftArrow.addEventListener("click", () => {
  changeSlideNumber(-1);
  keepShowingFormerImgOnScreen(0);
  slideImages("left");
});

const passArgument = () => {
  if (slideNumber === 1) {return -3}
  if (slideNumber !== 1) {return 2}
}

rightArrow.addEventListener("click", () => {
  changeSlideNumber(1);
  keepShowingFormerImgOnScreen(passArgument());
  slideImages("right");
});

showStartupImg();
