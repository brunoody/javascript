const mod1 = require('./mod1.js'); // importa tudo que exportei 

// importar somente uma chave:
const falaNome1 = require('./mod1.js').falaNome;

// por  desestruturação:
const {nome, sobreNome} = require('./mod1.js');

console.log(mod1.falaNome());
console.log(falaNome1());
console.log(nome, sobreNome);
