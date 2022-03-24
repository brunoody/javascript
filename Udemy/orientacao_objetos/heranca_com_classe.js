
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

    ligar () {
        super.ligar();// assim executa o método do pai. Eu que descobri, o professor não falou n aula. 
        console.log('este ligar sobrescreve o ligar da classe pai');
    }
};

const s1 = new Smartphone('Samsumg', 'Preto', 'M12');
s1.ligar();
console.log(s1.ligado);
