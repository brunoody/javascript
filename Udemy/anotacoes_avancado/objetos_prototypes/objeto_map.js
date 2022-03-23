
// O Objeto map, pelo que entendi,  é quase como um IDictionary do Delphi! Tem as keys e os values!

//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Map

// aray com 3 objetos
const pessoas = [
    {id: 3, nome: '33333'},
    {id: 2, nome: '22222'},
    {id: 1, nome: '11111'}
];

// Uso o Map passando o ID como Key deste "IDictionay" e o objeto todo como o Value
const novaspessoas = new Map();

for (pessoa of pessoas) {
    novaspessoas.set(pessoa.id, {...pessoa}) // "Adiciona chave e valor" Neste caso a chave é um number e manteve a ordem de inserção, diferente e um objeto nomal que a chave só pode ser string e não se mantem na ordem
}
//console.log(novaspessoas);

//obter Value da chave 2 exemplo
//console.log(novaspessoas.get(2));

// iterando ele retorna um array sempre com 2 posições a chave e o valor:
for (const pessoa of novaspessoas) {
    console.log(pessoa);
}

// Posso iterar sobre as chaves tb:
for (const chave of novaspessoas.keys()) {
    console.log(chave, novaspessoas.get(chave))
}

// Posso iterar sobre os valores tb:
for (const value of novaspessoas.values()) {
    console.log(value);
}

// desestruturação:
for (const [identificador, {id, nome}] of novaspessoas) {
    console.log(identificador, id, nome);
}

// eliminar uma chave
novaspessoas.delete(2);

