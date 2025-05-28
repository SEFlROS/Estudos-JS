// Variaveis
let nome = "João";

console.log(nome);

nome = "João Gabriel";

console.log(nome);

const idade = 21;

console.log(idade);

console.log(typeof nome);

console.log(typeof idade);

// Mais sobre variáveis

let a = 10,
  b = 20,
  c = 30;

console.log(a, b, c);

const nomecompleto = "Um da Silva";

const NomeCompleto = "Dois da Silva";

console.log(nomecompleto);

console.log(NomeCompleto);

// Prompt

// const age = prompt("Digite a sua idade");

// console.log(`Você tem ${age} anos.`)

// Alert

// alert("testando");

// let ano = 10

// alert(ano)

// math

console.log(Math.max(5, 10, 15, 1));

console.log(Math.floor(5, 14));

console.log(Math.ceil(5, 14));

// Console

console.log("teste");

console.error("erro");

console.warn("aviso");

// Estrutura de controle

const m = 10;

if (m > 5) {
  console.log(`${m} é maior que 5`);
}

const user = "João";

if (user === "João") {
  console.log("Olá João");
}

// Else

const loggedin = false;

if (loggedin) {
  console.log("Esta altênticado");
} else {
  console.log("Não esta autenticado");
}

const q = 10;
const w = 15;

if (q > 5 && w > 20) {
  console.log("Números mais altos");
} else {
  console.log("Os números não são mais altos");
}

// Else If

if (1 > 2) {
  console.log("Teste");
} else if (2 > 3) {
  console.log("Teste 2");
} else if (5 > 1) {
  console.log("Agora sim");
}

const userName = "João Gabriel";
const userAge = 21;

if (userName === "José") {
  console.log("Bem vindo José");
} else if (userName === "João Gabriel" && userAge === 21) {
  console.log(`Ola João Gabriel, você tem ${userAge} anos de idade`);
} else {
  console.log("Nenhuma condição aceita");
}

// while

let p = 0;

while (p < 5) {
  console.log(`Repetindo ${p}`);
  p = p + 1;
}

// Loop infinito

// let x = 10

// while(x > 5){
//     console.log(`Imprimindo ${x}`)
// }

// do while

let o = 10;

do {
  console.log(`Valor de o: ${o}`);
  o--;
} while (o > 1);

// for

for (let t = 0; t < 10; t++) {
  console.log(`Repetindo algo....${t}`);
}

let r = 10;

for (r; r > 0; r = r - 1) {
  console.log(`o ${r} esta diminindo`);
}

// Break

for (let g = 20; g > 10; g--) {
  console.log(`o Valor de g é: ${g}`);

  if (g === 15) {
    console.log(`O g é igual a ${g}`);
    break;
  }
}

// Continue

for (let s = 0; s < 10; s = s + 1) {
  if (s % 2 === 0) {
    console.log("Número par!");
    continue;
  }
  console.log(s);
}

// Switch

const job = "Advogado";

switch (job) {
  case "Programador":
    console.log("Você é um Programador!");
    break;
  case "Engenheiro":
    console.log("Você é um Engenheiro");
    break;
  case "Advogado":
    console.log("Você é um Advogado");
    break;
  default:
    console.log("Profissão não encontrada");
}
