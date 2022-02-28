// IIFE - imediately invoke function expression
// é uma função que executa assim que crida, sem a necessidade de chamar ela.
// Não toca o escopo global (nomes de variáveis, constantes ou outras funções)

// Entre parenteses, sem nome:
(function () {      
    const nome = 'nome2';
    function falaOi () {
        const nome = 'nome3';
        console.log(`Oi ${nome}`);
    }
    falaOi(); // aqui vai pegar o 'nome3' devido ao escopo léxico(mais próximo)

})(); // esse abre e fecha parenteses é a "chamada" dela mesma.

const nome = 'nome1';

//////////////////////
//posso passar parametros tb:

(function (nome) {
    console.log(nome);

})('Marcelo');