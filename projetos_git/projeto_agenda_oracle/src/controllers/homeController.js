
const { async } = require('regenerator-runtime');
const Contato = require('../models/ContatoModel.js');

exports.index = async (req, res) => {
    req.body.usuarioId = req.session.user._id; // alimento o usuarioID do body para poder filtrar na base!
    const modelContato = new Contato(req.body);
    const listaContatos = await modelContato.carregarListaContatos();  
    
    console.log('listaContatos', listaContatos.length)
    res.render('index', {listaContatos: listaContatos}); // Envia para o index.ejs para listar lá   
}
