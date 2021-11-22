let someValue = false;

if (someValue == true) {
  console.log("True!");
} else {
  console.log("Not so true.");
}

if (someValue) {
  console.log("Zie je de eerste?");
}

if (!someValue) {
  console.log("Zie je de tweede?");
}

let someNumber = 5;
someNumber == 6
  ? console.log(someNumber + " is 6")
  : console.log(someNumber + " is not 6");

//3.1

//A 
// Het verschil tussen == en === is dat er bij == alleen wordt gechecked of de waarde hetzelfde is, 
// terwijl bij === ook wordt gekeken of het datatype gelijk is

//B
// > staat voor greater than, >= staat voor greater than or equal to
// < staat voor less than, <= staat voor less than or equal to

//C
const x = 4;
const y = 8;
if (x === 4 && y === 8) {
  console.log("Result!");
};

//D
if (x === 4 || y === 8) {
  console.log("Result!");
};

//E
if (x === 3) {
  console.log("Nope");
} else if (y === 8) {
  console.log("Result!");
};

//G
let z = 34;
if (z > 5 && z < 10) {
  console.log("Resultado!")
} else if (z >= 11 && z <= 20) {
  console.log("Result")
} else if (z === 21 || z === 23) {
  console.log("Result")
} else if (z < 35 || (z >= 40 && z <= 45)) {
  console.log("Yes!")
};

z = 36;
if (z > 5 && z < 10) {
  console.log("Resultado!")
} if (z >= 11 && z <= 20) {
  console.log("Result")
} if (z === 21 || z === 23) {
  console.log("Result")
} if (z < 35 || (z >= 40 && z <= 45)) {
  console.log("Yes!")
};

//3.2
//A
let c = 20;
if (c == 3) {
  console.log("c equals 3");
} else if (c > 4) {
  console.log("c is greater than 4");
} else if (c > 11) {
  console.log("c is greater than 11");
} else if (c < 3) {
  console.log("c is less than 3");
};

//B
// Bij c = 20 krijg ik c is greater than 4 maar greater than 11 is ook waar. Dit kan ik oplossen door de
// else weg te halen, dan worden allebei getoond. 

c = 20;
if (c == 3) {
  console.log("c equals 3");
} if (c > 4) {
  console.log("c is greater than 4");
} if (c > 11) {
  console.log("c is greater than 11");
} if (c < 3) {
  console.log("c is less than 3");
};

//C
const date = 11;
if (date == 1) {
  console.log("januari");
} else if (date == 2) {
  console.log("februari");
} else if (date == 3) {
  console.log("maart");
} else if (date == 4) {
  console.log("april");
} else if (date == 5) {
  console.log("mei");
} else if (date == 6) {
  console.log("juni");
} else if (date == 7) {
  console.log("juli");
} else if (date == 8) {
  console.log("augustus");
} else if (date == 9) {
  console.log("september");
} else if (date == 10) {
  console.log("oktober");
} else if (date == 11) {
  console.log("november");
} else if (date == 12) {
  console.log("december");
} else {
  console.log("Geen geldige maand!")
};

//D
switch (date) {
  case 1:
    console.log("januari");
    break;
  case 2:
  console.log("februari");
  break;
  case 3:
    console.log("maart");
    break;
  case 4:
    console.log("april");
    break;
  case 5:
    console.log("mei");
    break;
  case 6:
    console.log("juni");
    break;
  case 7:
  console.log("juli");
  break; 
  case 8:
    console.log("augustus");
    break;
  case 9:
    console.log("september");
    break; 
  case 10:
    console.log("oktober");
    break;
  case 11:
    console.log("november");
    break;
  case 12:
    console.log("december");
    break;
  default:
    console.log("Geen geldige datum!");       
};

//E
let t = 1;
let results;
if (t <= 4 && t >= 0) {
  results = 2;
} else {
  results = 5;
};
console.log(results);

let newResults
t <= 4 && t >= 0 ? newResults = 2 : newResults = 5;
console.log(newResults);

