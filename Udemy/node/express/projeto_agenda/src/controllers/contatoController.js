const Contato = require('../models/ContatoModel.js');

exports.index = (req, res) => {       
    res.render('contato');    
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

        res.redirect('/contato/index');                             

    } catch (e) {
        console.log(e);
        res.render('404.ejs')
    }
}