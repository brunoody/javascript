
// 1 - filtrar os pares
// 2 - dobrar os valores pares
// 3 - somar todos

const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

const filterMapReduce = numeros.filter(function(valor){
    return valor % 2 === 0;
}).map(function(valor) {
    return valor * 2
}).reduce(function (acumulador, valor) {
    return acumulador += valor;
}, 0);

console.log(filterMapReduce);

/// com arrow function:
const filterMapReduce1 = numeros
  .filter(valor => valor % 2 === 0)
  .map(valor => valor * 2)
  .reduce((acumulador, valor) => acumulador += valor, 0);

console.log(filterMapReduce1);
