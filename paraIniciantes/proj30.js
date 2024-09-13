/* Referência (mutável) - array, object, function */
let a = [1, 2, 3];
// let b = a;
let b = [...a];
let c = b;

console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

a.push('Thiago');
console.log(c);

