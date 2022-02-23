 
 const relogio = document.querySelector('.relogio');
 const botaoIniciar = document.querySelector('.iniciar');
 const botaoPausar = document.querySelector('.pausar');
 const botaoZerar = document.querySelector('.zerar');
 const  data = new Date();   
 let timmer;

 relogio.classList.add('relogio'); 

 function habilitarDesabilitarBotao (botao, habilitar) {
    botao.disabled = !habilitar;
 };     

 habilitarDesabilitarBotao(botaoPausar, false);
 habilitarDesabilitarBotao(botaoZerar, false);
 
 function mostraAvancoHora () {
    relogio.innerText = data.toLocaleTimeString('pt-BR', 
    {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });      
 }

function incrementaSegundos () {
    data.setSeconds(data.getSeconds()+1);
    mostraAvancoHora();
}

function inicializarHora () {    
    data.setHours(0, 0, 0, 0) ;
    mostraAvancoHora();
}

 function executaClickBotaoIniciar(evento) {     
    relogio.classList.remove('relogioPausado');

    habilitarDesabilitarBotao(botaoIniciar, false);
    habilitarDesabilitarBotao(botaoPausar, true);
    habilitarDesabilitarBotao(botaoZerar, false);
    
    timmer = setInterval(incrementaSegundos, 1000);
 }

 function executaClickBotaoPausar(evento) {        
    relogio.classList.add('relogioPausado'); 

    habilitarDesabilitarBotao(botaoPausar, false);
    habilitarDesabilitarBotao(botaoZerar, true);
    habilitarDesabilitarBotao(botaoIniciar, true);
    
    setTimeout(function () { 
        clearInterval(timmer);
    }, 0);        
}

function executaClickBotaoZerar(evento) {
    inicializarHora();  
    relogio.classList.remove('relogioPausado');  
    
    habilitarDesabilitarBotao(botaoZerar, false);
    habilitarDesabilitarBotao(botaoPausar, false);
    habilitarDesabilitarBotao(botaoIniciar, true); 
}

//botaoIniciar.addEventListener('click', executaClickBotaoIniciar);
//botaoPausar.addEventListener('click', executaClickBotaoPausar);
//botaoZerar.addEventListener('click', clickBotaoZerar);
// ############# Tem uma outra forma de adicionar os clicks de uma só vez, assim: #############

document.addEventListener('click', function (evento) {
    const elemento = evento.target; // Esse target é o elemento que foi clicado!

    if (elemento.classList.contains('iniciar')) {
        executaClickBotaoIniciar(evento);
    } else if (elemento.classList.contains('pausar')) {
        executaClickBotaoPausar(evento);
    } else if (elemento.classList.contains('zerar')) {
        executaClickBotaoZerar(evento);
    }
}); 


inicializarHora();
 
