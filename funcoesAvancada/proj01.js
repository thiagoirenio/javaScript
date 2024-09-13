/* Argumentos que sustenta todos os argumentos enviados
 * a tag 'arguments' armazena todos os argumentos enviados em javascript
 */

function funcao(a, b, c) {
  let total = 0;
  for (let argumento of arguments) {
    total += argumento;
  }

  console.log(total, a, b, c);
}
funcao(1, 2, 3, 4, 5, 6, 7);
