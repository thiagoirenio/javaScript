exports.paginaInicial = (req, res, next) => {
  console.log('Respondendo ao cliente.');
  res.render('index');
  next();
};

exports.trataPost = (req, res, next) => {
  res.send('Ei, sou a sua nova roda de POSTS.');
};
