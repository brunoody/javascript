exports.paginaInicial = (req, res) => {
    res.render('index');// reinderiza (transforma) o index.ejs e mostra na tela um "html" 
}

exports.trataPost = (req, res) => {
    res.send('Olá, nova rota de POST')
}