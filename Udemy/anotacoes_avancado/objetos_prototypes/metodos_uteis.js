
// copiar objetos:
const objeto1 = {
    nome: 'Marcelo',
    sobrenome: 'Toller'
};

const objetoCopia = {...objeto1, idade:42}; // forma como já tinha sido ensinado, posso até colocar mais atributos
const objetoCopia1 = Object.assign({}, objeto1, {endereco: 'rua 1'}); // 1 - objeto destino, 2 - o objeto a ser copiado para dentro do destino, 3 - posso criar outro objeto que será agregado ao destino 

console.log(objetoCopia);
console.log(objetoCopia1);
///////////////////////////////////////////
console.log(Object.keys(objetoCopia1)); // mostra as chaves do objeto.
console.log(Object.values(objetoCopia1)); // mostra os valores do objeto
console.log(Object.entries(objetoCopia1)); // cria um array com outros arrays dentro cada um 2 elementos: chave e valor e dá para iterar
for (let [chave, valor] of Object.entries(objetoCopia1)) {
    console.log(chave, valor);
};   

///////////////////////////////////////////
Object.defineProperty(objetoCopia1, 'nome', {
    writable: false
    // poss kudar outras
})
Object.freeze(objetoCopia1); // não posso mais alterar o objeto
console.log( Object.getOwnPropertyDescriptor(objetoCopia1, 'nome')); // mostra os atributos de uma propriedade do objeto. O Freeze e o defineProperty acima influencia!!


