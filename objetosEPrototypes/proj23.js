/* Construtora -> molde (classe) */
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.nomeCompleto = () => 'ORIGINAL: ' + this.nome + ' ' + this.sobrenome;
}

// Pessoa.prototype === pessa1.__proto__

Pessoa.prototype.nomeCompleto = function() {
  return this.nome + ' ' + this.sobrenome;
};

/* INSTÂNCIA */
const pessoa1 = new Pessoa('Thiago', 'O.'); // <- Pessoa = Função Construtora
const pessoa2 = new Pessoa('Irênio', 'A.'); // <- Pessoa = Função Construtora
const data = new Date();

console.dir(pessoa1);
console.dir(data);
