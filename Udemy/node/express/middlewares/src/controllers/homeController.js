exports.paginaInicial = (req, res) => {    
    console.log('passei no paginaInicial');
    res.render('index');// reinderiza (transforma) o index.ejs e mostra na tela um "html"     
    return;
}

// este post é xecutado porque no index.ejs tm um <form action="/" method="post"> ou seja, um post no raíz "\"
exports.trataPost = (req, res) => {
    res.send(req.body);
    console.log('passei no trataPost');
    return;
}