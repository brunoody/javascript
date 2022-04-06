// importando o módulo path
const path = require('path');

// exportando um objeto de configurações
module.exports = {
    mode: 'development', // desenvolvimento, vai tentar diminuir ao máximo o arquivo, encurta nomes de variáveis, sem quebra de linha..
    entry: './src/index.js', // arquivo de entrada
    output: { // é um objeto
        path: path.resolve(__dirname, 'src', 'assets', 'js'), // nesta pasta vai ser gerado o arquivo bunble que contem o código js compativel com navegadores mais antigos
        filename: 'bundle.js'
    }   
}