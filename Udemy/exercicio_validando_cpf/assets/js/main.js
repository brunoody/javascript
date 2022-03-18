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
    cpf = cpf.replace(/-.*/g, '').replace(/\D+/g, '');
    // No primeiro replace retita o -digito.
    // No segundo: \D significa tudo que não é um Digito, tem que ser maiuscula! o + quer dizer um ou mais e o /g é padrão, busca global

    let fatorCalculo = 10;    

    for (let digitos=1; digitos<=2; digitos++) {
        let digito = cpf.split('').map(function(valor, indice){                        
            let fator = fatorCalculo - indice;
            return valor * fator;
        }).reduce(function(acumulador, valor){
            return acumulador + valor
        }, 0);    

        digito = 11 - (digito%11);        
        cpf = cpf + (digito > 9 ? 0 : digito);
        fatorCalculo++;
    };
    return cpf;
};     


//let cpf = '952.523.710-91';
//let cpf = '788.804.524-36';
let cpf = '633.633.112-14';
let cpfConferencia = cpf.replace(/\D+/g, ''); //só deixa os numeros, tira ponto e traço

cpf = retornaCpfCalculoDigito(cpf);

console.log(cpf, cpfConferencia);
if (cpfConferencia === cpf) {
    console.log('CPF VÁLIDO')    
} else {
    console.log('CPF INVALIDO')    
};





