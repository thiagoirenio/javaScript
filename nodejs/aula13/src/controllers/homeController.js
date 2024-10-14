exports.paginaInicial = (req, res) => {
  console.log('Respondendo ao cliente.');
  res.render('index');
  return;
};

exports.trataPost = (req, rest) => {
  res.send('Ei, sou a sua nova roda de POSTS.');
};
