module.exports = class Pessoa {
    constructor (nome) {
        this.nome = nome;
    }

    falar () {
        console.log(this.nome+' esta falando');
    }
}