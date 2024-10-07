/* Função Factory function oi (função fábrica)*/
function criaPessoa(nome, sobrenome, a, p) {
  return {
    nome,
    sobrenome,

    /* Getter */
    get nomeCompleto() {
      return `${nome} ${sobrenome}`
    },

    set nomeCompleto() {
      console.log(valor);
    }
    fala(assunto) {
      return `${this.nome} está ${assunto}.`;
    },
    altura: a,
    peso: p,

    /* Getter */
    get imc() {
      const indice = this.peso / (this.altura ** 2);
      return indice.toFixed(2);
    }
  };
}
/* O comando 'this' vai representar quem chamar o objeto */
const p1 = criaPessoa('Thiago', 'Irênio', 1.7, 85);
p1.nomeCompleto = 'Irênio Caldeira';
console.log(p1.nomeCompleto);
