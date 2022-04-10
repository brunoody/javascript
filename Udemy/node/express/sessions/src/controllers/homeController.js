const flash = require("connect-flash/lib/flash");

exports.paginaInicial = (req, res) => {    
    req.session.usuario = {nome: 'luiz', logado: true}; // isso aqui vai ficar gravado na nossa base de dados por 7 dias! Já olhei lá e esta gravado lá, isso foi feito no server.js. posso comentar a linha de cima e colocar um console.log para ver o objeto retornado do banco!
    //console.log(req.session.usuario);

    // flash messages
    req.flash('info', 'mensagem de informação'); 
    req.flash('error', 'mensagem de erro'); 
    req.flash('toller', 'mensagem de toller'); 
    // quando passar nas linhas acima ele vai criar as mensagens, mostrar p usuário (não programado) e depois desaparecer.. pode ser usado para uma validação de cpf por exemplo.. dá para testar deixndo as linhas acima descomentadas e depois comentar e recarregar a página para ver elas desaparecerem
    console.log(req.flash('info'), req.flash('error'), req.flash('toller'));
    // no próximo carregamento elas não aparecerão mais caso não caia na validação

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