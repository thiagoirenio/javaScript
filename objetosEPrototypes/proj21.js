const produto = { nome: 'Caneca', preco: 1.8 };

for(let [chave, valor] of Object.entries(produto)) {
  console.log(chave, valor);
}

for(let valor of Object.entries(produto)) {
  console.log(valor[0], valor[1]);
}
