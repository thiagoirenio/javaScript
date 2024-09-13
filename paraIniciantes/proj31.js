/* Dados não primitivos são passados por referencia */
/* Valores primitivos são copiados
 * Valores por referencia são passados por referencia
 * */
const a = {
  nome: 'Thiago',
  sobrenome: 'Irênio'
};
const b = {...a}; //quando queremos copiar de verdade e não dizer que esta apontando para aquele loca da memoria(isplad)
// const b = a; //quando falamos quê b e igual a a estamos dizendo quê b aponta para o mesmo local da memoria quê a

a.nom = 'João';
console.log(b);

