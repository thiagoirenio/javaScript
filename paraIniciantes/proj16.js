// A tecla gcc comenta uma linha no lazyvim
// O padrão de precisão dos numeros no javascript e (IEEE 754-2008)
// A tecla <espace s k> no lazyvim mostra a lista de keymaps comandos

let num1 = 0.7;// number
let num2 = 0.1;// number

num1 += num2;// num1 = num1 + num2

console.log(num1);
console(Number.isInteger(num1));

// Altera o valor de num1 temporariamente
// console.log(num1.toString() + num2);
// console.log(typeof num1);

// Altera o valor de num1 de um numper para uma string
// num1 = num1. toString();
// console.log(typeof num1);
// console.log(num1.toString(2))
// console.log(num1.toFixed(2))
// console.log(number.isInteger(num1));

// console.log(num1.toFixed(2));

let temp = num1 * 'Ola';// vai dar NaN por conta que estou multiplicando uma string por um numero
// console.log(Number.isNaN(temp));// isso ira me retornar verdadeito "true" sempre que a conta for invalida

