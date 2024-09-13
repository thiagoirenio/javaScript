const readlineSync = require('readline-sync');
let num1 = readlineSync.question('Digite um numero: ');
let num2 = readlineSync.question('Digite um numero: ');


num1 = Number(num1);
num2 = Number(num2);

console.log(`O resultado da sua conta foit: ${num1 + num2}`);
