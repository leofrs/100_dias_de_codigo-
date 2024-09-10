// Desafio: Escreva um programa que verifica se um número é par ou ímpar.

function parOuImpar(num) {
  if (num % 2 === 0) {
    console.log(`O número ${num} é par`);
  } else {
    console.log(`O número ${num} é ímpar`);
  }
}

parOuImpar(3);
