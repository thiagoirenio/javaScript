/* Função Factory function oi (função fábrica)*/
function criaPessoa(nome, sobrenome, a, p) {
  return {
    nome,
    sobrenome,

    /* Getter */
    get nomeCompleto() {
      return `${nome} ${sobrenome}`
    },

    /* Setter */
    set nomeCompleto(valor) {
      valor = valor.split(' ');
      console.log(valor);
    },
    
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
const p1 = criaPessoa('Thiago', 'Irênio', 1.7, 85);
p1.nomeCompleto = 'Irênio Caldeira';
console.log(p1.nomeCompleto);
