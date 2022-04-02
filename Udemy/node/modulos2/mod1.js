// "resetar" o módulo passando somente uma coisa para ele:

//funciona com qualquer coisa:

//número
//module.exports = 2;

// função
//module.exports = function(x,y) {
//    return x * y;
//}
// para executar esta função aqui mesmo na própria nt:
//console.log(module.exports(2,6));

//Classe:
module.exports = class Cachorro {
    constructor (nome) {
        this.nome = nome;
    }

    latir () {
        console.log(this.nome+' esta latindo');
    }
}