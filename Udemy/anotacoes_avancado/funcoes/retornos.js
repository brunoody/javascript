
// FUNÇÃO QUE RETORNA UMA FUNÇÃO:

function falaFrase(comeco) {

    function falaResto(resto) {
        return comeco + ' '+ resto;
    };

    return falaResto; // vai retornar a sub função fala resto literalmente, para executar ela e não o retorno com a frase!
};

const olaMundo = falaFrase('olá');
console.log(olaMundo);// aqui não vai mostrar olá em sim [Function: falaResto]
// para funcionar presiso passar o parametro para a falaresto que é a que foi retornada!
console.log(olaMundo('mundo'));

//////////////////////////////////////////////////////////////////////////

function criaMultiplicador (multiplicador) {

    return function(n) {
        return n * multiplicador;
    };
};

// posso chamar assim:
const resultado = criaMultiplicador(2)(4);
console.log(resultado);
//ou assim:
const resultado1 = criaMultiplicador(2);
console.log(resultado1(4));





