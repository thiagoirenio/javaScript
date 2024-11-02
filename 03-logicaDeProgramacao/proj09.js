// ? :
// operação ternária
// (condicao) ? 'Valor para verdadeiro' : 'Valor para falso';
const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

const corUsuario = 'Pink';
const corPadrao = corUsuario || 'Preta'; //setando um valor padrão para esta variavel

console.log(nivelUsuario, corPadrao);

// if (pontuacaoUsuario >= 1000) {
//   console.log('Usuário VIP');
// } else {
//   console.log('Usuário normal');
// }
