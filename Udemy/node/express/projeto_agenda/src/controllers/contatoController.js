const Contato = require('../models/ContatoModel.js');

exports.index = (req, res) => {       
    res.render('contato', {contato: {}}); // aqui é passado um "contato fake", vazio para que ele exista e seja reconhecido na página de contato.ejs
}

exports.register = async (req, res) => {
    try {
    // aqui p body passa por dentro da classe e são feitas validações
        const contato = new Contato(req.body);
        await contato.register();

        if (contato.errors.length > 0) {
            req.flash('errors', contato.errors);                                
            
        } else {
            req.flash('sucess', 'Contato cadastrado com sucesso.'); 
        };  

        //res.send(contato.contato);
        res.redirect(`/contato/index/${contato.contato._id}`);                             

    } catch (e) {
        console.log(e);
        res.render('404.ejs')
    }
}

exports.editIndex = async (req, res) => {
    // esse params.id, o id é passado na rota: /contato/index/:id, ver acima no register em redirect
    if (!req.params.id) return res.render('404');// se o parametro de id do usuário não for passado gera erro 404
    const contatoModel = new Contato(req.body);
    const contato = await contatoModel.buscaPorId(req.params.id)
    
    if (!contato) {
        res.render('404');
        return;
    }
    res.render( 'contato', {
        contato: contato
    });    
}