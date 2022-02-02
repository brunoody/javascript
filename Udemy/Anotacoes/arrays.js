// arrays
let array1 = ['A', 'B', 'C'];
array1.push('D') // ADICIONA NO FINAL
array1.unshift('E'); // ADICIONA NO INICIO, TB É UM RETORNO
array1.shift; // REMOVE DO INICIO, TB É UM RETORNO
let removidoInicio = array1.shift; // RETORNO
array1.pop; // REMOVE DO FINAL, TB É UM RETORNO
let removidoFinal = array1.pop;//RETORNO
delete array1[1]; // deleta o indice 1, porem não altera os indices, o elemento 1 fica como vazio no array
array1.slice(0,2);// trás 1 elemento, sempre tem que colocar um a mais
array1 instanceof Array; // sabr se é um array

