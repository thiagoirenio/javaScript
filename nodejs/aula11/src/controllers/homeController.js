exports.paginaInicial = (req, res) => {
  res.render('index');
};

exports.trataPost = (req, res) => {
  res.send('Ei, sou a sua nova roda de POSTS.');
};
