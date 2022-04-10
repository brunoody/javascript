exports.paginaInicial = (req, res, next) => {
    console.log('Executando paginaInicial')
    res.render('index');// reinderiza (transforma) o index.ejs e mostra na tela um "html" 
    next(); // esse néxt é uma função anmônima lá no routes_exemplo_midlleware_simples > route.get
}

exports.trataPost = (req, res) => {
    res.send('Olá, nova rota de POST')
}