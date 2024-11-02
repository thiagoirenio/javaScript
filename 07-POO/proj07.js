class Pessoa {
  cpnstructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  nomeCompleto() {
    return this.nome + ' ' + this.sobrenome;
  }
}

const p1 = new Pessoa('Luiz', 'Miranda');
console.log(p1.nomeCompleto());
