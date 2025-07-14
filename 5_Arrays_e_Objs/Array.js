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

console.log(obj);

// Conhecendo melhor os objetos

console.log(Object.keys(obj));
console.log(Object.keys(obj2));
console.log(Object.keys(car));

console.log(Object.entries(car));

// Mutação

const a = {
  name: "João",
};

const b = a;

console.log(a);
console.log(b);

console.log(a === b);

a.age = 31;

console.log(a);
console.log(b);

delete b.age;

console.log(a);
console.log(b);

// Loop em array

const users = ["Matheus", "João", "Pedro", "Miguel"];

for (let i = 0; i < users.length; i++) {
  console.log(`Listando o usuário: ${users[i]}`);
}

// Push e pop

const array = ["a", "b", "c"];

array.push("d");

console.log(array);

console.log(array.length);

array.pop();

console.log(array);

const itemRemovido = array.pop();

console.log(itemRemovido);

console.log(array);

array.push("z", "x", "y");

console.log(array);

// shift e unshift

const letters = ["a", "b", "c"];

const letter = letters.shift();

console.log(letter);

console.log(letters);

letters.unshift("p", "q", "r");

letters.unshift("z");

console.log(letters);

// indexof e lastindexof

const myElements = ["Morango", "Pêra", "Uva", "Abacate", "Uva"];

console.log(myElements.indexOf("Morango"));
console.log(myElements.indexOf("Abacate"));

console.log(myElements[2]);
console.log(myElements[myElements.indexOf("Pêra")]);

console.log(myElements.lastIndexOf("Uva"));

console.log(myElements.indexOf("Mamão"));
console.log(myElements.lastIndexOf("Mamão"));

// Slice

const testSlice = ["a", "b", "c", "d", "e"];

const subArray = testSlice.slice(2, 4);

console.log(subArray);
console.log(testSlice);

const subArray2 = testSlice.slice(2, 4 + 1);

console.log(subArray2);

const subArray3 = testSlice.slice(10, 20);

console.log(subArray3);

const subArray4 = testSlice.slice(2);

console.log(subArray4);

// forEach
const nums = [1, 2, 3, 4, 5];

nums.forEach((numero) => {
  console.log(`O número é ${numero}`);
});

const posts = [
  { title: "Primeiro post", category: "PHP" },
  { title: "Segundo post", category: "JavaScript" },
  { title: "Terceiro post", category: "Python" },
];

posts.forEach((post) => {
  console.log(`Exibindo post: ${post.title}, da categoria: ${post.category}`);
});

// Includes

const brands = ["BMW", "Gol", "Fiat"];

console.log(brands.includes("Fiat"));

if (brands.includes("BMW")) {
  console.log("Há carros da marca BMW");
}

// Reverse

const reverseTest = [1, 2, 3, 4, 5];
reverseTest.reverse();

console.log(reverseTest);

// Trim

const trimTest = "   testando \n  ";

console.log(trimTest.trim());

console.log(trimTest);

console.log(trimTest.length);

console.log(trimTest.trim().length);

// Padstart

const testPadstart = "1";

const newPadstart = testPadstart.padStart(5, "0");

console.log(newPadstart);

const newPadend = testPadstart.padEnd(5, "0");

console.log(newPadend);

// split

const frase = "O rato roeu a roupa do rei de roma";

const arraydaSplit = frase.split(" ");

console.log(arraydaSplit);

// Join

const frasedeNovo = arraydaSplit.join(" ");

console.log(frasedeNovo);
const itensparaComprar = ["Mouse", "Teclado", "Monitor"];
const frasedaCompras = `Precisamos comprar: ${itensparaComprar.join(", ")}.`;
console.log(frasedaCompras);
