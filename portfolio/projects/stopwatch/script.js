const startButton = document.querySelector(".start-js");
const pauseButton = document.querySelector(".pause-js");
const stopButton = document.querySelector(".stop-js");
const minutesSpan = document.querySelector(".minutes");
const secondsSpan = document.querySelector(".seconds");
const hundredsSpan = document.querySelector(".hundreds");

let minutes = 0;
let seconds = 0;
let hundreds = 0;

const startTimer = () => {
  hundreds++;
  if (hundreds <= 9) hundredsSpan.innerHTML = "0" + hundreds;
  if (hundreds > 9) hundredsSpan.innerHTML = hundreds;
  if (hundreds <= 99) return;
  hundreds = 0;
  hundredsSpan.innerHTML = "00";
  seconds++;
  if (seconds <= 9) secondsSpan.innerHTML = "0" + seconds;
  if (seconds > 9) secondsSpan.innerHTML = seconds;
  if (seconds <= 59) return;
  seconds = 0;
  secondsSpan.innerHTML = "00";
  minutes++;
  if (minutes <= 9) minutesSpan.innerHTML = "0" + minutes;
  if (minutes > 9) minutesSpan.innerHTML = minutes;
};

const stopTimer = () => {
  minutes = 0;
  seconds = 0;
  hundreds = 0;
  minutesSpan.innerHTML = "00";
  secondsSpan.innerHTML = "00";
  hundredsSpan.innerHTML = "00";
}

let repeatTimer = null;

startButton.addEventListener("click", () => {
  if (repeatTimer != null) return;
  repeatTimer = setInterval(startTimer, 10);
});

pauseButton.addEventListener("click", () => {
  clearInterval(repeatTimer);
  repeatTimer = null;
});

stopButton.addEventListener("click", () => {
  clearInterval(repeatTimer);
  stopTimer();
  repeatTimer = null;
});
