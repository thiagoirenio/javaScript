/*
 * && (and) -> Retornar o "valor falso", se existir uma expressão falsa nas expressões.
 * Se todas as expressões forem verdadeiras, retorna o valor da última expressão.
 *
 * || (or) -> Retornar o primeiro "valor verdadeiro", se existir uma exprssão verdadeira nas expressões.
 * Se todas as expressões forem falsas, retorna o valor da última expressão.
 */

const [a, b, c] = [true, true, "Thiago"];

const nome = "Thiago";
const sobrenome = "Irênio";

function falaNome() {
  console.log(nome + " " + sobrenome);
}

nome && sobrenome && falaNome();

const corPadrao = "black";
let corUsuario = "red" || corPadrao;

console.log(corUsuario);
