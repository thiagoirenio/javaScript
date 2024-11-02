function rand(min = 0, max = 3) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg,tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(typeof msg !== 'string') {
        reject('CAI NO ERRO');
        return;
      }
      resolve(msg.toUpperCase() + ' - Passei na promise');
      return;
    }, tempo);
  })
}

esperaAi('Frase 1', rand())
  .then(valor => {
    console.log(valor);
    return esperaAi('Frase 2', rand());
  })
  .then(fase => {
    console.log(fase);
    return esperaAi('Frase 3', rand());
  })
  .then(fase => {
    console.log(fase);
  })
  .catch(e => console.log(e));
