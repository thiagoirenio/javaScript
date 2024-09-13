let umaString = "Um \"texto\"";

console.log(umaString[5]);// mostra uma string na variavel
console.log(umaString.indexOf('m', 3));// ache a palavra m começando do indice 3
console.log(umaString.lastIndexOf('m', 3));// ache a palavra m começando do indice 3 de tras para a frente

console.log(umaString.match(/[a-z]/));// expreção regulares, mostra todas as letras minusculas na string
console.log(umaString.search(/x/));// expreção regulares, mostra o local na memoria que está o caracter/ quando colocado o g ele replica para toda a string
console.log(umaString.replace('Um', 'Outra'));// subistitui a palavra Um por Outra
console.log(umaString.length);// mostra o indice da string
console.log(umaString.slice(2,5));



/* veja no w3scholl sobre strings */

