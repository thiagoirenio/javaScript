/* shift - add no começo
 * unshift - remove do começo
 * push - add no final
 * pop - remvove do final
 * slice - add ou remove um indice de um array
 */
const nomes = ['Thiago', 'Irênio', 'Caldeira', 'falaOi', 'falaComigo'];
const removidos = nomes.splice(3, 1);
console.log(nomes, removidos);
