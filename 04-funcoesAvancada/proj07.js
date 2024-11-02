// O reste operaitor '...alguma coisa' mostra o resto e sempre deve ser o ultimo paramentro da sua função
const conta = function conta(operador, acumulador, ...numeros) {
  for(let numero of numeros) {
    if (operador === '+') acumulador += numero;
    if (operador === '-') acumulador -= numero;
    if (operador === '/') acumulador /= numero;
    if (operador === '*') acumulador *= numero;
  }

  console.log(acumulador);
};
conta('+', 1, 20, 30, 40, 50);

