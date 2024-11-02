const produto = { nome: 'Caneca', preco: 1.8 };
Object.defineProperty(produto, 'nome', {
  writable: false,
  configurable: false,
  value: 'Qualquer outra coisa'
});
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))
console.log(produto)
