/* Função Factory function oi (função fábrica)*/
function criaPessoa(nome, sobrenome, a, p) {
  return {
    nome,
    sobrenome,
    fala(assunto) {
      return `${this.nome} está ${assunto}.`;
    },
    altura: a,
    peso: p,
    imc() {
      const indice = this.peso / (this.altura ** 2);
      return indice.toFixed(2);
    }
  };
}
/* O comando 'this' vai representar quem chamar o objeto */
const p1 = criaPessoa('Thiago', 'Irênio', 1.7, 85);
console.log(p1.imc());
const p2 = criaPessoa('João', 'Marques', 1.75, 75);
console.dir(p2.fala('falando sobre JS'));
console.dir(p2.imc());
