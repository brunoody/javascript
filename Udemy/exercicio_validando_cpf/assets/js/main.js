//Regra de validação:
// 952.523.710-91
//1- Remover os digitos
// 952523710
//2- Multiplicar cada algarismo por um decrescimo  a partir de 10:
// 9x10  5x9  2x8  5x7  2x6  3x5  7x4  1x3  0x2
//  90    45   16   35   12   15   28   3    0 = ValorSoma
// 3 - Descobrir o primeiro dígito:
// 11 - (o resto do ValorSoma / 11) = PrimeiroDidigo
// Se PrimeiroDigito for maior que 9 então vira 0

// Segundo dígito: Repete o item 2 acrescentendo o primeiro dígito, mas desta vez iniciando a multiplicação por 11 decrescente.
// o segundo dígito é a mesma regra do item 3

function retornaCpfCalculoDigito(cpf) {
    const arrayCpf = cpf.split('');
    let fatorCalculo = 10;


    let digito1 = arrayCpf.map(function(valor, indice){
        let fator = fatorCalculo - indice;
        return valor * fator;
        }).reduce(function(acumulador, valor){
            return acumulador + valor
        }, 0); 
        
        fatorCalculo++;
        digito1 = (fatorCalculo - (digito1 % fatorCalculo));
        console.log(digito1);
    };


      



let cpf = '952.523.710-91';
cpfManipulacao = cpf.replace(/-.*/g, '').replace(/\D+/g, '')// No primeiro replace retita o -digito
// No segundo: \D significa tido que não é um Digito, tem que ser maiuscula! o + quer dizer um ou mais e o /g é padrão, busca global

cpfManipulacao = retornaCpfCalculoDigito(cpfManipulacao);
console.log(cpfManipulacao);

