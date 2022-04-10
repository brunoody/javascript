require ('dotenv').config();// isso aqui é para proteger a minha url de conexão, temos que criar um arquivo na rais chamado apenas .env

const express = require('express');
const app = express();

//Com o dotenv não precisamos desta constante de sstring de conexão
//const connectionString = 'mongodb+srv://marcelotoller:78174949Mt@cursojs01.x2s5l.mongodb.net/meuPrimeiroBancoMongoDb?retryWrites=true&w=majority';
const mongosse = require('mongoose');

const alertaConexaoPronta = 'conexaoMongoPronta';

//Este connect  retorna uma primisse!!!
// aqui em vez de usar a constante de conexão comentada acima, usamo o valor do arquivo .env:
mongosse.connect(process.env.CONNECTIONSTRING, { 
    // este objeto é o proprio mongoose que pede para colocar para evitar warnnings
    useNewUrlParser: true,
    useUnifiedTopology: true})
.then(()=> {
    console.log('conectei a base de dados');
    app.emit(alertaConexaoPronta)})
 .catch((e) => console.log(e)); // neste catch poderia mandar ele patra outra página, outra rota por exemplo;
// A conexão acima começa depois de o nosso servidor começar a "escutar" e precisamos que isso ocorra antes, então dentro do then da promessa da conexão vamos colocar um comando do nosso app emitir um sinal de quando estiver pronto para conectar! app.emit. Lá em baixo, no app.listen pegamos esta notificação e seguimos com nosso servidor.


const routes = require('./routes.js')
const path = require('path');
const meuMidlleware = require(path.resolve(__dirname, 'src', 'midllewares', 'midlleware.js'));

// comando necessário para que o post receba os parametros pelo req. body
// ver comando post abaixo..
app.use(express.urlencoded({extended: true}))

// midlle global. Descobri da pior forma que este use de Midlleware tem que vir DEPOIS da linha acima que é a que permite usar o body nos parametros req e res
app.use(meuMidlleware);


// esta é uma pasta aonde vai ficar meus conteudos estáticis
// ela não é uma rota, não preciso digitar /public
// como exemplo vou colocar um arquivo txt nela e 
// no navegador acesso ele direto, assim: 127.0.0.1:3000/teste.txt
app.use(express.static(path.resolve(__dirname, 'public')));

// comando para o app usar o routes:
app.use(routes);

// o primeiro 'views' é o nome do recurso que eu quero usar, no caso, as views
// o src e views é o caminho de onde estão as minhas views e que estou deixando para o path.reesolve resolver p mim
app.set('views', path.resolve(__dirname, 'src', 'views'));

// view engine: mesmo coisa: primeira string é o nome do recurso, e o segundo parametro é a engine que eu quero usar para reinderizar as views, tem vários, aqui vamos usar o ejs
// é necessário instalar o ejs: terminal: npm i ejs
app.set('view engine', 'ejs');

// aqui o app recebe uma notificação (string conexaoMongoPronta) e pode começar a "escutar"
app.on(alertaConexaoPronta, () => {
    app.listen(3000, () => { 
        console.log('acessar http://localhost:3000'); 
        console.log('servidor executando na porta 3000')
    });    
})


