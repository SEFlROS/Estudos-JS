let contador = 0;
const botao = document.getElementById(`botao`);
const spanContador = document.getElementById(`contador`);
botao.addEventListener(`click`, function(){
    contador = contador +1
    spanContador.innerText = contador;
});