

/* Definição de prototipo:
É o termo usado para se referir ao que foi criado pela primeira vez, servindo de model ou molde para futuras produções.

Todos os objetos tem uma referencia intern apara um protoripo (__proto__) que vem da propriedade prototype da função construtora que foi usada para cria-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor do JS vai tentar encontrar o membro no próprio objetos depois a cadeia de prototipos é usada até o topo (null) até encontrar (ou não) tal membro
 */

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    //this.nomeCompleto = () => 'filho '+this.nome+' '+this.sobrenome; //este método pode ser escrino no "pai" deste objeto!

    //__proto__ : Object.Prototype // Implicito:  __proto__ o pai do objeto e o Object.Prototype é o pai do pai..
}
//o "pai" deste objeto é o prototype:
Pessoa.prototype.nomeCompleto = function(){ // se eu deixar ele declarado lá no objeto tb, o do objeto vai sobrescrever este!
    return 'Pai '+this.nome+' '+this.sobrenome; 
};
//Pessoa.prototype === Pessoa.__proto__
const pessoa1 = new Pessoa('Macelo', 'Toller');
// Cadeia de herança: pessoa1 -> Pessoa.prototype -> Object.prototype

////////////////////////////////////////
const objetoPai = {
    chaveA: 'A'
}
const objetoFilho = {
    chaveB: 'B'
}
const objetoNeto = {
    chaveC: 'C'
}
Object.setPrototypeOf(objetoFilho, objetoPai);
Object.setPrototypeOf(objetoNeto, objetoFilho);
console.log(objetoFilho.chaveA);
console.log(objetoNeto.chaveA);

//const objetoTeste = Object.create(object.prototype) // cria um objeto normal com o construtor normal
//const objetoTeste = Object.create(Pessoa.prototype) // cria um objeto normal com o construtor Pessoa NÃO HERDA AS CHAVES DO PESSOA!!
const objetoTeste = Object.create(Pessoa.prototype, {
    preco: {
        value: 10,
        enumerable: true
    },
    tamanho: {
        value: 10,
        enumerable: true
    } ,
    cor: {
        value: 'vermelho',
        enumerable: true
    }

}) 

