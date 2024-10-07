/* Valores avaliados em falso no javascript
 * Falsy = falso
 * 0 = zero
 * '' "" `` = uma string vazia
 * null / undefined = nulo ou não definido
 * NaN = não é um numero
 */ 
console.log(0 || false || 'Thiago Irênio' || true);

const corUsuario = 'vermelho';
const corPadrao = corUsuario || 'preto';

console.log(corUsuario);


