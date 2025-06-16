// Arrays
const lista = [1, 2, 3, 4, 5];

console.log(lista);
console.log(typeof lista);

// mais sobre arrays
const arr = ["a", "b", "c", "d"];

console.log(arr[0]);
console.log(arr[2]);
console.log(arr[4]);

// Propriedades
const numbers = [4, 3, 7];

console.log(numbers.length);
console.log(numbers[`length`]);

// Metodos
const otherNumbers = [1, 2, 3];

const allNumbers = numbers.concat(otherNumbers);

console.log(allNumbers);

const text = "algum texto";

console.log(text.toUpperCase());

console.log(typeof text.toUpperCase);

console.log(text.indexOf("g"));

// Objetos

const person = {
  name: "Matheus",
  age: 31,
  job: "Programador",
};

console.log(person);
console.log(person.name);
console.log(person.name.length);
console.log(typeof person);

// Criando e deletando propriedades

const car = {
  motor: 2.0,
  brand: "WV",
  model: "Tiguan",
  km: 20000,
};

console.log(car);

car.doors = 4;
console.log(car);

delete car.km;

console.log(car);

// mais sobre objetos

const obj = {
  a: "teste",
  b: true,
};

console.log(obj instanceof Object);

const obj2 = {
  c: [],
};

Object.assign(obj2, obj);

console.log(obj2);

console.log(obj)