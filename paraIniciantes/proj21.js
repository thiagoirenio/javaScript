function soma(x, y) {
  const resultado = x + y;// essa variavel (resultado) e de escopo local e não global
  return resultado;// encerra aqui
}

const resultado = soma(); //vai dar NaN por conta que voce não apresentou valores para a função soma()
console.log(resultado)

// const resultado = soma(2, 2);// essa variavel não tem nada a ver com o que esta na função
// console.log(soma(2, 2));// mostra o resultado


// console.log(soma(2, 2));
// console.log(soma(3, 2));
// console.log(soma(5, 9));
