const pessoa1 = {
  nome: 'Thiago',
  sobrenome: 'Irênio',
  idade: 25,

  fala() {
    console.log(`\n${this.nome} ${this.sobrenome} está falando oi...`);
    console.log(`A minha idade atual é ${this.idade}.\n`);
  },

  incrementaIdade() {
    // ++this.idade;
    this.idade++;
  }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
