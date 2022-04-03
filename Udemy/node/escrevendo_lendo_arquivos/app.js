const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json'); 

const escreverJson = require('./modulos/escreverJson');
const lerJson = require('./modulos/lerJson'); // isso retorna uma promisse!!!

const pessoas = [ // array de objetos
    {nome: 'João', sobenome: "silva", idade: 35},
    {nome: 'Paulo', sobenome: "silva", idade: 50},
    {nome: 'Maria', sobenome: "silva", idade: 12},
    {nome: 'Ana', sobenome: "silva", idade: 88},
    {nome: 'Luiz', sobenome: "silva", idade: 17}
]; 

const stringJson = JSON.stringify(pessoas, '', 2); // o 2 é a identação

escreverJson(caminhoArquivo, stringJson);

async function lerObjetoJson(caminho){    

    const dados = await lerJson(caminho);    

    const arrayObjetoJson = JSON.parse(dados);

    console.log(arrayObjetoJson);
    // ou 
    arrayObjetoJson.forEach(element => {
        console.log(element)
    });
}

lerObjetoJson(caminhoArquivo);

