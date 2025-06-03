let contador = 0;
const botao = document.getElementById(`botao`);
const vezes = document.getElementById(`vezes`);
const text = document.getElementById(`text`);
botao.addEventListener(`click`, function () {
  contador = contador + 1;
  text.textContent = `Você clicou ${contador} vezes`;
});
