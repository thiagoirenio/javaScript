const verdadeira = true;

// let tem escopo de bloco { ... bloco} dentro de chaves
// var só tem escopo de função

let nome = 'Thiago'; //criando
var nome2 = 'Luiz';


if (verdadeira) {
  let nome = 'Caldeira'; //criando
  // console.log(nome, nome2);

  var nome2 = 'Irênio'; //redeclarada
  console.log(nome, nome2);

  if (verdadeira) {
    let nome = 'Outra coisita';
  }
}
