//Uitleg object constructors

let objectConstructed = new Object();
objectConstructed.name = "Jens";
objectConstructed.age = "28";
objectConstructed.country = "Netherlands";
objectConstructed.city = "Amsterdam";
console.log(objectConstructed);

let literallyConstructed = {
  name: "Jens",
  age: "28",
  country: "Netherlands",
  city: "Amsterdam",
};
console.log(literallyConstructed);

function Person(name, age, country, city) {
  this.name = name;
  this.age = age;
  this.country = country;
  this.city = city;
}
let functionConstructed = new Person("Jens", "28", "Netherlands", "Amsterdam");
console.log(functionConstructed);
console.log(Person);

let singletonConstructed = new (function () {
  this.name = "Jens";
  this.age = "28";
  this.country = "Netherlands";
  this.city = "Amsterdam";
})();
console.log(singletonConstructed);

class ClassPerson {
  constructor(name, age, country, city) {
    this.name = "Jens";
    this.age = "28";
    this.country = "Netherlands";
    this.city = "Amsterdam";
  }
}
let classConstructed = new ClassPerson();
console.log(classConstructed);

//6.1
//A

const dog = {
  species: "dog",
  name: "Lassie",
};

let cat = new Object();
cat.species = "cat";
cat.name = "Becky";

function Jaguar(species, name) {
  this.species = species;
  this.name = name;
}
let jaguar = new Jaguar("jaguar", "Jack");

let python = new (function () {
  this.species = "python";
  this.name = "Paul";
})();

class Elephant {
  constructor(species, name) {
    this.species = "elephant";
    this.name = "Eleonora";
  }
}
let elephant = new Elephant();

console.log(python);
console.log(jaguar);
console.log(cat);
console.log(dog);
console.log(elephant);

//B
const coyote = Object.create(dog);
coyote.name = "Carlijn";
coyote.species = "coyote";

const linx = Object.create(cat);
linx.name = "Leopold";
linx.species = "linx";

const tiger = Object.create(jaguar);
tiger.name = "Trina";
tiger.species = "tiger";

const boaConstrictor = Object.create(python);
boaConstrictor.name = "Bart";
boaConstrictor.species = "boa constrictor";

const mamut = Object.create(elephant);
mamut.name = "Marko";
mamut.species = "mamut";

console.log(coyote);
console.log(linx);
console.log(tiger);
console.log(boaConstrictor);
console.log(mamut);

//C
let people = [
  {
    name: "Jim",
    age: 56,
  },
  {
    name: "Mohammed",
    age: 36,
  },
  {
    name: "James",
    age: 6,
  },
  {
    name: "Tanya",
    age: 26,
  },
  {
    name: "Paula",
    age: 98,
  },
  {
    name: "Adrianna",
    age: 37,
  },
  {
    name: "Tom",
    age: 19,
  },
  {
    name: "Ilona",
    age: 38,
  },
  {
    name: "Claus",
    age: 12,
  },
  {
    name: "Aegina",
    age: 67,
  },
];

people.sort((a, b) => a.age - b.age);
console.log(people);

//6.2 
//A
function Club(name, clubType, numberOfMembers, address, phoneNumber, contactPerson) {
  this.name = name;
  this.clubType = clubType;
  this.numberOfMembers = numberOfMembers;
  this.address = address;
  this.phoneNumber = phoneNumber;
  this.contactPerson = contactPerson;
}

let ajax = new Club("ajax", "football", "22000");
console.log(ajax);

//B
ajax.address = "Amsterdam Arena";
ajax.phoneNumber = "020-6382993";
ajax.contactPerson = "Johan Cruijff";
console.log(ajax);

let chelsea = new Club("chelsea", "football", "50000", "Westmister Avenue", "93939393", "Charles Dickens");
let barca = new Club("barcelona", "football", "100000", "Las Ramblas", "2145434534", "Juan Perez");
let galatasaray = new Club("galatasaray", "football", "21000", "Istanbul Avenue", "3423432", "Deniz Yildiz");

const footballClubs = [ajax, chelsea, barca, galatasaray];
console.log(footballClubs);

for (let item of footballClubs) {
  console.log(item.phoneNumber);
  console.log(item.address);
  console.log(item.contactPerson);
}


