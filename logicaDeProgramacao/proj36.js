function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    // console.log('Não é');
    throw new TypeError('Esperando instância de Date.');
  }

  if (!data) {
    data = new Date();
  }

  return data.toLocaleTimeString('pt-BR', {
    hour12: false
  });
}

// retornaHora(11);
// retornaHora(new Date()); // não ira mostar nada pois o if so roda se der erro
const hora = retornaHora();
console.log(hora);
