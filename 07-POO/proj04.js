class Carro {
  constructor(nome) {
    this.nome = nome;
    this.velocidade = velocidade;
  }

  acelerar() {
    if(this.velocidade >= 100) return;
    this.velocidade++;
  }

  freiar() {
    if(this.velocidade <= 0) return;
    this.velocidade--;
  }
}

const c1 = new Carro('Fusca');

for (let i = 0; i <= 200; i++) {
  c1.acelerar();
}

c1.acelerar();
console.log(c1);
