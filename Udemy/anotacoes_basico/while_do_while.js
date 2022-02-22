function randon (max, min) {
    const r = Math.random() * (max-min) + min; // tem que usar esta fórmula para obter um número maior que 0, o random aqui parece que é entre 0 e 1..
    return Math.floor(r);
}

let numero = 0;
let inc = 1;
while (numero !== 10) { // primeiro confere e depois executa
    numero = randon(50, 1);
    console.log(numero, inc);
    inc++;
};

console.log('#################');

do { // do while: Primeiro executa e depois confere
    numero = randon(50, 1);
    console.log(numero, inc);
    inc++;
} while (numero !== 10);