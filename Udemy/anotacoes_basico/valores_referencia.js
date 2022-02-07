
// tipo primitivos são copiados de variavel para variável e apontam para locais diferentes na memória:
let a = 'A';
let b = a;
// Se eu alterar o valor da variavel a a b continua com o memso valor inicial que é A
a =  'xxx'
//console.log(a,b);

// Quando os tipos não são primitivos então os valores são por referencia:
let objeto1 = {
    nome: 'Ana',
    sobrenome: 'Paula'
}

let objeto2 = objeto1;
// alterando algum atributo de qualquer um dos dois, os dois são afetados pois estão apontando para o mesmo local
objeto2.nome = 'Pedro'
console.log(objeto1, objeto2);

// para não ocorrer isso pode-se fazer um Spread:
objeto3 = {
    nome: 'João',
    sobrenome: 'antunes'    
}

objeto4 = {...objeto2}; // esses 3 pontos faz uma cópia, agora os dois são independentes
