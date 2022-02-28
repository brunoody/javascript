
// introduzindo o conceito de "this":
function criaObjetoPessoa (nome, sobrenome, peso, altura) {

    return {
        nome, // quando a chave é igual ao parametro basta só jogar ela aqui, sem os dois pontos
        sobrenome,

        //getter
        get nomeCompleto () { // get faz com que uma função se comporte como um atributo simples! Sem precisar o uso de parenteses na chamada dele!! Isso se chama Getter
            //return nome+' '+sobrenome; // neste caso, se eu deixar só "nome" ele vai entender que é o parametro passado
            return this.nome + ' '+this.sobrenome;//usando o this ele sabe que é um atributo do objeto, semelhante ao self do Delphi!
        },
        
        // Setter:
        set nomeCompleto(valor) {
            // aqui vou setar valores para os atributos nome e sobrenome! Esses getters e Setters são semelhantes as properties do Delphi:
            arrayValor = valor.split(' ');// retoen um array separado pelos espaços
            this.nome = arrayValor.shift(); // o Shift remove o primeiro valor e ainda retorna ele.
            this.sobrenome = arrayValor.join(' '); //junta o restante dos itens do array separados por espaço, igual no delphi     
        },

        peso,
        altura,
        imc: function () {// não precisaria do function. Quando quero obter o valor deste "atributo" pelo objeto, preciso colocar os parenteses no final, com getters nõ precisa
            return (this.peso / (this.altura ** 2)).toFixed(2);
        }
    };
};

const pessoa1 = criaObjetoPessoa('Marcelo', 'Toller', 76, 1.73);
pessoa1.nomeCompleto = 'Maria silva lima'; // seta o novo nome e sobrenome
console.log(pessoa1.nomeCompleto, pessoa1.imc());