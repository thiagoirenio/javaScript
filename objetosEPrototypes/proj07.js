/* Factory functions / Constructor functions / Classes */
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  // return this; // {nome: 'thiago', sobrenome: 'falaComigo'}
}

/* {} <- this -> this */
const p1 = new Pessoa('Thiago', 'Irênio');
const p1 = new Pessoa('João', 'Antonio');
console.log(p1);

const p2 = {};
p2.nome = 'Thiago';
