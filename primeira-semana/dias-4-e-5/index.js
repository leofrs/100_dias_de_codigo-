// Desafio: Crie uma calculadora simples que realiza operações de adição, subtração, divisão e multiplicação.

function calculadora(operacao, num1, num2) {
  let somar = num1 + num2;
  let diminuir = num1 - num2;
  let dividir = num1 / num2;
  let multiplicar = num1 * num2;

  if (operacao === "somar") {
    console.log(`A soma dos números ${num1} + ${num2} foi: ${somar}`);
  } else if (operacao === "diminuir") {
    console.log(`A subtração dos números ${num1} - ${num2} foi: ${diminuir}`);
  } else if (operacao === "dividir") {
    console.log(`A divisão dos números ${num1} / ${num2} foi: ${dividir}`);
  } else if (operacao === "multiplicar") {
    console.log(
      `A multiplicação dos números ${num1} * ${num2} foi: ${multiplicar}`
    );
  }
}
// Passe os tres valores para calculadora, sendo eles:
// O tipo de operação; O primeiro número; O segundo número.
calculadora("diminuir", 2, 1);
