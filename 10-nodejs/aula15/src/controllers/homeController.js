exports.paginaInicial = (req, res) => {
  // req.session.usuario = { nome: 'Thiago', logado: true };
  // req.flash('info', 'Olá mundo!');
  // console.log(req.flash('error'), req.flash('success'), req.flash('info'));
  res.render('index');
  return;
};

exports.trataPost = (req, res) => {
  res.send(req.body);
  return;
};
