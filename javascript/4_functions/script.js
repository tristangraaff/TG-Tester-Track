//Functions uitleg
let count = 1;
function myFunction() {
  console.log("You have called this function " + count++ + " times!");
}

function myFunction2(parameter) {
  console.log("This functions has the argument: " + parameter);
}

let someVariable = 22;
myFunction2(someVariable);
myFunction2("Everything is allowed");

function myFunction3(firstParam, secondParam, thirdParam) {
  console.log("This function has the first parameter: " + firstParam);
  console.log("This function has the first parameter: " + secondParam);
  console.log("This function has the first parameter: " + thirdParam);
}
myFunction3("First parameter", 22, true);

function myFunction4(firstParam, ...restParam) {
  console.log("This function has the first parameter: " + firstParam);
  console.log("This function has the rest parameter: " + restParam);
}
myFunction4("First parameter", 1, 2, 3, 4, 5, 6);

function winBlackjack() {
  return 21;
}
let result = winBlackjack();
console.log(result);

let timesWon = 0;
function winBlackjack2() {
  timesWon++;
  // debugger;
  console.log("Am I debugged yet?");
}
winBlackjack2();

let b1 = document.getElementById("b1").innerText;
let b2 = document.getElementById("b2").innerText;
function pressButtonOne() {
  console.log(b1);
}
function pressButtonTwo() {
  console.log(b2);
}

function pressButton(parameter) {
  console.log(parameter.innerText);
}

let plusThree = (value) => value + 3;
console.log(plusThree(2));

//4.1
//A
const pressHelloButton = function () {
  console.log("Hello World");
};

//B & C & D
const textInputElement = document.getElementById("text-input");
const logTextInput = function (textInputElement) {
  console.log(textInputElement.value + 2);
  const result = +1;
  return textInputElement.value + 2;
};
console.log(logTextInput(textInputElement));

const logNumber = function (number) {
  let result = 7;
  result += number;
  return result;
};
console.log(logNumber(5));

//4.2
//A
//1
const classDivs = document.getElementsByClassName(
  "get-elements-by-class-name-test"
);
console.log(classDivs);
//2
const tagDivs = document.getElementsByTagName("div");
console.log(tagDivs);
//3
const querySelectorDiv = document.querySelector(
  ".get-elements-by-class-name-test"
);
console.log(querySelectorDiv);
const querySelector2 = document.querySelector("#b1");
console.log(querySelector2);
//4
const querySelectorAllDivs = document.querySelectorAll(
  ".get-elements-by-class-name-test"
);
console.log(querySelectorAllDivs);
//5
document.querySelector(".get-elements-by-class-name-test").innerHTML =
  "Add text to DOM";
//6
console.log(
  document.querySelector(".get-elements-by-class-name-test").innerText
);

//B
const textInputElement2 = document.getElementById("text-input-2").value;
const logTextInput2 = function (textInputElement2) {
  console.log(textInputElement2);
};

//4.3
//A
const randomNumberButton = document.getElementById("random-number-button");
const logRandomNumber = function () {
  console.log(Math.random());
};

//B
const randomNumberButton2 = document.getElementById("random-number-button2");
const logRandomNumber2 = function (x) {
  console.log(Math.floor(Math.random() * x));
};
logRandomNumber2(9);

//C
console.log(Math.min(6, 7, 8, 2200000));
console.log(Math.max(6, 7, 8, 2200000));

//4.4
//A
const checkName = function (inputName) {
  if (
    inputName == "Mike" ||
    inputName == "Cylvia" ||
    inputName == "Miki" ||
    inputName == "Carolyn" ||
    inputName == "Tristan"
  ) {
    console.log("Name recognised, access permitted.");
    return "Name recognised, access permitted.";
  } else {
    console.log("Try another name.");
    return "Try another name.";
  }
};
checkName("James");
checkName("Alesia");
checkName("Carolyn");
checkName("Miki");

//B
const injectNameIntoDOM = function (name) {
  const result = checkName(name);
  const inputDiv = document.querySelector(".input-name");
  inputDiv.innerHTML = result;
};
injectNameIntoDOM("Cylvia");

//C
const injectNameIntoDOMArrow = (name) => {
  const result = checkName(name);
  const inputDiv = document.querySelector(".input-name");
  inputDiv.innerHTML = result;
};
injectNameIntoDOMArrow("Tristan");
