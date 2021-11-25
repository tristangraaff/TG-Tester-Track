//Arrays uitleg

const emptyArray = [];
const filledArray = [1, 2, 3, 4, 5];
console.log(filledArray);
console.log(filledArray[0]);

const theMatrix = [
  "The Matrix",
  "The Matrix Reloaded",
  "The Matrix Revolutions",
];
const johnWick = ["John Wick", "John Wick 2", "John Wick 3"];
const favorite = "A Scanner Darkly";
const age = 56;
const keanuMovies = [theMatrix, johnWick, favorite, age];
console.log(keanuMovies);
console.log(keanuMovies[0][2]);

for (let i = 0; i < 5; i++) {
  console.log("i is hier " + i);
}

const blinkArray = ["Blink", 182];
for (const i in blinkArray) {
  console.log(i);
}

for (const i of blinkArray) {
  console.log(i);
}

let bugsInCode = true;
while (bugsInCode) {
  console.log("Fixing bugs");
  break;
}

bugsInCode = 1;
while (bugsInCode > 0) {
  console.log(bugsInCode);
  bugsInCode += 2;
  console.log(bugsInCode);
  if (bugsInCode == 3) continue;
  bugsInCode -= 1;
  console.log(bugsInCode);
  break;
}

let writesBadCode = false;
do {
  console.log("Test");
  break;
} while (writesBadCode);

let pets = ["Bird", "Dog", "Cat"];
console.log(pets.shift() + " escaped!");
console.log(pets.pop() + " escaped!");
console.log(pets);
console.log(pets.unshift("Bird"));
console.log(pets);
console.log(pets.push("Cat"));
console.log(pets);

let outdoorPets = pets.slice(1);
console.log(outdoorPets);
pets.splice(1, 2, "Cat", "Dog");
console.log(pets);
outdoorPets.sort();
console.log(outdoorPets);

pets.forEach((pet) => {
  pet = "My favorite " + pet;
  console.log(pet);
  return pet;
});
console.log(pets);

outdoorPets = outdoorPets.map((pet) => (pet = "My favorite " + pet));
console.log(outdoorPets);

//5.1
//A
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbersArray);
//B
let fruitsArray = ["Appel", "Aardbei", "Peer", "Mango", "Papaya", "Tomaat"];
console.log(fruitsArray);
//C
console.log(fruitsArray[0], fruitsArray[1]);
//D

const getRandomInt = () => {
  const fruitsArrayLength = fruitsArray.length;
  const randomInt = Math.floor(Math.random() * fruitsArrayLength);
  console.log(randomInt);
  return randomInt;
};

const selectRandomFruit = (fruits) => {
  const index = getRandomInt();
  return fruits[index];
};
console.log(selectRandomFruit(fruitsArray));

//E
console.log(fruitsArray.length);
//F
// Ik krijg geen error?

//G
fruitsArray.splice(0, 1, "Peer");
console.log(fruitsArray);

//G & H
const fruitsArrayCopy = [
  "Appel",
  "Aardbei",
  "Peer",
  "Mango",
  "Papaya",
  "Tomaat",
];
console.log(fruitsArrayCopy);
fruitsArrayCopy.splice(2, 0, fruitsArrayCopy[2]);
console.log(fruitsArrayCopy);
fruitsArrayCopy.splice(0, 1);
console.log(fruitsArrayCopy);

delete fruitsArrayCopy[2];
console.log(fruitsArrayCopy);
fruitsArrayCopy.length = 5;
console.log(fruitsArrayCopy);

//5.2
const dutchSports = ["Voetbal", "Hockey", "Schaatsen"];
//A
for (let i = 0; i < 3; i++) {
  console.log(dutchSports[i]);
}

//B
for (const index in dutchSports) {
  console.log(dutchSports[index]);
}

for (const item of dutchSports) {
  console.log(item);
}

//C
for (let i = 0; i < 20; i++) {
  console.log(i + 1);
}

//D & E & F
for (let i = 0; i < 3; i++) {
  for (let i = 1; i < 11; i++) {
    console.log(i);
  }
  for (let i = 2; i < 22; i += 2) {
    console.log(i);
  }
  for (let i = 3; i < 31; i += 3) {
    console.log(i);
  }
}

//G
let fibonacciArray = [0, 1];
for (let i = 2; i < 50; i++) {
  fibonacciArray.push(fibonacciArray[i - 1] + fibonacciArray[i - 2]);
}
console.log(fibonacciArray);

//H
let randomNumbers = [2, 7, 5, 10, 4, 9, 3, 1, 8, 6];
for (let iFirst = 0; iFirst < randomNumbers.length; iFirst++) {
  for (let iSecond = 0; iSecond < randomNumbers.length; iSecond++) {
    if (randomNumbers[iSecond] > randomNumbers[iSecond + 1]) {
      const lowerNumber = randomNumbers[iSecond];
      randomNumbers[iSecond] = randomNumbers[iSecond + 1];
      randomNumbers[iSecond + 1] = lowerNumber;
      console.log(randomNumbers);
    }
  }
};


//5.3
console.log(dutchSports);
//A
dutchSports.push("Zeilen", "Zwemmen");
console.log(dutchSports);
//B
dutchSports.splice(0, 0, "Volleybal");
console.log(dutchSports);
//C
const ballSports = dutchSports.slice(0, 3);
console.log(ballSports);
//D
dutchSports.splice(0, 3);
console.log(dutchSports);
//E
dutchSports.sort();
console.log(dutchSports);

for (let item of dutchSports) {
  console.log(item);
}

const sportsLength = dutchSports.map(item => {
  return item.length;
  }
);
console.log(sportsLength);

//5.4
let arrayLike = document.querySelectorAll("div");
console.log(arrayLike);
const realArray = Array.from(arrayLike);
console.log(realArray);
realArray.push("Hai", "Heey", "Hoooi", "Haalllooo");
console.log(realArray);
const filtered = realArray.filter(word => word.length > 5);
console.log(filtered);
const found = realArray.find(word => word.length > 3);
console.log(found);
console.log(realArray.some(item => typeof item === "string"));
console.log(realArray.every(item => typeof item === "string"));
console.log(typeof realArray[1]);
console.log(realArray.includes("object"));


