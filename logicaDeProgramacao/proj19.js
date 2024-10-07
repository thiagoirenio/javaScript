const pessoa = {
  nome: 'Thiago',
  sobrenome: 'Irênio',
  idade: 30,
  endereco: {
    rua: 'Rua são matheus',
    numero: 130
  }
};

/home/thiago/javaScript/logicaDeProgramacao/proj19.js
//atribuição via desestruturação
// const { nome = 'Não existe', sobrenome } = pessoa;
// const { nome: teste = '', sobrenome } = pessoa;
const { endereco: { rua, numero }, endereco } = pessoa;
console.log(rua, numero,'\n',endereco);
