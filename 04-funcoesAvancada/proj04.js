/* Argumentos que sustenta todos os argumentos enviados
 * a tag 'arguments' armazena todos os argumentos enviados em javascript
 */
function funcao({ nome, sobrenome, idade}) { // Atribuição via desestruturação
  console.log(nome, sobrenome, idade);
}
let obj = { nome: 'Thiago', sobrenome: 'Irênio', idade: 26};
funcao(obj);


