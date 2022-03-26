// pelo que entendi qum a ver com um assunto que ele já falou e exemplificou na auda de funçõies de callback sobre executar funçõesnuma determinada irdem mesmo sem saber qual tempo cada uma vai levar


function rand(max, min) {
    // para já ficar em segundos
    min *= 1000;    
    max *= 1000;
    return Math.floor(Math.random() * (max-min) + min)
}
// assim executa as funções abaixo em ordem aleatória
/* function espera (mensagem, tempo) {
    setTimeout(() => {
        console.log(mensagem)
    }, tempo); 
}
espera('mensagem 1', rand(1,3));
espera('mensagem 2', rand(1,3));
espera('mensagem 3', rand(1,3)); */

// COM PROMISE:
 function espera (mensagem, tempo) {
     // parametro resolve Executa e o reject rejeita, mas nós é que controlamos eles
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // tratando erro:
            if (mensagem === 'mensagem 2') {
                //reject(mensagem + ' é proíbida!')
                reject(new Error(mensagem + ' é proíbida!'))//pode ser assim tb
            } else {
                resolve(mensagem);
            }               
        }, tempo); 
    })    
}
// o then será executado qdo o resolve for executado! e o catch será executado qdo o reject for executado!
espera('mensagem 1', rand(1,3))
    .then(resposta => { // esse resposta é o retorno do quefoi passado no parametro do resolve!
        console.log(resposta);
        // agora encadeio a outra função, a 2!
        return espera('mensagem 2', rand (1,3)); 
    }).then(resposta => {
        console.log(resposta);        
        // agora encadeio a outra função, a 3!
        return espera('mensagem 3', rand (1,3)); 
    }).then(resposta => {//esse then  é da mensagem 3
        console.log(resposta);
    }).then(()=> {
        console.log('frase sem timeout que vai executar sempre por último')// posso simplesmente colocar uma mensagem sem um return anterior
    }) 
    .catch(erro => { // basta somente um catch na cadeia, se qualquer um der erro vai cair aqui e parar o resto. 
        console.log(erro);
    });
    // esse console.log vai executar primeiro pois o código acima é assincrono
    console.log('esse vai executar primeiro.')

