const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController.js');
const loginController = require('./src/controllers/loginController.js');

// as nomenclaturas de páginas iniciais dos controles vão se chamar index para cada controler

// Rotas da home
route.get('/', homeController.index);

// Rotas de login
route.get('/login/index', loginController.index);// o index não precisaria digitar pois ele pega sozinho, assim como acima tb poderia colocar /index

module.exports = route;