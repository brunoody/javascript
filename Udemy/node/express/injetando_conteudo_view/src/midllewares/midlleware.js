
// aqui vamos exportar um midlleware global. ver no server.js    
module.exports = (req, res, next) => {    

    //objeto locals:
    res.locals.umaVariavelLocal = 'este é o valor da variável local';
    
    console.log('passei no midlleware global');
    console.log(req.body);
    next(); //midllewares SEMPRE precisam de next
}