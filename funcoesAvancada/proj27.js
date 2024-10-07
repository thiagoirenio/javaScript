/* Funções construtora => objetos
 * Função facrica => objetos
 * construtora => Pessoa (new)
 */
function Pessoa(nome, sobrenome) {
  const ID = 12346;

  const metodoInterno = function () {
    
  };

  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = function() {
    console.dir(this.nome + ': sou um método');
  };
}

const p1 = new Pessoa('Thiago', 'Irênio');
const p2 = new Pessoa('Andre', 'Ferreira');

console.log(p1.nome);
