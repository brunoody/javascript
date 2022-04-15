
// aqui vamos exportar um midlleware global. ver no server.js    
exports.meuMidlleware = (req, res, next) => {    

    console.log('meuMidlleware - Inicio');
    //objeto locals:
    res.locals.umaVariavelLocal = 'este é o valor da variável local';
    
    console.log('passei no midlleware global');
    //console.log(req.body);
    console.log('meuMidlleware - fim');
    next(); //midllewares SEMPRE precisam de next
}

exports.checkCsrfError = (err, req, res, next) => {
    console.log('checkCsrfError - inicio');
    if (err && ('EBADCSRFTOKEN' === err.code)) { //Código de erro gerado para as minhas páginas sem token
        console.log('entrou aqui!');

       res.render('404.ejs')
    }
    console.log('checkCsrfError - fim');
    next();
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.meuCsrfToken = req.csrfToken();// este caa gera o tokem de segurança
    // o meuCsrfToken vai ser usado no insdex.ejs! na verdade em todos os formulários da página tem que fazer o mesmo procedimento, ver index.ejs 
    next();

}
