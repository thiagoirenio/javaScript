const produto = { nome: 'Caneca', preco: 1.8 };
Object.freezer(produto);
produto.nome = 'Outro nome';
const caneca = {nome: produto.nome, preco: produto.preco };

console.log(Object.keys(produto));
