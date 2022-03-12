

// sometodos os valores do array:
const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

// aqui temos um parametro a mais que o filter e map: o Acumulador!
const total = numeros.reduce(function(acumulador, valor, indice, array){
    return acumulador + valor;
}, 10);// este 0 é o valor inicial do acumulador!!! Na verdade é o acumulador! Se não manda nada ele considera o primeiro valor do array como inicial! Cuidado, o ideal é inicial com 0 sempre se for uma conta
//console.log(total);// aqui vai dar 120 pois é a soma de todos os valores do array!
// coloquei 10 no valor inicial e resultou em 130!


// retorne apenas os numeros pares: (pode e deve ser feito com o filter, mas aqui é só um exemplo da utilidade do reduce
const total2 = numeros.reduce(function(acumulador, valor, indice, array){
    if (valor % 2 === 0)  acumulador.push(valor); // adiciona no acumulador(array de valor inicial) somente os valores pares!
    return acumulador;
}, []);// aqui no valor inicial tem um array, na verdade ele que é o acumulador
//console.log(total2);

// retorne um array com o dobro dos valores: (pode e deve ser feito com o map, mas aqui é só um exemplo da utilidade do reduce
const total3 = numeros.reduce(function(acumulador, valor, indice, array){
    acumulador.push(valor * 2);
    return acumulador;
}, []);// aqui no valor inicial tem um array, na verdade ele que é o acumulador
//console.log(total3);



// retorne a pessoa mais velha:
const pessoas = [
    {nome: 'Luis', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 63},
    {nome: 'Wallace', idade: 47}    
];

const maisVelha = pessoas.reduce(function (acumulador, valor) {
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(maisVelha);
