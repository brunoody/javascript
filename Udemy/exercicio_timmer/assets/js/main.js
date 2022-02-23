 
 const relogio = document.querySelector('.relogio');
 const botaoIniciar = document.querySelector('.iniciar');
 const botaoPausar = document.querySelector('.pausar');
 const botaoZerar = document.querySelector('.zerar');
 const  data = new Date();   
 let timmer;

 relogio.classList.add('relogio'); 
 botaoPausar.setAttribute('disabled', 'true');
 botaoZerar.setAttribute('disabled', 'true');

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
    botaoPausar.attributes.removeNamedItem('disabled'); 
    botaoZerar.setAttribute('disabled', 'true');
    botaoIniciar.setAttribute('disabled', 'true');  
    
    timmer = setInterval(incrementaSegundos, 1000);
 }

 function clickBotaoPausar(evento) {        
    relogio.classList.add('relogioPausado'); 
    botaoPausar.setAttribute('disabled', 'true');
    botaoZerar.attributes.removeNamedItem('disabled');          
    botaoIniciar.attributes.removeNamedItem('disabled'); 
    
    setTimeout(function () { 
        clearInterval(timmer);
    }, 0);        
}

function clickBotaoZerar(evento) {
    inicializarHora();  
    relogio.classList.remove('relogioPausado');    
    botaoZerar.setAttribute('disabled', 'true');
    botaoIniciar.attributes.removeNamedItem('disabled');          
    botaoPausar.attributes.removeNamedItem('disabled');
}

botaoIniciar.addEventListener('click', clickBotaoIniciar);
botaoPausar.addEventListener('click', clickBotaoPausar);
botaoZerar.addEventListener('click', clickBotaoZerar);
inicializarHora();
 
