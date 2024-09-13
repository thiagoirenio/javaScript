/* Valores avaliados em falso no javascript
 * Falsy = falso
 * 0 = zero
 * '' "" `` = uma string vazia
 * null / undefined = nulo ou não definido
 * NaN = não é um numero
 */ 
const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(a || b || c || d || e);

