
const condicao = true;

var nome = '1111'; // criando
let nome1 = '1111'; // criando

if (condicao) {
    var nome = '2222'; // redeclarando, é a mesma variavel de fora
    let nome1 = '2222'; // criando (outra variavel com mesmo nome)
    
    if (condicao) {
       var nome = '3333'; // redeclarando, é a mesma variavel de fora
       let nome1 = '3333'; // criando (outra variavel com mesmo nome)
    }
}

console.log(nome, nome1); // aqui vai mostra 3333 1111 pois o var sempre é a mesma varial, então assume o ultimo valor que recebeu, o let sempre cria uma nova variavel dentro do bloco {]

// funções tem escopo especial
function falaOi () {
    var teste = 'oi';    

    if (condicao) {
        let nome = 'nome'; // esta variavel não pode ser usada fora deste bloco nesta função!
    };

    if (condicao) {
        var nome = 'nome1'; // esta variavel não pode usada fora deste bloco nesta função!
    };

    console.log(nome);
};
// a variavel teste não pode ser acessada fora da função, nem as nome acima
falaOi();

// OUTRA DIFERENÇA:
// Se eu tento usar um var antes de declarar ela, não ocorre erro, só diz que ela esta indefinida, isso pq o JS eleva a declaração para o topo, internamente.
// Com let isso foi corrigido e ocorre erro.
console.log(variavel); // não vai dar erro, só vai mostrar indefinid
var variavel = 'teste';

console.log(variavel); // vai dar erro
let variavel = 'teste';


