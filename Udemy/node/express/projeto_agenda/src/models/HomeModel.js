const mongosse = require('mongoose');

const HomeScheme = new mongosse.Schema({
    titulo: {type: String, required: true},
    descricao: String
});

// criação do model:
const HomeModel = mongosse.model('Home', HomeScheme); // nome e eschema do model

// importado no homeController
module.exports = HomeModel;