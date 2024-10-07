// // Objeto Date, data 0, 01/01/1970 timestamp unix ou época unix
// const tresHoras = 60 * 60 * 3 * 1000; //adicionando 3h
// const umDia = 60 * 60 * 24 * 1000; //um dia em milesimos de segundos
// const data = new Date(0 + tresHoras); //função construtora tem sua primeira letra maiuscula
// const data = new Date(2019, 3, 20, 15, 14, 27, 60); //pelomenos dois parametros (a, m, d, h, M, s, ms)
const data = new Date('2019-04-20 20:20:59.100');
console.log('Dia', data.getDate()); //getDate obtem o numero do dia
console.log('Mês', data.getMonth() + 1); //Mês começa do zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia da semana', data.getDay()); //0 - Domindo, 6 - Sábado
console.log(data.toString());
console.log(Date.now());

