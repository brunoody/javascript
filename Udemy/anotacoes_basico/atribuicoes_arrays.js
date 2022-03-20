let a = 'A';
let b = 'B';
let c = 'C';
console.log(a,b,c);

//POSSO MUDAR O VALOR DESSAS VARIAVEIS DE UMA VEZ ATRAVEZ DA ATRIBUIÇÃO POR ARRAY:
const arrayLetras = ['W', 'X', 'Y'];

[a,b,c] = arrayLetras; // agora as variaveis a,b e c passam a ter os respectivos valores das posições do array:
console.log(a,b,c);

//posso só inverter os valores usando as mesmas variáveis: 
[a,b,c] = [b,c,a];
console.log(a,b,c);

//outra forma:
const numeros = [1,2,3,4,5,6];
const [numeroUm, numeroDois, ...resto/*const resto recebe o resto do array!*/] = numeros; // aqui as constantes (ou let) numeroUm, numeroDois receberão os valores correspondentes do array
console.log(numeroUm, numeroDois);
console.log(resto);

//assim tb dá
//const [numeroUm, ,numeroTres, ,numeroQuatro] = numeros; // ir pulando 

// array dentro de array:
const testeArray = [[1,2,3], [4,5,6], 7,8,9];  
const valor = testeArray[1][2];  // pega o numero 6
const  [,[,,valorSeis]] = testeArray; // pega o 6 tb;
const [lista1, lista2,lista3] = testeArray; // pega 3 arrays



