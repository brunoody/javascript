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
    // No primeiro replace retita o Traço e o digito.
    // No segundo: \D significa tudo que não é um Digito, tem que ser maiuscula! o + quer dizer uma ou mais ocorrencias (no caso tem 2 pontos) e o /g é padrão, busca global

    let multiplicador = 10;
    const fatorCalculoDigito = 11;
    const quantidadeDigitos = 2;    

    for (let digitos=1; digitos<=quantidadeDigitos; digitos++) {
        // SEM ARROW
        //let digito = cpf
        //            .split('') poss usar Array.from(cpf) tb!
        //            .map(function(valor, indice){return valor * (multiplicador - indice)})
        //            .reduce(function(acumulador, valor){return acumulador + valor}, 0);   
        
        // COM ARROW
        let digito = Array.from(cpf)//posso usar .split('') tb!
                    .map((valor, indice) => valor * (multiplicador - indice))
                    .reduce((acumulador, valor) => acumulador + valor); 
       
        digito = fatorCalculoDigito - (digito % fatorCalculoDigito);        
        cpf += (digito > 9 ? 0 : digito);
        multiplicador++;        
    };
    return cpf;
};     


function validaCpf(cpf) {
    let cpfConferencia = cpf.replace(/\D+/g, ''); //só deixa os numeros, tira ponto e traço
    let cpfCalculado = retornaCpfCalculoDigito(cpf);

    console.log(cpf, cpfConferencia, cpfCalculado);
    if (cpfConferencia === cpfCalculado) {
        console.log('CPF VÁLIDO')    
    } else {
        console.log('CPF INVALIDO')    
    };

}

function criaCpf(){
    let cpfAleatorio = '';

    // cria 9 digitos aleatórios
    for (let digitos=1; digitos <=9; digitos++) {
        cpfAleatorio += Math.floor(Math.random() * 10);
    }
    // retorna com os dígitos calculados
    cpfAleatorio = retornaCpfCalculoDigito(cpfAleatorio);    

    // formata:
    return cpfAleatorio.replace(/([0-9]{3})?([0-9]{3})?([0-9]{3})?([0-9]{2})/, "$1.$2.$3-$4");
}

//////////////////// testes //////////////////////
//let cpf = '952.523.710-91';
//let cpf = '788.804.524-36';
//const cpf = '633.633.112-14';

const cpfCriado = criaCpf();
console.log('criado: ', cpfCriado);

validaCpf(cpfCriado);







