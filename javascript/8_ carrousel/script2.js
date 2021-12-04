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

//API INTEGRATION

const APIButton = document.querySelector(".api-button");
const APIImageElement = document.querySelector(".api-test");
console.log(APIButton, APIImageElement)

const getData = async function () {
  try {
    const randomPageNumber = Math.floor(Math.random() * 100)
    const requestUrl = `https://api.unsplash.com/search/photos?query=russia&client_id=cTDUVlLPVV4SoCK_UjD5yimHJ4EEZ6TuwA-6HN7_k7M&page=${randomPageNumber}`;
    const res = await fetch(requestUrl, {method: "GET"});
    const convertedRes = await res.json();
    console.log(convertedRes);
    return convertedRes;
  } catch (error) {
    console.log(error);
  }
}

APIButton.addEventListener("click", async () => {
  const randomImgNumber = Math.floor(Math.random() * 10);
  const imagesData = await getData();
  console.log(imagesData);
  const randomImage = imagesData.results[randomImgNumber].urls.regular;
  APIImageElement.src = randomImage;
})
