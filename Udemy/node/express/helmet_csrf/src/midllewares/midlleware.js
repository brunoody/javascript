
// aqui vamos exportar um midlleware global. ver no server.js    
exports.meuMidlleware = (req, res, next) => {    

    //objeto locals:
    res.locals.umaVariavelLocal = 'este é o valor da variável local';
    
    console.log('passei no midlleware global');
    //console.log(req.body);
    next(); //midllewares SEMPRE precisam de next
}

exports.checkCsrfError = (err, req, res, next) => {
    console.log('entrou aqui!', err.code);
    if (err && ('EBADCSRFTOKEN' === err.code)) { //Código de erro gerado para as minhas páginas sem token
        console.log('entrou aqui!');

        return res.render('404.ejs')
    }
    next();
}

exports.csrfMiddleware = (req, res, next) => {

}
