// acessar a pasta "introdução" pelo terminal usando cd introducao
// inicializar o npm: npm init -y
// instalar o express: npm instal express
// Express é tipo um servidor de internet

const express = require('express');
const app = express();

//CRUD  CREATE    READ   UPDATE   DELETE
//      POST      GET    PUT      DELETE

//http://meusite.com.br/ esta barra é a minha rota inicial ou seja, a primeira coisa que aparece qdo acessam o meu site
//http://meusite.com.br/sobre/ aqui já temos outra rota que aponta para a página sobre

/*app.get('/', // rota, página inicial
        (req, res) => { // função request response
            res.send('olá <p>mundo</p>'); // posso colocar html aqui
        });
//meu app tem que ficar "ouvindo" a requisição em alguma porta. portas são processos, precisa ser uma porta 
vaga. 
*/

// criando um formulario no raíz, só de exemplo
app.get('/', 
        (req, res) => { 
            res.send(`<form action="/" method="POST"> 
            Nome: <input type="text" name="nome">
            <button>Enviar</button>
            </form>`); 
        });
// agora, para reber o post do form acima tenho que associar um post ao /
app.post('/', 
         (req, res) => {
            res.send('Post Recebido');
         });

app.get('/contato', // rota, página contao
        (req, res) => { 
            res.send('<p>Obrigado por entrar em contato</p>'); 
        });

app.listen(3000, () => { // função só para mostrar que o servidor esta executando..
    console.log('acessar http://localhost:3000'); // o node vai me criar um link clicaavel, mas posso digitar isso no navegador direto ou 127.0.0.1:3000
    console.log('servidor executando na porta 3000')
});
// exectar o servidor pelo terminal (nãao clicar no "play" do node como estou acostumado pois o servidor não para mais, só com comando de parar: ctrl + shift + p e digitar stop code runner)
// usar o terminar com esse comando: node server.js, para parar é dó digitar ctrl + c ou usar direto o 
//ctrl +alt +m
// qualquer mudança no código tenho que parar o servidor e reiniciar

