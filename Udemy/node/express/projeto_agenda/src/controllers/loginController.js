const { render } = require('express/lib/response');
const { async } = require('regenerator-runtime');
const Login = require('../models/LoginModel.js');

exports.index = (req, res) => {
    // se o usuário estiver logado e acessar a tela de login ele manda para a página principal pois ele não precisa da tela de login, ele precisa se deslogar para chegar nela de novo.
    if (req.session.user) {
        res.redirect('/');
        return;
    }
    res.render('login');
}

// esta função precisa ser async pois recebe uma outra async (login.register)
exports.register = async (req, res) => {
    try {
    // aqui p body passa por dentro da classe e são feitas validações
        const login = new Login(req.body);
        await login.register();
        
        if (login.errors.length > 0) {
            req.flash('errors', login.errors); // mostra os erros 
            // salva a sessão e retorna para a página de login para mostrar os erros
            req.session.save(function() {
            return res.redirect('/login/index');            
            }) 
            return;
        }  
        req.flash('sucess', 'Seu usuário foi criado com sucesso');         
        req.session.save(function() {
        return res.redirect('/login/index');
        }) 

        //res.send(login.errors); 
    } catch (e) {
        console.log(e);
        res.render('404.ejs')
    }
}

exports.logout = (req, res ) => {
    req.session.destroy();
    res.redirect('/login/index');
}

exports.login = async (req, res) => {
    try {
    // aqui p body passa por dentro da classe e são feitas validações
        const login = new Login(req.body);
        await login.logar();

        if (login.errors.length > 0) {
            req.flash('errors', login.errors); // mostra os erros                        
            res.redirect('/login/index');                        
            return;
        }  

        //req.flash('sucess', 'Login efetuado com sucesso. Redirecionando para os seus contatos.. '); 
        //res.redirect('/login/index'); //
        req.session.user = login.user; // passa o ussuario para a session, assim que sabemos em outros pontos que o usuário esta conectado

        req.session.save(function() {
            return res.redirect('/');            
        }); 

        //res.send(login.errors); 
    } catch (e) {
        console.log(e);
        res.render('404.ejs')
    }
}