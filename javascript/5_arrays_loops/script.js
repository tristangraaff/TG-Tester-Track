//Arrays uitleg

const emptyArray = [];
const filledArray = [1, 2, 3, 4, 5];
console.log(filledArray);
console.log(filledArray[0]);

const theMatrix = ["The Matrix", "The Matrix Reloaded", "The Matrix Revolutions"];
const johnWick = ["John Wick", "John Wick 2", "John Wick 3"];
const favorite = "A Scanner Darkly";
const age = 56;
const keanuMovies = [theMatrix, johnWick, favorite, age];
console.log(keanuMovies);
console.log(keanuMovies[0][2]);

for (let i = 0; i < 5; i++) {
  console.log("i is hier " + i);
};

const blinkArray = ["Blink", 182];
for (const i in blinkArray) {
  console.log(i);
};

for (const i of blinkArray) {
  console.log(i);
};

let bugsInCode = true;
while (bugsInCode) {
  console.log("Fixing bugs");
  break;
};

bugsInCode = 1;
while (bugsInCode > 0) {
  console.log(bugsInCode);
  bugsInCode += 2;
  console.log(bugsInCode);
  if (bugsInCode == 3) continue;
  bugsInCode -= 1;
  console.log(bugsInCode);
  break;
};

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

pets.forEach(pet => {
  pet = "My favorite " + pet;
  console.log(pet);
  return pet;
});
console.log(pets);

outdoorPets = outdoorPets.map(pet => pet = "My favorite " + pet);
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






