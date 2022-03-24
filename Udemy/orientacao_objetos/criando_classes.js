
// classes são exatamante a mesma coisa que funções construtoras

class Pessoa {
    constructor(nome, sobrenome) { // o constructor só é necessário caso queira passar algum parametro
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    //métodos: esses métodos já são automaticamente linkados ao prototype!!
    falar () {
        console.log(`${this.nome} esta falando`)         
    }

    comer (comida) {
        console.log(`${this.nome} esta comento ${comida}`)         
    }

    beber () {
        console.log(`${this.nome} esta bebendo`)         
    }

}

const p1 = new Pessoa('Marcelo', 'Toller');
console.log(p1.comer('arroz'));