/* Escreva uma função quê se chama ePaisagem que recebe dois argumentos,
 * largura e altura de uma imagem (number). Retornado true se a imagem estiver no modo paisagem.
 */

// function ePaisagem(largura, altura) {
//   return largura > altura;
// }

const ePaisagem = (largura, altura) => largura > altura; //usando ero function

console.log(ePaisagem(1920, 1080));
console.log(ePaisagem(1080, 1920));
