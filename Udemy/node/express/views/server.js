// acessar a pasta "introdução" pelo terminal usando cd introducao
// inicializar o npm: npm init -y
// instalar o express: npm instal express
// Express é tipo um servidor de internet

///////////////// nodemon é para sempre reiniciar o servidor a cada alteração no código
// instalar (dependencia de desenvolvimento): npm install nodemon --save-dev 
// executar: npx nodemon server.js (é npx mesmo)
// outra maneira de executar é ir no package.json e adicionar ou aterar um script e colocar "start": "nodemon server.js" e depois é só digitar mpm start no terminal

////////////OLHAR DEMAIS COMENTÁRIOS NA PASTA NODEMON E PASTA INTRODUCAO

const express = require('express');
const app = express();
const routes = require('./routes.js')
const path = require('path');
// comando necessário para que o post receba os parametros pelo req. body
// ver comando post abaixo..
app.use(express.urlencoded({extended: true}))

// comando para o app usar o routes:
app.use(routes);

// o primeiro 'views' é o nome do recurso que eu quero usar, no caso, as views
// o src e views é o caminho de onde estão as minhas views e que estou deixando para o path.reesolve resolver p mim
app.set('views', path.resolve(__dirname, 'src', 'views'));

// view engine: mesmo coisa: primeira string é o nome do recurso, e o segundo parametro é a engine que eu quero usar para reinderizar as views, tem vários, aqui vamos usar o ejs
// é necessário instalar o ejs: terminal: npm i ejs
app.set('view engine', 'ejs');





app.listen(3000, () => { 
    console.log('acessar http://localhost:3000'); 
    console.log('servidor executando na porta 3000')
});
