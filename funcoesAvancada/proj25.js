/* Função Factory function oi (função fábrica)*/
/* Construction function (função construtora)*/
function criaPessoa(nome, sobrenome, a, p) {
  return {
    nome,
    sobrenome,

    /* Getter */
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`
    },

    /* Setter */
    set nomeCompleto(valor) {
      valor = valor.split(' ');
      this.nome = valor.shift();
      this.sobrenome = valor.join(' ');
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
const p2 = criaPessoa('Thiago', 'Irênio', 1.7, 15);
const p3 = criaPessoa('Thiago', 'Irênio', 1.7, 25);

console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);
