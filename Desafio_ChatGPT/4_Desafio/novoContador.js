let contador = 0;
const botao = document.getElementById(`botao`);
const vezes = document.getElementById(`vezes`);
const text = document.getElementById(`text`);
const reset = document.getElementById(`reset`);
botao.addEventListener(`click`, function () {
  contador = contador + 1;
  text.textContent = `Você clicou ${contador} vezes`;
});

reset.addEventListener(`click`, function(){
  contador = 0
  text.textContent = `Quantas vezes você clicou`
})