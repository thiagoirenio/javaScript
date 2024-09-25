/* defineProperty - defineProperties */
function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  Object.defineProperty(this, 'estoque', {
    enumerable: true, // mostra a chave
    value: estoque,
    writable: false, //pode alterar
    configurable: true // configurável
  });

  Object.defineProperties(this, {
    nome: {
      enumerable: true, // mostra a chave
      value: nome,
      writable: false, //pode alterar
      configurable: true // configurável
    },
    preco: {
      enumerable: true, // mostra a chave
      value: preco,
      writable: false, //pode alterar
      configurable: true // configurável
    },
  });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(Object.keys(p1));

for(let chave in p1) {
  console.log(chave);
}
