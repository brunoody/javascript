
// ARGUMENTOS MÁGICOS:
function teste () { // não criei nenhum parametro!
    console.log('olá');
    console.log(arguments); //aqui estão os argumentos aleatórios que passei na chamada da função! Só funciona para declarações function. é um objeto/array e posso pegar o valor pelo indice!
    console.log(arguments[0]);
    // se eu tivesse criado 3 parametros aqui por exemplo, eles pegariam o valor dos 3 primeiros que eu passei na chamada da função e o restante fica nesse arguments
};
teste('aaaa', 1,2,3,true); // chamei a função com vários argumentos que coloquei aleatóriamente! Não dá erro!

// QUANTIDADE DE PARAMETROS
function teste1 (a, b, c) {
    console.log(a,b,c); // ele vai mostrar o b e o c como undefined, não dar dar eeeo
};
teste1(1); // só passei um argumento! 

// VALOR DEFAULT
function teste2(a, b=0) {
    console.log(a+b);
    return a + b;
    
};
teste2(2);

function teste3(a=2, b=3, c=4) {
    console.log(a+b+c);
    return a+b+c; 
};
teste3(10, undefined, 30); // eu quero enviar só o "a" e o "c" e deixar o b pegar o defaul. Só passando undefined!

// OBJETOS E ARAYS NOS PARAMETROS:
function teste4({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
};
teste4({nome: 'Marcelo', sobrenome: 'Toller', idade: 42});

function teste5([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
};
teste5(['Marcelo','Toller',42]);

// RES OPERATOR:
function teste6 (parametro1, parametro2, ...parametro3) {
    console.log(parametro1, parametro2, parametro3);// o 3 vai pegar todos a mais que forem passados na chamada da função em forma de array! Sempre deve ser o último parmetro
};
teste6(1,2,'a', 'b', 'c', false, 0, 36);