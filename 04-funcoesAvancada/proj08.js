/* O reste operaitor '...alguma coisa' mostra o resto e sempre deve ser o ultimo paramentro da sua função
*/
const conta = function conta(operador, acumulador, ...numeros) {
  console.log(arguments); // Mesmo com rest operaitor nos teremos o arguments aqui
};
conta('+', 1, 20, 30, 40, 50);

