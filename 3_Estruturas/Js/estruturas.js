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

console.error("erro")

console.warn("aviso")

// Estrutura de controle

const m = 10

if(m > 5) {
    console.log(`${m} é maior que 5`)

}

const user = "João"

if(user === "João") {
    console.log("Olá João")
}

// Else

const loggedin = false

if(loggedin){
    console.log("Esta altênticado");
}else{
        console.log("Não esta autenticado")
    }


    const q = 10
    const w = 15

    if(q > 5 && w > 20){
        console.log("Números mais altos");
    }else{
        console.log("Os números não são mais altos")
    }
    