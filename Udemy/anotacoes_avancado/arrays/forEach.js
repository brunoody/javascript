

// forEach é só para arrays. É como se fosse um for mas com uma função de callbak ou anonima, igual no Delphi
// ele só itera, mais nada..
const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

numeros.forEach(function(valor, indice, array){
    console.log(valor); 
})