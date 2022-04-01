const nome = 'Marcelo';
const sobreNome = 'Toller';

const falaNome = () => nome+' '+sobreNome;


//console.log(module); // esse module é do proprio node, ele é um objeto com outros objetos dentro, um deles é o exports

// posso adicionar uma chave dentro odo objeto exports:
//module.exports.nome = nome;
//module.exports.sobreNome = sobreNome;
//module.exports.falaNome = falaNome;

// posso usart um atalho, uma maneira de fazer o mesmo de cima:
exports.nome = nome;
exports.sobreNome = sobreNome;
exports.falaNome = falaNome;
this.qualquerCoisa = 'Qualquer coisa'; // o  this tb é o module.exports!!! 
// esse exports aponta para module.exports 
//nsole.log(exports);
// ver a importação no app.js

// exportando classe
class Pessoa {
    constructor(nome){
        this.nome = nome;
    }
}
exports.Pessoa = Pessoa;

// posso sobrescrever todo o modules tb:
// não pode ser direto com exports, tem que ser module.exports
module.exports = {
    nome, sobreNome
}