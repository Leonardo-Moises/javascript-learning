// Tópico 01 — Jogo do número secreto
// Complementos à aula: conversão numérica e validação da entrada.
alert('Boas-vindas ao jogo do número secreto!');

let numeroSecreto = 29;
let entrada = prompt('Escolha um número inteiro entre 1 e 30:');

if (entrada === null) {
  alert('Jogo cancelado.');
} else {
  let chute = Number(entrada);
  console.log('Chute informado:', entrada);

  if (entrada.trim() === '' || !Number.isInteger(chute) || chute < 1 || chute > 30) {
    alert('Digite um número inteiro de 1 a 30.');
  } else if (chute === numeroSecreto) {
    alert('Parabéns! Você acertou o número secreto!');
  } else {
    alert('Não foi dessa vez!');
  }
}
