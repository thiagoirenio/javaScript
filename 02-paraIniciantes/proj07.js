// Const e Let

let imc; // peso / (altura * altura)
let anoNascimento;


const readlineSync = require('readline-sync');

const nome = readlineSync.question('Qual é o seu nome? ');
const sobrenome = readlineSync.question('Qual é o seu sobrenome? ');
const idade = readlineSync.question('Qual é a sua idade? ');
const peso = readlineSync.question('Qual é o seu peso? ');
const altura = readlineSync.question('Qual é a sua altura? ');



imc = peso / (altura * altura);

console.log(`Olá, ${nome} ${sobrenome} seu imc é ${imc}!`);

