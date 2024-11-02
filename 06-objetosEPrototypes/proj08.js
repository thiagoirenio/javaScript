/* Factory functions / Constructor functions / Classes */
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  // return this; // {nome: 'thiago', sobrenome: 'falaComigo'}
}

/* {} <- this -> this */

// p1 = (ENDERECOMEMORIA) -> 'valor'
// p1.ENDERECOMEMORIA = {NOME: 'OUTRA COISA'}
// p1 = (NOVOENDERECOMEMORIA)
const p1 = new Pessoa('Thiago', 'Irênio');
Object.freeze(p1);
p1.nome = 'Outra coisa';
const p2 = new Pessoa('João', 'Antonio');

console.log(p1);
console.log(p2);


function name(params) {
  

}
