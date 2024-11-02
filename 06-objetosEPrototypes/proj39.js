const pessoas = [
  { id: 3, nome: 'Thiago'},
  { id: 2, nome: 'João'},
  { id: 1, nome: 'Alberto'},
];

const novasPessoas = {};
for(const pessoa of pessoas) {
  const {id} = pessoa;
  novasPessoas[id] = { ...pessoa };
}

console.log(novasPessoas);
