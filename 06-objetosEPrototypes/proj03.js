/* new Array() - novo array */
const pessoa1 = new Object();
pessoa1.nome = 'Thiago';
pessoa1.sobrenome = 'Irênio';
pessoa1.falarNome = function() {
  console.log(`${this.nome} está falando seu nome.`)
};

pessoa1.falarNome();
