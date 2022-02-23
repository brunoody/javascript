
function mostraHora() {
    let data = new Date();
    let hora = data.toLocaleTimeString('pt-BR', {hour12: false});
    console.log(hora); 
}

// posso digitar uma função anonima tb.
//setInterval(mostraHora, 1000);// posso parar pelo atalho CTRL + SHIFT + P e digitar Stop Code Run ou atalho CTRL + ALT + M
//jogo para uma constante:
const timmer = setInterval(mostraHora, 1000);
setTimeout(function () { // executa só uma vez;
    clearInterval(timmer);// para o timmer    
}, 5000); // vai executar dentro de 10 segundos

// vai executar depois de 5 segundos de terminar o comando acima
setTimeout(function () {
    console.log('olá')
}, 10000);