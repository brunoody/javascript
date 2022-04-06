const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController.js');
const contatoController = require('./src/controllers/contatoController.js');


// ROTAS DA HOME
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

// ROTAS DE CONTATO
route.get('/contato', contatoController.paginaInicial);

module.exports = route;