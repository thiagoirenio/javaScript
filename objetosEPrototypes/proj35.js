function criaPessoa(nome, sobrenome) {
  const pessoaPrototype = {
    falar(){
      console.log(`${this.nome} está falando.`)
    },

    comer(){
      console.log(`${this.nome} está falando.`)
    },

    beber(){
      console.log(`${this.nome} está falando.`)
    },
  };

  return Object.create(pessoaPrototype, {
    nome: { value: nome},
    sobrenome: { value: sobrenome}
  });
}

const p1 = criaPessoa('Luiz', 'Otávio');
console.log(p1);
