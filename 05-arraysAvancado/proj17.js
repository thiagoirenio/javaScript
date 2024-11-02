const pessoas = [
  { nome: 'Thiago', idade: 26 },
  { nome: 'João', idade: 22 },
  { nome: 'Pedro', idade: 12 },
  { nome: 'Alberto', idade: 92 },
  { nome: 'Humberto', idade: 84 },
  { nome: 'Thanos', idade: 99 },
];
const maisVelha = pessoas.reduce(function(acumulador, valor) {
  if(acumulador.idade > valor.idade) return acumulador;
  return valor;
});
console.log(maisVelha);
