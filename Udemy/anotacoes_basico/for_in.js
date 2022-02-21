
const frutas = ['maçã', 'banana', 'pera', 'laranja'];

// lê o indices
for (let indice in frutas) {
    //console.log(frutas[indice]);
};


// no objeto ele lê as chaves
const pessoa = {
    nome: 'Marcelo',
    sobrenome: 'Toller',
    idade: 42,
    endereco: {
        rua: 'Jozino Liotti',
        numero: 51,
        bairro: 'Jardim Algarve'
    }
};

for (let chave in pessoa) {    
    console.log(pessoa[chave]);    
}