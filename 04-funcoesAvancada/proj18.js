/* Closures nas funções
 */
function retornaFuncao() {
  const nome = 'Thiago';
  return function() {
    return nome;
  };
}

const funcao = retornaFuncao();
console.dir(funcao);
