// object literal
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  draw: function() {
    console.log("draw");
  }
};

circle.draw();

//factory function
function createCircle(radius) {
  return {
    radius,
    draw: function() {
      console.log("drawfunction");
    }
  }
}

const factoryCircle = createCircle(1);
factoryCircle.draw();

//Constructor function
function Circle(radius) {
  console.log("this", this);
  this.radius = radius;
  this.draw = function() {
    console.log("drawConstructor")
  }
  // 'return this' gebeurt automatisch
}

const callConstructorFunction = Circle.call({}, 1) // dit is hetzelfde als regel 40
console.log(callConstructorFunction); // waarom undefined?
Circle.apply({}, [1, 2, 3]); // hiermee kan je een functie callen en array meegeven als argument
const constructorCircle = new Circle(1);
console.log(constructorCircle);


const Circle1 = new Function("radius", `
  this.radius = radius;
  this.draw = function() {
    console.log("drawConstructor")
}
`);
const circleFunction = new Circle1(1);
console.log(circleFunction);

let x = {}; 
// let x = new Object();


// Value vs reference types
//


let z = 10;
let y = z;
z = 20;
console.log(z); // z = 20
console.log(y); // y = 10

let a = { value: 10 };
let b = a;
a.value = 20;
console.log(a); // value: 20
console.log(b); // value: 20
// Een object is NIET in de variabele opgeslagen, er wordt een reference naar de opgeslagen locatie gemaakt.
// Dus als we de variable in een andere kopieren, wordt de reference gekopieerd
//Primitives are copied by value
//Objects are copied by reference

let justANumber = 10;
function increase(number) {
  number++;
}
increase(justANumber);
console.log(justANumber); // justANumber = 10

let justANumberObject = { value: 10 };
increase(justANumberObject.value);
console.log(justANumberObject);

function increaseObj(obj) {
  obj.value++;
}
let justAnotherNumberObj = { value: 10 };
increaseObj(justAnotherNumberObj);
console.log(justAnotherNumberObj);

// Adding and removing properties
//

function Square(sideLength) {
  this.sideLength = sideLength;
  this.draw = function() {
    console.log("drawSquare");
  }
}

const square = new Square(10);
square.draw();
square.color = "red";
console.log(square.color)
console.log(square)
square.location = { x: 1 };
square["location"] = { x: 2 };

const propName = "size";
square[propName] = { y: 4 };

delete square.location;

//Enumerating properties
//

for (let key in square) {
  if (typeof square[key] !== 'function') 
    console.log(key, square[key])
}

const keys = Object.keys(square);
console.log(keys);

if ("sideLength" in square) console.log("Square has a sideLength");

//Abstraction
//
// Hide the details
// Show the essentials

function OtherSquare(sideLength) {
  this.sideLength = sideLength;
  let defaultLocation = { x: 0, y: 0}; //this is a local variable not accessible from outside this object
  let computeOptimalLocation = function (factor) { //this variable will be preserved
    console.log("Magic");
  }
  this.draw = function() {
    let x; // local var only available in this function. this variable will die because its part of the closure of draw method
    computeOptimalLocation(0.1);
    console.log("drawOtherSquare");
  }
}

// Getters and Setters
//

// function AnotherSquare(sideLength) {
//   this.sideLength = sideLength;
//   let defaultLocation = { x: 0, y: 0}; 
//   this.getDefaultLocation = function() {
//     return defaultLocation;
//   }
//   this.draw = function() {
//     console.log("drawOtherSquare");
//   }
//   Object.defineProperties(this, "defaultLocation", {
//     get: function() {

//     }
//   })
// }

// const anotherSquare = new AnotherSquare(10);
// console.log(anotherSquare.getDefaultLocation());

//Stopwatch exercise
function Stopwatch() {
  let counter = 0;
  const timer = () => setInterval(function() {
    counter += 0.01;
  }, 10);
  this.start = function() {
    timer();
  };
  this.stop = function() {
    clearInterval(timer);
  }
  this.reset = function() {
    this.stop();
    counter = 0;
  }
  this.duration = function() {
    console.log(counter + "s");
  };
}

const stopwatch = new Stopwatch();






