

// filrar o elementos maiores que 10:
const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

// primeira forma: função de callback externa:
function callBackFilter (valor, indice, arrayCompleto) { // os parametros virão automaticamente do método filtrer. Não é necessário passar os parametros de indice e arrayCompleto se não for usar
// esta função tem que retornar um boolean. 
    return valor > 10;    
}
const numerosFiltrados = numeros.filter(callBackFilter);
//console.log(numerosFiltrados);

// outra forma: função anônima:
const numerosFiltrados1 = numeros.filter(function (valor) {
    return valor > 10;
});
//console.log(numerosFiltrados1);

// outra forma: função anônima com arrow function:
const numerosFiltrados2 = numeros.filter(valor => valor > 10);
//console.log(numerosFiltrados2);

/////////////////////////////////////////////////////////
//com array de objetos:

// filtrar pessoas com nome maior de 5 letras
const pessoas = [
    {nome: 'Luis', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}    
];
const pessoasNomeCincoLetras = pessoas.filter(objeto => objeto.nome.length > 5);
console.log(pessoasNomeCincoLetras);

// filtrar pessoas com nome que termine com a letra "a':
const pessoasNomeTerminaComA = pessoas.filter(objeto => objeto.nome.toLowerCase().endsWith('a'));
console.log(pessoasNomeTerminaComA);