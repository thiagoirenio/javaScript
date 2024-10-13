exports.paginaInicial = (req, res) => {
  res.send(`
  <form action="/" method="POST">
  Nome: <input type="text" name="nome">
  <button>Envir</button>
  </form>
  `);
}

exports.trataPost = (req, res) => {
  res.send('Ei, sou a sua nova roda de POSTS.');
};
