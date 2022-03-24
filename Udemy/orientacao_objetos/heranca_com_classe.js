
class Dispositivo {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar () {
        this.ligado = true;
    }

    Desligar () {
      this.ligado = false;
    }
}

class Smartphone extends Dispositivo {
    constructor (nome, cor, modelo){ // o nome é do pai e a cor e modelo são novos
        super(nome);// como se fosse o inherited do delphi!!
        this.cor = cor;
        this.modelo = modelo;
    }
};

const s1 = new Smartphone('Samsumg', 'Preto', 'M12');
console.log(s1);
