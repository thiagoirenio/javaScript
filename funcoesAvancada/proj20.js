function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
    fala(assunto) {
      return `${this.nome} está ${assunto}.`;
    }
  };
}

const p1 = criaPessoa('Thiago', 'Irênio');
console.dir(p1.fala('falando sobre JS'));
console.dir(p1.nome);
