class Pessoa {
  cpnstructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  get nomeCompleto() {
    return this.nome + ' ' + this.sobrenome;
  }

  set nomeCompleto(valor) {
    valor = valor.split(' ');
    this.nome = valor.shift();
    this.sobrenome = valor.join(' ');
  }
}

const p1 = new Pessoa('Luiz', 'Miranda');
p1.nomeCompleto = 'Thiago Irênio Caldeira';
console.log(p1.nome, p1.sobrenome);
// console.log(p1.nomeCompleto);
