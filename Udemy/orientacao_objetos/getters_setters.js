
const _velocidade = Symbol('velocidade'); // gera um "ID" aleatório sempre diferente! o velociddade entre aspas não éobrigatório, é só uma descrição

class Carro {
    constructor(nome) {
        this.nome = nome;
        //this.velocidade = 0; substutui pela linha abaixo:
        this[_velocidade] = 0;
    }

    // getter da velocidade
    get velocidade () {
        return this[_velocidade]; 
    }

    set velocidade (valor) {
        // protegendo
        if ((typeof valor === 'number') && (valor >= 0 ) && (valor <= 100)) {
            this[_velocidade] = valor;
        }        
    }

    acelerar () {
        if (this[_velocidade] < 100) {
            this[_velocidade]++;
        }
    }

    desacelerar () {
        if (this[_velocidade]  > 0) {
            this[_velocidade]--;
        }
    }
}

const c1 = new Carro('Fusca');
c1.velocidade = 10000; // isso aqui tewm que ser protegido!
console.log(c1);
