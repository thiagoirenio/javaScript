const nome = 'Thiago';
const sobrenome = 'Irênio';

const falaNome = () => {
  console.log(nome, sobrenome);
};

module.exports.nome = nome;
module.exports.sobrenome = sobrenome;
module.exports.falaNome = falaNome;

console.log(module.exports);
