
const HomeModel = require('../models/HomeModel');

// Adiciona no mongoDB! 
// Retorna uma Promisse!!! Com os dados do que foi criado na base, como o ID por exemplo
// aqui é só um teste que ele grava na base direto ao acessar a página home da minha aplicação
// quem é responsável por gravar e recuperar os dados é o nosso Model e não o controller, aqui é um exemplo bobo só para ver gravando e recuperando da base
HomeModel.create({
//    titulo: 'Título Teste',
//    descricao: 'Descrição teste'
    titulo: 'Outro Título Teste',
    descricao: 'Outra Descrição teste'

})
.then((dados) => {
    console.log(dados)
})
.catch(e => console.log(e));
// agora executo     no node apenas com node server.js pois usando o nodemon ele vai salvar um dado a cada alteração que eu fizer no código pois ele reinicia a conexão


// para buscar os dados usamos o find (só um exemplo bobo, não é para fazer isso aqui neste ponto)
// assim é sem filtro, vai me tarzer tudo que tem nesta "tabela" home, mas é possível obviamente colocar filtros e veremos isso mais tarde. aqui vai retornar um array de objetos em dados
HomeModel.find()
    .then((dados) => {
        console.log(dados)
    })
    .catch(e => console.log(e));



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