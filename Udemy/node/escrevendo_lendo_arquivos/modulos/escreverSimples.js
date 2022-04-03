const fs = require('fs').promises;
const path = require('path');
const caminhoArquivo = path.resolve(__dirname, '..', 'teste.txt'); // os dois ponto é para voltar uma pasta, vai ser gravado junto com o arwquivo app.js

fs.writeFile(caminhoArquivo, 
             'conteudo do arquivo\n',
             {
                 //flag: 'w', // rewrite, apaga tudo que estiver no arquivo
                 flag: 'a', // append: adiciona o conteudo ao que já tem no arquivo, com esse precisamos colocar qubra de linha no conteudo adicionado: /s
                 encoding: 'utf8' // nem precisaria pois ele já manda o utf8
             });