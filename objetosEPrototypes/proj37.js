const falar = {
  falar() {
    console.log(`${this.nome} está falando.`);
  },
};

const comer = {
  falar() {
    console.log(`${this.nome} está falando.`);
  },
};

const beber = {
  falar() {
    console.log(`${this.nome} está falando.`);
  },
};

const pessoaPrototype = Object.assign({}, falar, comer, beber);


function criaPessoa(nome, sobrenome) {
  return Object.create(pessoaPrototype, {
    nome: { value: nome},
    sobrenome: { value: sobrenome}
  });
}

const p1 = criaPessoa('Luiz', 'Otávio');
console.log(p1);
