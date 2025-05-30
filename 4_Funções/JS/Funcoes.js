// Criando uma função
function minhaFuncao() {
  console.log("Testando");
}

minhaFuncao();

const minhaFuncaoemVariavel = function () {
  console.log("Função em Variável");
};

minhaFuncaoemVariavel();

function funcaocomParametro(txt) {
  console.log(`Imprimindo ${txt}`);
}

funcaocomParametro("Imprimindo alguma coisa?");

funcaocomParametro("Outra coisa sendo impressa");

// return

const a = 10;
const b = 20;
const c = 30;
const d = 40;

function soma(n1, n2) {
  return n1 + n2;
}

const resultado = soma(a, b);

console.log(resultado);

console.log(soma(c, d));

// Escopo da função

let y = 10;
function testandoEscopo() {
  let y = 20;
  console.log(`y dentro da função é ${y}`);
}

testandoEscopo();

console.log(`y fora da função é ${y}`);

testandoEscopo();

// Escopo alinhado

let m = 10;

function escopoAlinhado() {
  let m = 20;
  if (true) {
    let m = 30;

    if (true) {
      let m = 40;
      console.log(m);
    }
    console.log(m);
  }

  console.log(m);
}

escopoAlinhado();

console.log(m);

// arrow function

const testeArrow = () => {
  console.log("Esta é uma arrow function");
};

testeArrow();

const parouImpar = (n) => {
  if (n % 2 === 0) {
    console.log("Par");
    return;
  }
  console.log("Impar");
};

parouImpar(5);
parouImpar(10);

// Mais sobre arrow functions

const raizQuadrada = (x) => {
    return x * x;
}

console.log(raizQuadrada(4))

const raizQuadrada2 = (x) => x*x;

console.log(raizQuadrada2(5))

console.log(raizQuadrada2(12))

const helloword = () => console.log("Hello world");
helloword();