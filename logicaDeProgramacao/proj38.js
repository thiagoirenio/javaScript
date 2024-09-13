function mostraHora() {
  let data = new Date();

  return data.toLocaleTimeString('Pt-BR', {
    hour12: false
  });
}

console.log(mostraHora());

function funcaDoInterval() {
  console.log(mostraHora());
}

setInterval (funcaDoInterval, 1000);
