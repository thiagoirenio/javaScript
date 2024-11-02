function criaPessoa(nome, sobrenome) {
    return {nome: nome, sobrenome: sobrenome}
}

const p1 = criaPessoa('Thiago', 'Irênio');
const p2 = {
  nome: 'arthur',
  sobrenome: 'vieira'
};

console.log(typeof p1);
console.log(typeof p2);
