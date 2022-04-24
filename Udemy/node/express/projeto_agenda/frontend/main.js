//alert('olá mundo');
console.log('teste frontend'); // para olhar no console do navegador quando abrir a index.html para propvar que ele mostra alguma fgalha ou ação neste arquivo original mesmo que na index.html esteja linkada somente a bundle.js
import 'core-js/stable';
import 'regenerator-runtime/runtime';    
import './assets/css/style.css';


// fiz est validação apenas para o login, poderia tb ter fito para a tela de cadastro de contato mas já aprendi como se faz, além disso, depois que coloquei esse código abaixo o webpack esta me dando 3 warnings
import LoginFrontend from './classes-validacoes/LoginFrontend';
const loginRegistro = new LoginFrontend('.form-cadastro-login');
const loginAcesso = new LoginFrontend('.form-acesso-login');
loginRegistro.ativarValidacao();
loginAcesso.ativarValidacao();


