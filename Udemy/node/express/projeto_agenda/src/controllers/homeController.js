const { redirect } = require("express/lib/response");

exports.index = (req, res) => {        

    if (!req.session.user){
        res.redirect('/login/index');
        return;
    }
    res.render('index');
    
}
