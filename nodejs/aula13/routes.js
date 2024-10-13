const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

function meuMiddleware(req, res, next) {
  req.session = { nome: 'Thiago', sorenome: 'Irênio' };
  console.log();
  console.log('Passei no seu middleware.');
  console.log();
  next();
}

/* Rotas da home */
route.get('/', meuMiddleware, homeController.paginaInicial, function (req, res, next) {
  console.log();
  console.log('Ainda estou aqui...');
  console.log(`Olha o que tem na req.session.nome ${req.session.nome}`);
});
route.post('/', homeController.trataPost);

/* Rotas de contato*/
route.get('/contato', contatoController.paginaInicial);

module.exports = route;
