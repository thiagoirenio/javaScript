function criaPessoa(nome, sobrenome, idade) {
  return {
    nome: nome,
    sobrenome: sobrenome,
    idade: idade
  };
}

// function criaPessoa(nome, sobrenome, idade) {
//   return { nome, sobrenome, idade }; //jeito simplificado
// }

const pessoa1 = criaPessoa('Luiz', 'Otávio', 65);
const pessoa2 = criaPessoa('Maria', 'Fernanda', 25);
const pessoa3 = criaPessoa('Thiago', 'Irênio', 26);
const pessoa4 = criaPessoa('João', 'Pereira', 15);
const pessoa5 = criaPessoa('Armando', 'Oliveira', 45);
console.log(`${pessoa1.nome} \n${pessoa2.nome} \n${pessoa3.nome}`);
