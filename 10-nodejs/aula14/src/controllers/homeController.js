// const HomeModel = require('../models/HomeModel');

// HomeModel.create({
//   titulo: 'Outra coisa qualquer',
//   descricao: 'Outra descrição'
// })
//   .then(dados => console.log(dados))
//   .catch(e => console.log(e));

exports.paginaInicial = (req, res) => {
  console.log('Respondendo ao cliente.');
  res.render('index');
  return;
};

exports.trataPost = (req, res) => {
  res.send(req.body);
  return;
};
