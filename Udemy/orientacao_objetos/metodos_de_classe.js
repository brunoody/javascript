
// similar ao class procedure do Delphi

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

    // este método só pode ser chamado pela classe! Dá um erro se chamar pela instancia! 
    static Reiniciar () {
        //console.log(`Reiniciando ${this.nome}`); Não consegue acessar o This.Nome..
        console.log('reiniciando..');

    }
}

const d1 = new Dispositivo('Samsumg');
//d1.Reiniciar(); // dá erro!
Dispositivo.Reiniciar();
