const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController.js');
const contatoController = require('./src/controllers/contatoController.js');

function meuMiddleware(req, res, next) {
    console.log('passei no primeiro middlewares');
    // aqui preciso chamar o next pois senão não executa mais nada, o next representa a execução do homeController.paginaInicial no get abaixo! posso usar o req e res à vontade aqui tb se quiser. Posso colocar outro next no método homeController.paginaInicial (dentro dele) e executar algo depois da requisição, posso tb escrever uma função anonima ou declarada depois do homeController.paginaInicial aqui mesmo:    
    next(); 

    // tudo que eu fizer no req ou res aqui no primeiro midlleware se propaga até o último ex.:
    //req.session = {nome: 'marcelo', sobrenome: 'toller'} // isso aqui poderia ser acessado e qualquer outra rotina enadeada daqui para frente
}


// ROTAS DA HOME
route.get('/', meuMiddleware, homeController.paginaInicial, function(req, res, next){
    // para exeutar essa função anônima preciso chamar o next lá no homeController.paginaInicial
    console.log('passei no segundo middlewares');
    //next();
    // poderia colocatr um next caso tivesse um para executar
});
route.post('/', homeController.trataPost);

// ROTAS DE CONTATO
route.get('/contato', contatoController.paginaInicial);

module.exports = route;