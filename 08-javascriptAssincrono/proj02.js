function rand(min, max) {
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

/* Promise.all Promise.race Promise.resolve Promise.reject */
const promises = [
  esperaAi(1000, rand(1, 5)),
  esperaAi('Promise 1', rand(1, 5)),
  esperaAi('Promise 2', rand(1, 5)),
  esperaAi('Promise 3', rand(1, 5)),
];

Promise.race(promises)
  .then(function(valor) {
    console.log(valor);
  })
  .catch(function(erro) {
    console.log(erro);
  });
