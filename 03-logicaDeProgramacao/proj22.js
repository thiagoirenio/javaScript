const pessoa = {
  nome: 'Thiago',
  sobrenome: 'Irênio',
  idade: 30
};

for (let chave in pessoa) { //mostra o conteudo do objeto
  console.log(chave, pessoa[chave]);
  }

console.log(`\n` +pessoa.nome); //estou acessando o atributo *nome que esta no objeto *pessoa
console.log(pessoa['nome']); //estou acessando o atributo *nome que esta no objeto *pessoa

