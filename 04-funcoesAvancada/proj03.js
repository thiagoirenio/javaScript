/* Argumentos que sustenta todos os argumentos enviados
 * a tag 'arguments' armazena todos os argumentos enviados em javascript
 */
function funcao(a, b =2, c = 4) {
  console.log(a + b + c);
}
funcao(2, undefined, 20); // A unica maneira de fazer b assumir o valor = 2 fora do escopo


