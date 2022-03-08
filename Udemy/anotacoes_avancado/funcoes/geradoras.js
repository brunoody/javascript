
function* geradora1 () {
//em vez do return temo o yield! CADA YIELD ABAIXO É CHAMADO ATRAVEZ DE UM NEXT NA CHAMADA DA FUNÇÃO!
    yield 'Valor 1';
    yield 'Valor 2';
    yield 'Valor 3';
};

const g1 = geradora1();
//console.log(g1); // Assim só mostra que é do tipo Object [Generator]
//console.log(g1.next()); //Assim retorna um objeto! com 2 atributos: value e done, value é o valor "valor1, 2, 3.." e done retorna se já chegou ao último yield

console.log(g1.next().value); // Valor 1
console.log(g1.next().value); // Valor 2
console.log(g1.next().value); // Valor 3
console.log(g1.next().done); // Aqui o done vai ser true

///////////////// gerador infinito //////////////////
function* geradorInfnito() {
    let i = 0;

    while(true) {
        yield i;
        i++;
    }
}
const gerador = geradorInfnito();
console.log(gerador.next().value) // retorna só 0 apesar de ter um while true!!
console.log(gerador.next().value) // retorna 1
console.log(gerador.next().value) // retorna 2
console.log(gerador.next().value) // retorna 3

///////////////// delegando funções //////////////////
function* geradora2() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora3() {
    yield* geradora2(); // este yield tem que ser chamado com *
    yield 3; 
    yield 4; 
    yield 5;     
}
const g3 = geradora3();

for (let valor of g3) {
    console.log(valor);
}

///////////////////////////////////////////
function* geradora4() {
    yield function() {
        console.log('Vim do y1');
    }

    // posso até usar um return aqui mas o yield abaixo nunca será executado..
    return function() {
        console.log('Vim do Return');
    }

    yield function() {
        console.log('Vim do y2');
    }    
}

const g4 = geradora4();
const func1 = g4.next().value; // cada uma é uma função
const func2 = g4.next().value; // cada uma é uma função
func1(); // só chamo a função pois o console.log esta dentro delas
func2();