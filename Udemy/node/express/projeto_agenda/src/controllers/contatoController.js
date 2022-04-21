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

        //res.send(contato.contato._id);

        if (!contato.contato._id) {
            res.redirect(`/contato/index/`);                             
        } else {
            res.redirect(`/contato/index/${contato.contato._id}`);                             
        }

    } catch (e) {
        console.log(e);
        res.render('404.ejs')
    }
}

exports.indexCadastrado = async (req, res) => {
    try {
        console.log('parametro: ', req.params.id);
        // esse params.id, o id é passado na rota: /contato/index/:id, ver acima no register em redirect
        if (!req.params.id) return res.render('404');// se o parametro de id do usuário não for passado gera erro 404
        const contato = new Contato(req.body);
        await contato.buscaPorId(req.params.id)
                
        console.log('Contato: ', contato.contato);
        if (!contato.contato) {
            res.render('404');
            return;
        }
        res.render( 'contato', {
            contato: contato.contato
        });  
    } catch(e) {
        console.log(e);
        res.render('404.ejs')
    }  
}

exports.indexEdit = async (req, res) => {
    try{
        if (!req.params.id) return res.render('404');
        const contato = new Contato(req.body);
        await contato.indexEdit(req.params.id)
    
        if (contato.errors.length > 0) {
            req.flash('errors', contato.errors);                                            
        } else {
            req.flash('sucess', 'Contato editado com sucesso.'); 
        };  
    
        //res.send(contato.contato);
        res.redirect(`/contato/index/${contato.contato._id}`);    
    } catch(e) {
        console.log(e);
        res.render('404.ejs')     
    }   
}

