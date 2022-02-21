// for of é para tudo que tem indices, itraveis
// não serve para objetos (usar o for in)

const stringSimples = 'Macelo Toller';

for (let valor of stringSimples) {
    console.log(valor) // aqui vem direto o valor, é como o for in do delphi
}

const nomes = ['Ana', 'João', 'Pedro'];

for (let nome of nomes) {
    console.log(nome);
}