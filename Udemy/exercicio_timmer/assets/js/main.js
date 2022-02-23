 
 const relogio = document.querySelector('.relogio');
 const botaoIniciar = document.querySelector('.iniciar');
 const botaoPausar = document.querySelector('.pausar');
 const botaoZerar = document.querySelector('.zerar');
 const  data = new Date();   
 let timmer;

 relogio.classList.add('relogio'); 

 function habilitarDesabilitarBotao (botao, habilitar) {

    if (habilitar) {
        botao.attributes.removeNamedItem('disabled'); 
    } else {
        botao.setAttribute('disabled', 'true');
    };
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

 function clickBotaoIniciar(evento) {     
    relogio.classList.remove('relogioPausado');

    habilitarDesabilitarBotao(botaoIniciar, false);
    habilitarDesabilitarBotao(botaoPausar, true);
    habilitarDesabilitarBotao(botaoZerar, false);
    
    timmer = setInterval(incrementaSegundos, 1000);
 }

 function clickBotaoPausar(evento) {        
    relogio.classList.add('relogioPausado'); 

    habilitarDesabilitarBotao(botaoPausar, false);
    habilitarDesabilitarBotao(botaoZerar, true);
    habilitarDesabilitarBotao(botaoIniciar, true);
    
    setTimeout(function () { 
        clearInterval(timmer);
    }, 0);        
}

function clickBotaoZerar(evento) {
    inicializarHora();  
    relogio.classList.remove('relogioPausado');  
    
    habilitarDesabilitarBotao(botaoZerar, false);
    habilitarDesabilitarBotao(botaoPausar, false);
    habilitarDesabilitarBotao(botaoIniciar, true);   

}

botaoIniciar.addEventListener('click', clickBotaoIniciar);
botaoPausar.addEventListener('click', clickBotaoPausar);
botaoZerar.addEventListener('click', clickBotaoZerar);
inicializarHora();
 
