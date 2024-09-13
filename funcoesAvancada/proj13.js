function falaFrase(comeco) {
  function falaResto(resto) {
    return comeco + ' ' + resto;
  }
  return falaResto;
}

const olaMundo = falaFrase('Ola');
console.log(olaMundo);
