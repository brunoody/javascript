exports.paginaInicial = (req, res) => {    
    console.log('passei no paginaInicial');

    // reinderiza (transforma) o index.ejs e mostra na tela um "html"     
    // no segund parametro podemos injetar dados no index através de objetos, posso passar quelquer tipo de valores
    res.render('index', { 
        // ver o index.ejs!!
        titulo: 'Este será o <span style="color:red;">título</span> da página',        
        numeros: [1,2,3,4,5]
        // ver midllewareGlobal objeto locals
    });
    return;
}

// este post é executado porque no index.ejs tm um <form action="/" method="post"> ou seja, um post no raíz "\"
exports.trataPost = (req, res) => {
    res.send(req.body);
    console.log('passei no trataPost');
    return;
}