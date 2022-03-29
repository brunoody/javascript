
const numero1 = 10;
const numero2 = 20;
let objeto = {
    nome: 'Marcelo1',
    sobrenome: 'Toller1'
};

function soma(x,y) {
    return x + y;
}

export {numero1, objeto as objetoExport, soma}

// posso criar e já exportar, posso continuar usando aqui nesta unit:
export const numero3 = 3;
export function multiplica(x,y) {
    return x*y;
}

export class Pessoa {
    constructor(nome, sobrenome ){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

// só posso exportar uma unica coisa como default
export default function funcaoDefault () {
    return 'funcaoDefault';
}

// para poder exportar uma constante como default:
//const teste = 'teste';
//export {teste as defaul}

