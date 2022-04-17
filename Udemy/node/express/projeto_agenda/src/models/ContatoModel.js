const mongosse = require('mongoose');

const ContatoScheme = new mongosse.Schema({
    nome: {type: String, required: true},
    sobrenome: {type: String, required: true},
    email: {type: String, required: true},
    telefone: {type: String, required: true}
});

// criação do model:
const ContatoModel = mongosse.model('Contato', ContatoScheme); // nome e eschema do model

// importado no ContatoController
module.exports = ContatoModel;