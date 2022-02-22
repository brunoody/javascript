

// Obs: Depois do return nada mais será executado.
function soma(x, y) {
    return x + y;
}

console.log(soma(1,2)) // COM DEFAULT

function soma1(x=0, y=0) {
    return x + y;
}
console.log(soma1(5))

// FUNÇÃO ANÔNIMA
let raiz = function(numero) {
    return Math.sqrt(numero)
}; // neste caso precisa de um ; no final
console.log(raiz(144))

// ARROW FUNCTION
let potencia = (numero, elevado) => {
    return Math.pow(numero, elevado)
};
console.log(potencia(5,2))

// Na arrow function, qaundo tem apenas uma linha pode eliminar as chaves e se for só um parametro pode eliminar os parenteses. Elimina-se tb o return:
let raiz1 = parametro => Math.sqrt(parametro);
console.log(raiz1(400))

// outro exemplo:
const retornaMax = (x, y) => {
    return x > y ? x : y;
}
console.log(retornaMax(10, 11));
// no caso acima poderia-se eliminar as chaves e o return pois é uma condição simples:
//const retornaMax = (x, y) => x > y ? x : y;





    

