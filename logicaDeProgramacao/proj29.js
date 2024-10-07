const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 8];

//continue continua para o próximo iteração
//break sai do laço


let i = 0;
while (i < numeros.length) {
  let numero = numeros[i];

  if (numero === 2) {
    console.log('Pulei o número 2');
    i++;
    continue; //continue, continua executando o laço uma ultima vez
  }

  console.log(numero);

  if (numero === 7) {
    console.log(`7 encontrado, saindo...`)
    i++;
    break; //break, para o laço aqui 
  }

  i++;
}

do {
  let numero = numeros[i];

  if (numero === 2) {
    console.log('Pulei o número 2');
    i++;
    continue; //continue, continua executando o laço uma ultima vez
  }

  console.log(numero);

  if (numero === 7) {
    console.log(`7 encontrado, saindo...`)
    i++;
    break; //break, para o laço aqui 
  }

  i++;
} while (i < numeros.length);
