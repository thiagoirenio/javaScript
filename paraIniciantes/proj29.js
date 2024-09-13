/* Valores primitivos x valores por referência */
/* Primitivos (imutáveis)- string, number, boolean, undefined, null (bigint, symbol) */
let nome = 'Thiago';
nome = 'Irênio';
console.log(nome[0], nome);

let a = 'A';
let b = a; //Cópia
console.log(a, b);

a = 'Outra coisa';
console.log(a, b);

