//2.1
let someKittens = "De poes van de buurman heeft kittens gehad! Hij vraagt of wij nog kittens willen.";
//A
const firstSentence = someKittens.slice(0, 43);
const secondSentence = someKittens.slice(44)
console.log(firstSentence);
console.log(secondSentence);
//B
const upperCase = someKittens.toUpperCase();
console.log(upperCase);
//C
const searchTerm = "KITTENS";
const indexOfKittens = upperCase.indexOf(searchTerm);
console.log(indexOfKittens);
const lastIndexOfKittens = upperCase.lastIndexOf(searchTerm);
console.log(lastIndexOfKittens);
//D
console.log(upperCase.charAt(29));
console.log(upperCase.charAt(66));

//2.2
const testString = "Een hele goedemorgen teamleden!";
console.log(testString.substring(1, 5));
console.log(testString.substring(5));
console.log(testString.slice(1, 5));
console.log(testString.slice(5));

//A
console.log(testString.substring(5,1));
//B
console.log(testString.slice(5,1));
//C
console.log(testString.substring(-10, -1)); //hij ziet ze beide als 0
console.log(testString.slice(-10, -1));

//2.3
console.log(someKittens.split(" "));
console.log(someKittens.split("k"));
console.log(someKittens.split(""));
console.log(someKittens.split());