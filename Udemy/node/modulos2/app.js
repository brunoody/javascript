//importando o módulo que contem apeenas uma função:

//const multiplicacao = require('./mod1');
//console.log(multiplicacao(2,2));

const classeCachorro = require('./mod1');

const cachorro = new classeCachorro('rex')     ;
cachorro.latir();

// navegar nas pastas: um ponto sgnifica ir para frete
const PessoaImportado = require('./A/B/C/mod2') 

// dois pontos volta um nível! se quiser voltar mais uma past seria ../..
const PessoaImportadoModulo1 = require('../modulos1/mod1') .Pessoa;

const pessoa = new PessoaImportadoModulo1('maria')     ;
console.log(pessoa .nome);

// variaveis que mostram o caminho do arquivo e o arquivo:
console.log(__filename);
console.log(__dirname);
// módulo do node para lidar com caminhos:
const path = require('path');
console.log(path.resolve(__dirname, '..', '..')) // volta duas pastas, no caso vai para a udemy
// da udemy posso ir para outrad pastad quaisquer dentro da Udemy:
console.log(path.resolve(__dirname, '..', '..', 'anotacoes_basico', 'exercicio1'))
