/* Factory functions / Constructor functions / Classes */
function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
    get comeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    }
  };
}

const p1 = criaPessoa('Thiago', 'Irênio');
console.log(p1.nomeCompleto());
