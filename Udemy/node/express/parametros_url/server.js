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

// comando necessário para que o post receba os parametros pelo req. body
// ver comando post abaixo..
app.use(express.urlencoded({extended: true}))

// exemplo: http://meusite.com/users?id=12155454
// para acrescentar condições usa-se o &:
//http://meusite.com/users?id=12155454@name=toller

// nova rota:
app.get('/testes/:idUsuarios?/:nomeUsuario?',  // o interrogação é para o parametro ser opçional, para não precisar passar nada
        (req, res) => { 
            console.log(req.params);
            console.log(req.query);// aqui é só digitar no navegador
            res.send(req.params+' '+req.query.sobrenome);             
        });
// digitar no navegador:  http://127.0.0.1:3000/testes/123555/toller        
// req.query digitar no navegador http://127.0.0.1:3000/testes/?nome=toller&sobrenome=toller&idade40   
// isso se chama query string: ?nome=toller&sobrenome=toller&idade40   

app.get('/', 
        (req, res) => { 
            res.send(`<form action="/" method="POST"> 
            Nome: <input type="text" name="nome">
            <button>Enviar</button>
            </form>`); 
        });

app.post('/', 
         (req, res) => {             
            res.send(`o que você me enviou foi ${req.body.nome}`);// este nome é do name="nome" do input criado acima             
         });

app.listen(3000, () => { 
    console.log('acessar http://localhost:3000'); 
    console.log('servidor executando na porta 3000')
});
