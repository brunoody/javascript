const { stringifyRequest } = require("css-loader/dist/utils");

// aqui vamos exportar um midlleware global. ver no server.js    
exports.meuMidlleware = (req, res, next) => {        
    //objeto locals:
    //res.locals.umaVariavelLocal = 'este é o valor da variável local';
    res.locals.errors = req.flash('errors'); // Captura as mensagens de erro que registrei nmo loginController    
    res.locals.sucess = req.flash('sucess');

    res.locals.user = req.session.user; // para por exemplo, mostrar o nome do usuário na página principal emquanto ele navega
    
    next(); //midllewares SEMPRE precisam de next
}

exports.checkCsrfError = (err, req, res, next) => {
    //console.log('checkCsrfError - inicio');    
    if (err) { // qualquer erro mostra a página 404     
       console.log(err);       
       res.render('404.ejs')
    }    
    next();
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.meuCsrfToken = req.csrfToken();// este caa gera o tokem de segurança
    // o meuCsrfToken vai ser usado no insdex.ejs! na verdade em todos os formulários da página tem que fazer o mesmo procedimento, ver index.ejs 
    next();
}

exports.verificaUsuarioLogado = (req, res, next) => {    
    // aqui verifico se a o usuário esta tentando acessar algo que não seja o login e não esteja logado
    // esse middleware é global, entao se eu não verificar se é /login ele vcai num loop
    if ((req.originalUrl.indexOf('/login') === -1) && (!req.session.user)){        
        res.redirect('/login');
        return;
    }
    next();
}

