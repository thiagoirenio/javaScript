const produto = { nome: 'Caneca', preco: 1.8 };
const outraCoisa = {
  ...produto,
  material: 'porcelana'
};

outraCoisa.nome = 'Thiago Irênio';
outraCoisa.preco = 2.5;
console.log(produto);
console.log(outraCoisa);
