//For clássico - Geralmente serve com interaveis (array ou strings)
//For in - Retorna o índice ou chave (string, arrays ou strings)
//For of - Retorna o valor em si (iteraveis, arrays ou strings)
const pessoa = {
  nome: 'Thiago',
  sobrenome: 'Irênio'
};

for (let chave in pessoa) {
  console.log(chave);
}

for (let valor of pessoa) { //for of da erro com objeto
  console.log(valor);
}
