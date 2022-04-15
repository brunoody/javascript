

//############## PELO QUE ENTENDI, UM MODEL SERIA UMA TABELA NA BASE ###################
// tanto que ele criou a minha base com o nome: meuPrimeiroBancoMongoDb.homes
// o meuPrimeiroBancoMongoDb é o nmome da base que passei na string de conexão e o homes é o nome do meu model mas no plural, ver abaixo em Criação do model

const mongosse = require('mongoose');

// esse schema é aonde vou dizer quais "campos" quero, que tipo de campo, tamaanho etc.. na base do mongo
// exemplo simples, depois mais vamos fazer rum projeto maior
const HomeScheme = new mongosse.Schema({
    titulo: {type: String, required: true},
    descricao: String
});

// criação do model:
const HomeModel = mongosse.model('Home', HomeScheme); // nome e eschema do model

// importado no homeController
module.exports = HomeModel;