const mod1 = require('./mod1.js'); // importa tudo que exportei 

// importar somente uma chave:
const falaNome1 = require('./mod1.js').falaNome;

// por  desestruturação:
const {nome, sobreNome} = require('./mod1.js');

// importando classe
const { Pessoa } = require('./mod1.js');

console.log(mod1.falaNome());
console.log(falaNome1());
console.log(nome, sobreNome);

pessoaImport = new Pessoa('Marcelo');
console.log(pessoaImport);

//NPM = Gerenciador de pacotes do node
// Comando iniciar o npm:  npm init -y
// comando instalar o axios: npm i axios
// depois de instalar o axior, posso importar sem dar o caminho, apenas informando o nome do pacote:
const axios = require('axios');
//axios.get()
//posso usar direto pois é o proprio get:
axios('https://www.otaviomiranda.com.br/files/json/pessoas.json') // retorna uma promisse
  .then(resposta => console.log(resposta.data)) // mostra o json
  .catch(e => console.log(e));
