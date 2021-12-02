const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");
const images = document.querySelectorAll("img");

let slideIndex = 1;

const showImages = (n) => {
  if (n < 1) {slideIndex = images.length}
  if (n > images.length) {slideIndex = 1}
  console.log("IMAGE DISPLAY IS CHANGED TO BLOCK" , `SLIDEINDEX = ${slideIndex}`)
  images[slideIndex - 1].style.display = "block";
}

const showStartupImg = () => {
  console.log("FIRST IMAGE IS RENDERED WITHIN SCREEN SIZE ON STARTUP")
  images[0].style.right = "0";
}

const moveStartupImgAway = () => {
  if (images[0].style.right == "0px") {
    console.log("FIRST IMAGE IS POSITIONED OUTSIDE OF SCREEN")
    images[0].style.right = "100%";
  }
}

const keepShowingFormerImgOnScreen = () => {
  if (slideIndex === images.length) {
    console.log("FIRST IMG IS POSITIONED INSIDE OF SCREEN")
    images[0].style.right = "0";
  } else {
    console.log("IMG BEFORE CURRENT IS POSITIONED INSIDE OF SCREEN")
    images[slideIndex].style.right = "0";
  }
}

const slideNewImgIntoScreen = () => {
  setTimeout(() => {
    if(slideIndex === 1) {
      console.log("LAST IMG SLIDES INTO SCREEN")
      images[0].classList.add("slidingImg"); 
      console.log(images[0]);
    } else {
      console.log("CURRENT IMG SLIDES INTO SCREEN")
      images[slideIndex - 1].classList.add("slidingImg");
      console.log(images[slideIndex - 1]);   
    }
  });
}

const removeFormerImgFromScreen = () => {
  setTimeout(() => {
    if (slideIndex === images.length) {
      console.log("FIRST IMG IS POSITIONED OUTSIDE OF SCREEN")
      images[0].style.right = "100%";
    } else {
      console.log("IMG BEFORE CURRENT IS POSITIONED OUTSIDE OF SCREEN")
      images[slideIndex].style.right = "100%";
    }
  }, 2000);
}

const moveImages = (n) => {
  console.log("SHOWN IMAGES IS RUN, SLIDEINDEX DIMINISHES BY 1")
  slideIndex += n;
  showImages(slideIndex);
}

const slideImages = () => {
  moveStartupImgAway();
  for (let item of images) {
    console.log("ALL SLIDING IMG CLASSES ARE REMOVED")
    item.classList.remove("slidingImg");
  }
  keepShowingFormerImgOnScreen();
  slideNewImgIntoScreen();
  removeFormerImgFromScreen();
}

leftArrow.addEventListener("click", () => {
  moveImages(-1);
  slideImages();
})

rightArrow.addEventListener("click", () => {
  moveImages(1);
  slideImages();
})

showStartupImg();
showImages(slideIndex);