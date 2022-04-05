const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController.js');
const contatoController = require('./controllers/contatoController.js');


// ROTAS DA HOME
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

// ROTAS DE CONTATO
route.get('/contato', contatoController.paginaInicial);

module.exports = route;