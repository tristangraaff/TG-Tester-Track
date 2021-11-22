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
  debugger;
  console.log("Am I debugged yet?");
}
winBlackjack2();
