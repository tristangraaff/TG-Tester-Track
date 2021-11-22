let camelCasedVariable = "Text!";
console.log(typeof camelCasedVariable);

//1.1
// //A
// let letOefening = "Let Tekst";
// let letOefening = "Let Tekst Twee!";
// //Verwachting: log geeft let tekst twee
// console.log(letOefening);
// //Resultaat: is al gedeclared dus kan niet opnieuw

//B
let letOefening2 = "Let Tekst";
console.log(letOefening2);
letOefening2 = "Let Tekst Twee!"
//Verw: log geeft let tekst twee
console.log(letOefening2);

// //C
// const constOef = "Const Tekst";
// console.log(constOef);
// const constOef = "Const Teksr Twee";
// //Verw: reassign error
// console.log(constOef);

//D
varOef = "Var Tekst";
//Verw: error is niet assigned
console.log(varOef);
//Res: assigned wel 
var varOef = "Var Tekst Twee";
//Verw: error is al geassigned
console.log(varOef);
//Res: reassigned wel
var varOef = "Var Tekst Drie";
//Verw: reassigned wel
console.log(varOef);

//1.2
let typeQuestion = "Number";
console.log("This is a " + typeof typeQuestion + ", with the value: " + typeQuestion);
//A
//Verw: "This is a string, with the value: Number"
//Res: correct
//B
let typeQuestion1 = true;
console.log("This is a " + typeof typeQuestion1 + ", with the value: " + typeQuestion1);
//Res: boolean met value true

let typeQuestion2 = false;
console.log("This is a " + typeof typeQuestion2 + ", with the value: " + typeQuestion2);
//Res: boolean met value false

let typeQuestion3 = undefined;
console.log("This is a " + typeof typeQuestion3 + ", with the value: " + typeQuestion3);
//Res: This is a undefined with the value: undefined;

let typeQuestion4 = 22;
console.log("This is a " + typeof typeQuestion4 + ", with the value: " + typeQuestion4);
//Res: number met value 22

let typeQuestion5 = 22n;
console.log("This is a " + typeof typeQuestion5 + ", with the value: " + typeQuestion5);
//Res: bigint met value 22;

let typeQuestion6 = Symbol();
console.log(typeof typeQuestion6);
//Res: symbol
// console.log("This is a " + typeof typeQuestion6 + ", with the value: " + typeQuestion6);
// //Res: error cannot converto symbol value to string
console.log(typeQuestion6);
//Res: Symbol()

let typeQuestion7 = null;
console.log("This is a " + typeof typeQuestion7 + ", with the value: " + typeQuestion7);
//Res: object met value null

let typeQuestion8 = {};
console.log("This is a " + typeof typeQuestion8 + ", with the value: " + typeQuestion8);
//Res: object met value [object Object]

let typeQuestion9 = new Object();
console.log("This is a " + typeof typeQuestion9 + ", with the value: " + typeQuestion9);
//Res: object met value [object Object]

let typeQuestion10 = function calculateSomething() {};
console.log("This is a " + typeof typeQuestion10 + ", with the value: " + typeQuestion10);
//Res: function met value function calculateSomething() {}

//1.3
let someNumber = 5;
let anotherNumber = "5";
console.log(someNumber + anotherNumber);
//C Res: "55"
anotherNumber = 5;
console.log(someNumber + anotherNumber);
//D Res: 10
//E
console.log(someNumber == anotherNumber);
//1 Res: true
console.log(someNumber === anotherNumber);
//2 Res: true
console.log(someNumber != anotherNumber);
//3 Res: false
console.log(someNumber !== anotherNumber);
//4 Res: false

//1.4
//A
let increment = 1;
console.log(++increment);
//Res: 2
console.log(increment++);
//Res: 2
console.log(increment);
//Res: 3
let increment2 = 1
//B
console.log(increment2++);
//Res: 1
console.log(++increment2);
//Res: 3
//C
let modulo = 24 % 10;
console.log(modulo);
//Res: 4
let division = 24 / 10;
console.log(division);
//Res: 2.4
//D
let someNumberr = "Tekst";
console.log( ! someNumberr);
//Res: false
//E
someNumberr = 5;
console.log(someNumberr);
//Res: 5
someNumberr = Boolean;
console.log(someNumberr);
//Res: f Boolean() { [native code] }
someNumberr = false;
console.log(someNumberr);
//Res: false
someNumberr = "false";
console.log(someNumberr);
//Res: "false"
someNumberr = true;
console.log(someNumberr);
//Res: true
someNumberr = "true";
console.log(someNumberr);
//Res: "true"
someNumberr = null;
console.log(someNumberr);
//Res: null
// someNumberr = Undefined;
// console.log(someNumberr);
// //Res: error undefined is not defined
//F
let a = 2;
let b = "hi";
console.log(a += 3);
//Res: 5
console.log(a = a + 3);
//Res: 8
console.log(a += b);
//Res: "8hi"
//G
console.log(a -= b);
//Res: NaN
a = 2;
b = 10;
console.log(a -= b);
//Res: -8
console.log(a *= b);
//Res: -80;
console.log(a % b);
//Res: -0;
console.log(b **= a);
//Res: 1e-80;

