const nomes = ['Thiago', 'Irênio', 'Caldeira']; //com arrays

// console.log(nomes.length); //.length mostra a quantidade de conteudo que tem na variavel, objeto, string

for (let i = 0; i < nomes.length; i++){ //for comum
  console.log(nomes[i]);
}

console.log(`\n ### \n`);

for (let i in nomes) { //for com in retorna o indice do array
  console.log(nomes[i]);
}

console.log(`\n ### \n`);

for (let valor of nomes) { //for com of retorna só o valor, com objetos não e interavel
  console.log(valor);
}

console.log(`\n ### \n`);

nomes.forEach(function(valor, indice, array) {
  console.log(valor, indice, array);
});
