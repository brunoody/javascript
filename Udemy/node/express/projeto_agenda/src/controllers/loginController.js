const { async } = require('regenerator-runtime');
const Login = require('../models/LoginModel.js');

exports.index = (req, res) => {
    res.render('login');
}

// esta função precisa ser async pois recebe uma outra async (login.register)
exports.register = async (req, res) => {
    console.log('entrou na rota de register');
    try {
    // aqui p body passa por dentro da classe e são feitas validações
        const login = new Login(req.body);
        try {
            await login.register();
        } catch(e) {
            console.log(e);  
        }   

        if (login.errors.length > 0) {
            req.flash('errors', login.errors); // mostra os erros 
            // salva a sessão e retorna para a página de login para mostrar os erros
            req.session.save(function() {
            return res.redirect('back');            
            }) 
            return;
        }  
        req.flash('sucess', 'Seu usuário foi crido com sucesso');         
        req.session.save(function() {
        return res.redirect('back');
        }) 

        //res.send(login.errors); 
    } catch (e) {
        console.log(e);
        res.render('404.ejs')
    }

}