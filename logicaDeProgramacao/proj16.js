//atribuição via desestruturação
let a = 'A'; //B
let b = 'B'; //C
let c = 'C'; //A

const numeros = [b, c, a];
[a, b, c] = numeros;

console.log(a, b, c)
