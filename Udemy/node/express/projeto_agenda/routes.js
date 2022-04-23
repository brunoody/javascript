const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController.js');
const loginController = require('./src/controllers/loginController.js');
const contatoController = require('./src/controllers/contatoController.js');

// as nomenclaturas de páginas iniciais dos controles vão se chamar index para cada controler

// Rotas da home
route.get('/', homeController.index);

// Rotas de login
route.get('/login/index', loginController.index);// o index não precisaria digitar pois ele pega sozinho, assim como acima tb poderia colocar /index
route.post('/login/register', loginController.register); // cadastrar novos usuarios
route.post('/login/login', loginController.login); // logar usuário já cadastrados
route.get('/login/logout', loginController.logout); // para o usuário se deslogar

// Rotas de contatos da agenda
route.get('/contato/index', contatoController.index);
route.post('/contato/register', contatoController.register);
route.get('/contato/index/:id', contatoController.indexCadastrado);
route.post('/contato/edit/:id', contatoController.indexEdit);
route.get('/contato/delete/:id', contatoController.indexDelete);


module.exports = route;