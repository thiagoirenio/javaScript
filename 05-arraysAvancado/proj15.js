const pessoas {
  { nome: 'Luiz', idade: 73 }
  { nome: 'Maria', idade: 92 }
  { nome: 'Eduarda', idade: 85 }
  { nome: 'Leticia', idade: 24 }
  { nome: 'Miranda', idade: 12 }
  { nome: 'Julio', idade: 22 }
};
const nomes = pessoas.map(obj => obj.nome);
const idades = pessoas.map(obj => ({ idade: obj.idade }));
console.log(idades);

