
// Faz mesmo que o filter mas pode-se alterar os valores do novo array. o map semprevai retornar um array do tamanho original, não há filtragem, só manipulação

const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
//const numeroEmDobro = numeros.map(function(valor){
//    return valor * 2;// aqui posso retornar qualquer coisa, manipular os valores ou não, posso retornar tudo 0 se eu //quiser..
//});

// com arrow
const numeroEmDobro = numeros.map(valor => valor * 2);
//console.log(numeroEmDobro);

const pessoas = [
    {nome: 'Luis', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}    
];

//retornar apenas um array somente com os nomes:
const ArrayPessoas = pessoas.map(valor => valor.nome);
//console.log(ArrayPessoas);

//Retornar uma lista de objetos mas retirando a chave nome:
// 1 - removendo a chave nome:
const ArrayObjetosSemChaveNome = pessoas.map(function(objeto) {
    delete objeto.nome;
    return objeto;
});
// 2 - criando um objeto novo
const ArrayObjetosSemChaveNome1 = pessoas.map(function(objeto) {
    return {idade: objeto.idade};
});
// fazendo o exemplo 2 com arrow:
const ArrayObjetosSemChaveNome3 = pessoas.map(objeto => ({idade: objeto.idade})); // nese caso precisa envolver o objeto entre parenteses pois as chaves do objeto serão confundidas com as chaves da função!
//console.log(ArrayObjetosSemChaveNome3);

// Adicione uma chade de ID nos objetos:
const arrayComChaveID = pessoas.map(function (objeto, indice) {
    objeto.id = indice;
    return objeto;    
})
console.log(arrayComChaveID);

// os objetos modificados afetarão os objetos do array original!
// para isso não ocorrer se faz um novo objeto copiando-se o original:
const arrayComChaveID1 = pessoas.map(function (objeto, indice) {
    const objetoNovo = {...objeto}; //spread operator
    objetoNovo.id = indice;
    return objetoNovo;    
})
console.log(arrayComChaveID1);





