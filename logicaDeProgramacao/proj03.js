/* Valores avaliados em falso no javascript
 * Falsy = falso
 * 0 = zero
 * '' "" `` = uma string vazia
 * null / undefined = nulo ou não definido
 * NaN = não é um numero
 */ 
function falaOi() {
  return 'Oi';
}

let vaiExecutar = 'Thiago';

console.log(vaiExecutar && falaOi());
