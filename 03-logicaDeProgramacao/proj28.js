const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 8];

for (let numero of numeros) {

  if (numero === 2) {
    console.log('Pulei o número 2');
    continue; //continue, continua executando o laço uma ultima vez
  }

  if (numero ===7) {
    console.log(`7 encontrado, saindo...`)
    break; //break, para o laço aqui 
  }

  console.log(numero);
}
