/* defineProperty - defineProperties */
function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  Object.defineProperty(this, 'estoque', {
    enumerable: true, // mostra a chave
    value: function() {
      return estoque;
    }, // valor
    writable: false, //pode alterar
    configurable: true // configurável
  });

}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 50000;
console.log(p1);